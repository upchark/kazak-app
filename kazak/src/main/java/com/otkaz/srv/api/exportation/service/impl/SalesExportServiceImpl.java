package com.otkaz.srv.api.exportation.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.http.HttpServletResponse;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.exportation.enums.CCReportType;
import com.otkaz.srv.api.exportation.pojo.SalesItemExportData;
import com.otkaz.srv.api.exportation.service.SalesExportService;
import com.otkaz.srv.api.service.SalesService;
import com.otkaz.srv.dto.SalesPivotItemDto;
import com.otkaz.srv.enums.CCSortType;
import com.otkaz.srv.enums.Periodicities;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.SalesItemView;
import com.otkaz.srv.repository.OrderReportRepository;
import com.otkaz.srv.utils.constants.TableNames;
import com.otkaz.srv.utils.levels.SalesCountries;
import com.otkaz.srv.utils.levels.SalesCustomers;
import com.otkaz.srv.utils.levels.SalesProducts;
import com.otkaz.srv.utils.levels.SalesRegion;

/**
 * @Author Anish
 * @Date 26-Aug-2021
 *
 */
@Service(value = "salesExportService")
public class SalesExportServiceImpl implements SalesExportService {

	private static final String SELECT_FIELDS = "SUM(NVL(NET_VOLUME, 0)) netVolume, "
			+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END exwUsdPerTon, "
			+ "SUM(NVL((SP_AMT), 0)) exwAmountInMillion, SUM(NVL(VAT_USD, 0)) vatAmountInMillion, SUM(NVL(GrossNetOfVat_USD, 0)) grossNetOfVat, "
			+ "SUM(NVL(CONTR_AMT, 0)) contributionAmountInMillion,"
			+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END contributionUsdPerTon";

	private static final String[] AGGREGATE_COLUMN_NAMES = new String[] { "netVolume", "exwUsdPerTon",
			"exwAmountInMillion", "vatAmountInMillion", "grossNetOfVat", "contributionAmountInMillion", "contributionUsdPerTon" };

	private static final String SUBQUERY_SELECT_FIELDS = "SUM(netVolume) AS netVolume, SUM(exwAmountInMillion) / SUM(netVolume) AS exwUsdPerTon,"
			+ "SUM(exwAmountInMillion) AS exwAmountInMillion, SUM(vatAmountInMillion) AS vatAmountInMillion, "
			+ "SUM(grossNetOfVat) AS grossNetOfVat, SUM(contributionAmountInMillion) AS contributionAmountInMillion,"
			+ "SUM(contributionAmountInMillion) / SUM(netVolume) AS contributionUsdPerTon";
	
	@Autowired
	private EntityManager entityManager;

	@Autowired
	private OrderReportRepository orderReportRepository;

	@Autowired
	private SalesService salesService;

	@Override
	public void exportSalesData(CCReportType ccReportType, Periodicities periodicity, Integer periodLevel, Integer year,

			String region, String customer, String sortBy, boolean descending, boolean groupLevels,
			HttpServletResponse response) throws OTException {
		try {
			final Class<?> definedLevelClass = getDefinedLevelClass(ccReportType);
			final int totalLevels = ((Integer) definedLevelClass.getField("TOTAL_LEVELS").get(definedLevelClass))
					.intValue();

			final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);

			final String selectQuery = buildExportDataRetrievalQuery(TableNames.TABLE_NAME_BILLING_F161B, SELECT_FIELDS, SUBQUERY_SELECT_FIELDS,
					AGGREGATE_COLUMN_NAMES, definedLevelClass, totalLevels,

					buildWhereClauseForCommercialControlling(dateFilter, region, customer, definedLevelClass,
							totalLevels),
					sortBy, descending, groupLevels, 0);

			final Query query = entityManager.createNativeQuery(selectQuery);

			@SuppressWarnings("unchecked")
			List<SalesItemExportData> data = ((List<Object[]>) query.getResultList()).stream()
					.map(SalesItemExportData::new).collect(Collectors.toList());

			writeToResponse(response, data, fetchTotal(dateFilter[0], dateFilter[1], region, customer), SalesItemExportData.class,
					buildHeaderNames(groupLevels, totalLevels, definedLevelClass), totalLevels, groupLevels,
					"Sales_" + ccReportType + "_", "Sales_" + ccReportType, dateFilter);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException(e.getMessage());
		}
	}

	/**
	 * Fetch Total to be added as last row in the excel file
	 * 
	 * @param fromDate
	 * @param toDate
	 * @param region
	 * @return
	 */
	private SalesItemExportData fetchTotal(String fromDate, String toDate, String region, String customer) {
		SalesItemView salesItemView = orderReportRepository
				.fetchTotalForSales((region != null) ? region.toLowerCase() : region, fromDate, toDate, customer);
		return new SalesItemExportData(salesItemView);
	}

	/**
	 * Get the class type according to the report type provided
	 * 
	 * @param ccReportType
	 * @return
	 */
	private Class<?> getDefinedLevelClass(CCReportType ccReportType) {
		Class<?> definedLevelClass = null;
		switch (ccReportType) {
		case BY_COUNTRY:
			definedLevelClass = SalesCountries.class;
			break;
		case BY_REGION:
			definedLevelClass = SalesRegion.class;
			break;
		case BY_CUSTOMERS:
			definedLevelClass = SalesCustomers.class;
			break;
		default:
			definedLevelClass = SalesProducts.class;
			break;
		}
		return definedLevelClass;
	}

	@Override
	public void exportTopCustomers(Periodicities periodicity, Integer periodLevel, Integer year, String region,
			String topBy, @NotNull CCSortType ccSortType, HttpServletResponse response) throws OTException {
		try {
			final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
			List<SalesItemExportData> data = salesService
					.fetchSalesByTopCustomers(periodicity, periodLevel, year, region, topBy, ccSortType).stream()
					.map(entry -> new SalesItemExportData((SalesPivotItemDto) entry)).collect(Collectors.toList());
			SalesItemExportData totalDto = new SalesItemExportData((SalesPivotItemDto) salesService
					.fetchTotalSalesByTopCustomers(periodicity, periodLevel, year, region, topBy, ccSortType));
			writeToResponse(response, data, totalDto, SalesItemExportData.class,
					buildHeaderNames(false, 4, SalesCustomers.class), 4, false, "Sales_Top_Customers_",
					"Sales_Top_Customers", dateFilter);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException(e.getMessage());
		}
	}

}
