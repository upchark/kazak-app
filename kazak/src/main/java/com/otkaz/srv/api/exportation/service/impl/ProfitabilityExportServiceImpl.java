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
import com.otkaz.srv.api.exportation.pojo.ProfitabilityItemExportData;
import com.otkaz.srv.api.exportation.service.ProfitabilityExportService;
import com.otkaz.srv.api.service.ProfitabilityService;
import com.otkaz.srv.dto.ProfitabilityPivotItemDto;
import com.otkaz.srv.enums.CCSortType;
import com.otkaz.srv.enums.Periodicities;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.ProfitabilityItemView;
import com.otkaz.srv.repository.OrderReportRepository;
import com.otkaz.srv.utils.constants.TableNames;
import com.otkaz.srv.utils.levels.ProfitabilityCountries;
import com.otkaz.srv.utils.levels.ProfitabilityCustomers;
import com.otkaz.srv.utils.levels.ProfitabilityProducts;
import com.otkaz.srv.utils.levels.ProfitabilityRegion;

/**
 * 
 * Implementation for Excel exporting of ProfitabilityExportService
 * 
 * @Author Anish
 * @Date 01-Sep-2021
 *
 */
@Service(value = "profitabilityExportService")
public class ProfitabilityExportServiceImpl implements ProfitabilityExportService {

	private static final String SELECT_FIELDS = "SUM(NVL(NET_VOLUME, 0)) netVolume, "
			+ "SUM(NVL(SP_AMT, 0)) nrpAmountInMillion, "
			+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END nrpUsdPerTon, "
			+ "SUM(NVL(EBITDA_AMT, 0)) ebitdaAmountInMillion, "
			+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(EBITDA_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END ebitdaUsdPerTon, "
			+ "SUM(NVL(CONTR_AMT, 0)) contributionAmountInMillion, "
			+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END contributionUsdPerTon";

	private static final String[] AGGREGATE_COLUMN_NAMES = new String[] { "netVolume", "nrpAmountInMillion",
			"nrpUsdPerTon", "ebitdaAmountInMillion", "ebitdaUsdPerTon", "contributionAmountInMillion",
			"contributionUsdPerTon" };
	
	private static final String SUBQUERY_SELECT_FIELDS = "SUM(netVolume) AS netVolume,  SUM(nrpAmountInMillion) AS nrpAmountInMillion, "
			+ "SUM(nrpAmountInMillion) / SUM(netVolume) AS nrpUsdPerTon,  SUM(ebitdaAmountInMillion) AS ebitdaAmountInMillion, "
			+ "SUM(ebitdaAmountInMillion) / SUM(netVolume) AS ebitdaUsdPerTon, SUM(contributionAmountInMillion) AS contributionAmountInMillion,"
			+ "SUM(contributionAmountInMillion) / SUM(netVolume) AS contributionUsdPerTon ";

	@Autowired
	private EntityManager entityManager;

	@Autowired
	private OrderReportRepository orderReportRepository;

	@Autowired
	private ProfitabilityService profitabilityService;

	@Override
	public void exportProfitabilityData(CCReportType ccReportType, Periodicities periodicity, Integer periodLevel,
			Integer year, String region, String customer, String sortBy, boolean descending, boolean groupLevels,
			Integer filterNegativeEBITDA, HttpServletResponse response) throws OTException {
		try {
			final Class<?> definedLevelClass = getDefinedLevelClass(ccReportType);
			final int totalLevels = ((Integer) definedLevelClass.getField("TOTAL_LEVELS").get(definedLevelClass))
					.intValue();

			final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);

			final String selectQuery = buildExportDataRetrievalQuery(TableNames.TABLE_NAME_BILLING_F161B, SELECT_FIELDS, SUBQUERY_SELECT_FIELDS,
					AGGREGATE_COLUMN_NAMES, definedLevelClass, totalLevels,

					buildWhereClauseForCommercialControlling(dateFilter, region, customer, definedLevelClass,
							totalLevels),
					sortBy, descending, groupLevels, filterNegativeEBITDA);

			final Query query = entityManager.createNativeQuery(selectQuery);

			@SuppressWarnings("unchecked")
			List<ProfitabilityItemExportData> data = ((List<Object[]>) query.getResultList()).stream()
					.map(ProfitabilityItemExportData::new).collect(Collectors.toList());

			writeToResponse(response, data,
					fetchTotal(dateFilter[0], dateFilter[1], region, customer, filterNegativeEBITDA),
					ProfitabilityItemExportData.class, buildHeaderNames(groupLevels, totalLevels, definedLevelClass),
					totalLevels, groupLevels, "Profitability_" + ccReportType + "_", "Profitability_" + ccReportType,
					dateFilter);
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
	 * @param filterNegativeEBITDA
	 * @return
	 */
	private ProfitabilityItemExportData fetchTotal(String fromDate, String toDate, String region, String customer,
			Integer filterNegativeEBITDA) {
		ProfitabilityItemView profitabilityItemView = orderReportRepository.fetchTotalForProfitabilityExport(
				(region != null) ? region.toLowerCase() : region, fromDate, toDate, filterNegativeEBITDA, customer);
		return new ProfitabilityItemExportData(profitabilityItemView);
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
			definedLevelClass = ProfitabilityCountries.class;
			break;
		case BY_REGION:
			definedLevelClass = ProfitabilityRegion.class;
			break;
		case BY_CUSTOMERS:
			definedLevelClass = ProfitabilityCustomers.class;
			break;
		default:
			definedLevelClass = ProfitabilityProducts.class;
			break;
		}
		return definedLevelClass;
	}

	@Override
	public void exportTopCustomers(Periodicities periodicity, Integer periodLevel, Integer year, String region,
			String topBy, @NotNull CCSortType ccSortType, HttpServletResponse response) throws OTException {
		try {
			final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
			List<ProfitabilityItemExportData> data = profitabilityService
					.fetchProfitabilityByTopCustomers(periodicity, periodLevel, year, region, topBy, ccSortType)
					.stream().map(entry -> new ProfitabilityItemExportData((ProfitabilityPivotItemDto) entry))
					.collect(Collectors.toList());
			ProfitabilityItemExportData totalDto = new ProfitabilityItemExportData(
					(ProfitabilityPivotItemDto) profitabilityService.fetchTotalProfitabilityByTopCustomers(periodicity,
							periodLevel, year, region, topBy, ccSortType));
			writeToResponse(response, data, totalDto, ProfitabilityItemExportData.class,
					buildHeaderNames(false, 4, ProfitabilityCustomers.class), 4, false, "Profitability_Top_Customers_",
					"Profitabilitys_Top_Customers", dateFilter);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException(e.getMessage());
		}
	}

}
