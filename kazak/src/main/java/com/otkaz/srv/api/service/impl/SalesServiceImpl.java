package com.otkaz.srv.api.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.SalesService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.CustomerDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.RegionDto;
import com.otkaz.srv.dto.SalesDto;
import com.otkaz.srv.dto.SalesItemDto;
import com.otkaz.srv.dto.SalesPivotItemDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.enums.CCSortType;
import com.otkaz.srv.enums.Periodicities;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.projection.CustomerView;
import com.otkaz.srv.projection.RegionView;
import com.otkaz.srv.projection.SalesItemView;
import com.otkaz.srv.projection.SalesPivotItemView;
import com.otkaz.srv.repository.OrderReportRepository;
import com.otkaz.srv.utils.QueryUtils;
import com.otkaz.srv.utils.Utils;
import com.otkaz.srv.utils.constants.TableNames;
import com.otkaz.srv.utils.levels.SalesCountries;
import com.otkaz.srv.utils.levels.SalesCustomers;
import com.otkaz.srv.utils.levels.SalesProducts;
import com.otkaz.srv.utils.levels.SalesRegion;

@Service(value = "salesService")
public class SalesServiceImpl implements SalesService {
	
	private static final int FIRST_LEVEL = 1;
	
	private static final int SECOND_LEVEL = 2;
	
	private static final int THIRD_LEVEL = 3;
	
	private static final int FOURTH_LEVEL = 4;
	
	private static final int FIFTH_LEVEL = 5;
	
	private static final String SELECT_FIELDS = " SUM(NET_VOLUME) netVolume, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(SP_AMT) / SUM(NET_VOLUME)) END exwUsdPerTon, "
			+ "	SUM(SP_AMT) exwAmountInMillion, "
			+ "	CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(CONTR_AMT) / SUM(NET_VOLUME)) END contributionUsdPerTon, "
			+ " SUM(CONTR_AMT) contributionAmountInMillion, "
			+ "	SUM(VAT_USD) vatAmountInMillion, "
			+ "	SUM(GrossNetOfVat_USD) grossNetOfVat ";
	
	@Autowired
	private EntityManager entityManager;
	
	@Autowired
	private OrderReportRepository orderReportRepository;

	@Override
	public List<RegionDto> fetchRegions() {
		List<RegionView> responseList = orderReportRepository.fetchSalesRegions();
		List<RegionDto> response = new ArrayList<RegionDto>();
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				response.add(new RegionDto(item));
			});
		}
		return response;
	}
	
	@Override
	public List<CustomerDto> fetchCustomers() {
		List<CustomerView> responseList = orderReportRepository.fetchSalesCustomers();
		List<CustomerDto> response = new ArrayList<CustomerDto>();
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				response.add(new CustomerDto(item));
			});
		}
		return response;
	}
	
	@Override
	public PaginationDto fetchSalesByProductsPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		Page<SalesPivotItemView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.orderReportRepository.fetchSalesProductsPivot(region, dateFilter[0], dateFilter[1], customer, pagingParams);
		} else {
			responseList = this.orderReportRepository.fetchSalesProductsPivot(region, dateFilter[0], dateFilter[1], customer, pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				SalesPivotItemDto salesPivotItemDto = new SalesPivotItemDto(item);
				baseDto.add(salesPivotItemDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}
	
	@Override
	public SalesDto fetchSalesByProducts(String[] billToPay, Periodicities periodicity, Integer periodLevel, Integer level, Integer year, String region, String customer) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {

		List<Object[]> dbResponseList = null;
		SalesDto salesDto = new SalesDto() ;
		if (billToPay.length==0) {
			String query = buildAllLevelQuery(periodicity, periodLevel, year, level, SalesProducts.LEVEL_1, billToPay, region, customer, SalesProducts.class);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			salesDto.setParent(null);
		}else {
			String query = buildDynamicProductQuery(periodicity, periodLevel, year, level, billToPay, region, customer, SalesProducts.class);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			salesDto.setParent(billToPay[billToPay.length-1]);
		}
		List<SalesItemDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToSalesItemDto(response, level, 2);
		}).collect(Collectors.toList());
		salesDto.setCount(ls.size());
		salesDto.setLevel(level);
		salesDto.setData(ls);
		return salesDto;
	}
	
	@Override
	public SalesItemDto fetchSalesByProductsTotal(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer) {
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		SalesItemView salesItemView = orderReportRepository.fetchTotalSalesProducts(region, dateFilter[0], dateFilter[1], customer);
		SalesItemDto salesItemDto = new SalesItemDto(salesItemView);
		return salesItemDto;
	}
	
	@Override
	public PaginationDto fetchSalesByCountriesPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, Pageable pagingParams, String customer) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		Page<SalesPivotItemView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.orderReportRepository.fetchSalesCountriesPivot(region, dateFilter[0], dateFilter[1], customer, pagingParams);
		} else {
			responseList = this.orderReportRepository.fetchSalesCountriesPivot(region, dateFilter[0], dateFilter[1],customer,  pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				SalesPivotItemDto salesPivotItemDto = new SalesPivotItemDto(item);
				baseDto.add(salesPivotItemDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}
	
	@Override
	public SalesDto fetchSalesByCountries(String[] billToPay, Periodicities periodicity, Integer periodLevel, Integer level, Integer year, String region, String customer) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		List<Object[]> dbResponseList = null;
		SalesDto salesDto = new SalesDto() ;
		if (billToPay.length==0) {
			String query = buildAllLevelQuery(periodicity, periodLevel, year, level, SalesCountries.LEVEL_1, billToPay, region, customer, SalesCountries.class);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			salesDto.setParent(null);
		}else {
			String query = buildDynamicProductQuery(periodicity, periodLevel, year, level, billToPay, region, customer, SalesCountries.class);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			salesDto.setParent(billToPay[billToPay.length-1]);
		}
		List<SalesItemDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToSalesItemDto(response, level, 3);
		}).collect(Collectors.toList());
		salesDto.setCount(ls.size());
		salesDto.setLevel(level);
		salesDto.setData(ls);
		return salesDto;
	}
	
	@Override
	public SalesItemDto fetchSalesByCountriesTotal(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer) {
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		SalesItemView salesItemView = orderReportRepository.fetchTotalSalesCountries(region, dateFilter[0], dateFilter[1], customer);
		SalesItemDto salesItemDto = new SalesItemDto(salesItemView);
		return salesItemDto;
	}
	
	@Override
	public PaginationDto fetchSalesByCustomersPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region,  String customer, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		Page<SalesPivotItemView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.orderReportRepository.fetchSalesCustomersPivot(region, dateFilter[0], dateFilter[1], customer, pagingParams);
		} else {
			responseList = this.orderReportRepository.fetchSalesCustomersPivot(region, dateFilter[0], dateFilter[1], customer,  pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				SalesPivotItemDto salesPivotItemDto = new SalesPivotItemDto(item);
				baseDto.add(salesPivotItemDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}
	
	@Override
	public PaginationDto fetchSalesByRegionPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer, Pageable pagingParams) {
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		Page<SalesPivotItemView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.orderReportRepository.fetchSalesRegionPivot(region, dateFilter[0], dateFilter[1], customer, pagingParams);
		} else {
			responseList = this.orderReportRepository.fetchSalesRegionPivot(region, dateFilter[0], dateFilter[1], customer, pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				SalesPivotItemDto salesPivotItemDto = new SalesPivotItemDto(item);
				baseDto.add(salesPivotItemDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}

	
	@Override
	public SalesDto fetchSalesByCustomers(String[] billToPay, Periodicities periodicity, Integer periodLevel, Integer level,
			Integer year, String region, String customer)
			throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		List<Object[]> dbResponseList = null;
		SalesDto salesDto = new SalesDto() ;
		if (billToPay.length==0) {
			String query = buildAllLevelQuery(periodicity, periodLevel, year, level, SalesCustomers.LEVEL_1, billToPay, region, customer,SalesCustomers.class);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			salesDto.setParent(null);
		}else {
			String query = buildDynamicProductQuery(periodicity, periodLevel, year, level, billToPay, region, customer, SalesCustomers.class);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			salesDto.setParent(billToPay[billToPay.length-1]);
		}
		List<SalesItemDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToSalesItemDto(response, level, 4);
		}).collect(Collectors.toList());
		salesDto.setCount(ls.size());
		salesDto.setLevel(level);
		salesDto.setData(ls);
		return salesDto;
	}
	
	
	@Override
	public SalesItemDto fetchSalesByCustomersTotal(Periodicities periodicity, Integer periodLevel, Integer year,
			String region, String customer) {
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		SalesItemView salesItemView = orderReportRepository.fetchTotalSalesCustomers(region, dateFilter[0], dateFilter[1], customer);
		SalesItemDto salesItemDto = new SalesItemDto(salesItemView);
		return salesItemDto;
	}
	

	@Override
	public SalesDto fetchSalesByRegion(String[] billToPay, Periodicities periodicity, Integer periodLevel, Integer level,
			Integer year, String region, String customer)
			throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		List<Object[]> dbResponseList = null;
		SalesDto salesDto = new SalesDto() ;
		if(billToPay == null) billToPay = new String[0];
		if (billToPay.length==0) {
			String query = buildAllLevelQuery(periodicity, periodLevel, year, level, SalesRegion.LEVEL_1, billToPay, region,customer, SalesRegion.class);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			salesDto.setParent(null);
		}else {
			String query = buildDynamicProductQuery(periodicity, periodLevel, year, level, billToPay, region,customer, SalesRegion.class);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			salesDto.setParent(billToPay[billToPay.length-1]);
		}
		List<SalesItemDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToSalesItemDto(response, level, 3);
		}).collect(Collectors.toList());
		salesDto.setCount(ls.size());
		salesDto.setLevel(level);
		salesDto.setData(ls);
		return salesDto;
	}
	
	
	@Override
	public SalesItemDto fetchSalesByRegionTotal(Periodicities periodicity, Integer periodLevel, Integer year,
			String region, String customer) {
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		SalesItemView salesItemView = orderReportRepository.fetchTotalSalesRegion(region, dateFilter[0], dateFilter[1], customer);
		SalesItemDto salesItemDto = new SalesItemDto(salesItemView);
		return salesItemDto;
	}
	
	
	private SalesItemDto convertToSalesItemDto(Object[] response, Integer level, Integer maxLevel) {
		SalesItemDto salesItemDto = new SalesItemDto();
		salesItemDto.setName((String) response[0]);
		salesItemDto.setLevel(level);
		salesItemDto.setNetVolume((BigDecimal) response[1]);
		salesItemDto.setExwUsdPerTon((BigDecimal) response[2]);
		salesItemDto.setExwAmountInMillion((BigDecimal) response[3]);
		salesItemDto.setContributionUsdPerTon((BigDecimal) response[4]);
		salesItemDto.setContributionAmountInMillion((BigDecimal) response[5]);
		salesItemDto.setVatAmountInMillion((BigDecimal) response[6]);
		salesItemDto.setGrossNetOfVat((BigDecimal) response[7]);
		salesItemDto.setSubRow(level >= maxLevel ? false : true);
		return salesItemDto;
	}

	private String buildAllLevelQuery(Periodicities periodicity, Integer periodLevel, Integer year, 
			Integer level, String levelName, String[] billToPay, String region, String customer, Class<?> clazz) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		String query = new String();
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		String whereCondition = buildWhereCondition(dateFilter[0], dateFilter[1], level, billToPay, region, customer, clazz);
		query = getProductQuery(level, levelName, whereCondition);
		return query;
	}

	private String getProductQuery(Integer level, String levelName, String whereCondition) {
		String query = "select LTRIM(RTRIM(tb." + levelName + ")) as billToName, "
				+ SELECT_FIELDS + "	FROM " + TableNames.TABLE_NAME_BILLING_F161B + " tb "
//				+ SELECT_FIELDS + "	FROM tb_ocp_products inv left join " + TableNames.TABLE_NAME_BILLING_F161B + " tb on inv.name = tb.product  "
				+ whereCondition
				+ " GROUP by tb." + levelName;
		return query;
	}

	private String buildDynamicProductQuery(Periodicities periodicity, Integer periodLevel, Integer year, 
			Integer level, String[] billToPay, String region, String customer, Class<?> clazz) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		String query = new String();
		switch (level) {
			case (SECOND_LEVEL):
				query = buildAllLevelQuery(periodicity, periodLevel, year, level, clazz.getField("LEVEL_2").get(clazz).toString(), billToPay, region, customer, clazz);
			break;
			case (THIRD_LEVEL):
				query = buildAllLevelQuery(periodicity, periodLevel, year, level, clazz.getField("LEVEL_3").get(clazz).toString(), billToPay, region, customer, clazz);
			break;
			case (FOURTH_LEVEL):
				query = buildAllLevelQuery(periodicity, periodLevel, year, level, clazz.getField("LEVEL_4").get(clazz).toString(), billToPay, region, customer, clazz);
			break;
			case (FIFTH_LEVEL):
				query = buildAllLevelQuery(periodicity, periodLevel, year, level, clazz.getField("LEVEL_5").get(clazz).toString(), billToPay, region, customer, clazz);
			break;
		}
		return query;
	}

	private String buildWhereCondition(String fromDate, String toDate, Integer level, String[] billToPay, String region, String customer, Class<?> clazz) 
			throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		String where = " WHERE TO_DATE(tb.BILL_DATE, 'YYYYMMDD') "
				+ "	BETWEEN TO_DATE('" + fromDate + "', 'DD/MM/YYYY') "
				+ "	AND TO_DATE('" + toDate + "', 'DD/MM/YYYY') ";
		if(region != null) {
			where += (where.isEmpty() ? " where " : " and ") + " tb.region = '" + region + "' ";
		}
		if(customer != null) {
			where += (where.isEmpty() ? " where " : " and ") + " tb.customer_name = '" + customer + "' ";
		}
		switch (level) {
			case (FIRST_LEVEL):			
			break;
			case (SECOND_LEVEL):
				where += (where.isEmpty() ? " where " : " and ") + " tb." + clazz.getField("LEVEL_1").get(clazz).toString()
					+ (billToPay[0] == null || billToPay[0].isEmpty() ? " is null " : " = '" + QueryUtils.formatQueryParam(billToPay[0]) + "' ");
			break;
			case (THIRD_LEVEL):
				where += (where.isEmpty() ? " where " : " and ") + " tb." + clazz.getField("LEVEL_1").get(clazz).toString()
						+ (billToPay[0] == null || billToPay[0].isEmpty() ? " is null " : " = '" + QueryUtils.formatQueryParam(billToPay[0]) + "' ")
						+ " and tb." + clazz.getField("LEVEL_2").get(clazz).toString()
						+ (billToPay[1] == null || billToPay[1].isEmpty() ? " is null " : " = '" + QueryUtils.formatQueryParam(billToPay[1]) + "' ");
			break;
			case (FOURTH_LEVEL):
				where += (where.isEmpty() ? " where " : " and ") + " tb." + clazz.getField("LEVEL_1").get(clazz).toString()
						+ (billToPay[0] == null || billToPay[0].isEmpty() ? " is null " : " = '" + QueryUtils.formatQueryParam(billToPay[0]) + "' ")
						+ " and tb." + clazz.getField("LEVEL_2").get(clazz).toString()
						+ (billToPay[1] == null || billToPay[1].isEmpty() ? " is null " : " = '" + QueryUtils.formatQueryParam(billToPay[1]) + "' ")
						+ " and tb." + clazz.getField("LEVEL_3").get(clazz).toString()
						+ (billToPay[2] == null || billToPay[2].isEmpty() ? " is null " : " = '" + QueryUtils.formatQueryParam(billToPay[2]) + "' ");
			break;
			case (FIFTH_LEVEL):
				where += (where.isEmpty() ? " where " : " and ") + " tb." + clazz.getField("LEVEL_1").get(clazz).toString()
						+ (billToPay[0] == null || billToPay[0].isEmpty() ? " is null " : " = '" + QueryUtils.formatQueryParam(billToPay[0]) + "' ")
						+ " and tb." + clazz.getField("LEVEL_2").get(clazz).toString()
						+ (billToPay[1] == null || billToPay[1].isEmpty() ? " is null " : " = '" + QueryUtils.formatQueryParam(billToPay[1]) + "' ")
						+ " and tb." + clazz.getField("LEVEL_3").get(clazz).toString()
						+ (billToPay[2] == null || billToPay[2].isEmpty() ? " is null " : " = '" + QueryUtils.formatQueryParam(billToPay[2]) + "' ")
						+ " and tb." + clazz.getField("LEVEL_4").get(clazz).toString()
						+ (billToPay[3] == null || billToPay[3].isEmpty() ? " is null " : " = '" + QueryUtils.formatQueryParam(billToPay[3]) + "' ");
		}
		return where;
	}

	////////////// TOP 10 CUSTOMERS //////////////////

	private final List<String> apiFields = Arrays
			.asList(new String[] { "net_volume", "exw_usd_per_ton", "exw_amount_in_million", "contribution_usd_per_ton",
					"contribution_amount_in_million", "vat_amount_in_million", "gross_net_of_vat" });
	private final List<String> queryFields = Arrays
			.asList(new String[] { "netVolume", "exwUsdPerTon", "exwAmountInMillion", "contributionUsdPerTon",
					"contributionAmountInMillion", "vatAmountInMillion", "grossNetOfVat" });
	
	@Override
	public List<BaseDto> fetchSalesByTopCustomers(Periodicities periodicity, Integer periodLevel, Integer year,
			String region, String topBy, CCSortType ccSortType) {
		String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		String query = buildTopCustomersSelectQuery(region, dateFilter[0], dateFilter[1],
				convertToQueryField(topBy.trim(), apiFields, queryFields), TOP_CUSTOMER_LIMIT, ccSortType);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		return dbResponseList.stream().map(SalesPivotItemDto::new).collect(Collectors.toList()); 
	}

	@Override
	public BaseDto fetchTotalSalesByTopCustomers(Periodicities periodicity, Integer periodLevel, Integer year,
			String region, String topBy, CCSortType ccSortType) {
		String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		String query = buildTotalTopCustomersSelectQuery(region, dateFilter[0], dateFilter[1],
				convertToQueryField(topBy.trim(), apiFields, queryFields), TOP_CUSTOMER_LIMIT, ccSortType);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		SalesPivotItemDto resultDto = new SalesPivotItemDto();
		resultDto.setLevel1("TOTAL");
		if (dbResponseList != null && !dbResponseList.isEmpty()) {
			Object[] result = dbResponseList.get(0);
			resultDto.setNetVolume((BigDecimal) result[0]);
			resultDto.setExwUsdPerTon((BigDecimal) result[1]);
			resultDto.setExwAmountInMillion((BigDecimal) result[2]);
			resultDto.setContributionUsdPerTon((BigDecimal) result[3]);
			resultDto.setContributionAmountInMillion((BigDecimal) result[4]);
			resultDto.setVatAmountInMillion((BigDecimal) result[5]);
			resultDto.setGrossNetOfVat((BigDecimal) result[6]);
		}
		return resultDto;
	}

//	private String buildTopCustomersSelectQuery(String region, String fromDate, String toDate, String topBy, int count,
//			CCSortType ccSortType) {
//		StringBuilder query = new StringBuilder().append(
//				"SELECT bo.Customer_Name AS level1, bo.CountryofCust AS level2, bo.product AS level3, bo.sort AS level4, "
//						+ "SUM(NVL(NET_VOLUME, 0)) netVolume, "
//						+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END exwUsdPerTon, "
//						+ "SUM(NVL(SP_AMT, 0)) exwAmountInMillion, "
//						+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END contributionUsdPerTon, "
//						+ "SUM(NVL(CONTR_AMT, 0)) contributionAmountInMillion, SUM(NVL(VAT_USD, 0)) vatAmountInMillion, "
//						+ "SUM(NVL(GrossNetOfVat_USD, 0)) grossNetOfVat FROM tb_ocp_products_inv inv LEFT JOIN ")
//				.append(TableNames.TABLE_NAME_BILLING_F161B).append(" bo ON inv.name = bo.product WHERE (")
//				.append(region).append(" IS NULL OR bo.region = CAST(").append(region)
//				.append(" AS NVARCHAR2(50))) AND TO_DATE(bo.BILL_DATE, 'YYYYMMDD') BETWEEN TO_DATE('").append(fromDate)
//				.append("', 'DD/MM/YYYY') AND TO_DATE('").append(toDate).append("', 'DD/MM/YYYY')");
//		switch (ccSortType) {
//		case PRIME:
//			query.append(" AND UPPER(bo.sort) = 'PRIME'");
//			break;
//		case NON_PRIME:
//			query.append(" AND UPPER(bo.sort) = 'NON-PRIME'");
//			break;
//		default:
//			break;
//		}
//		query.append(" GROUP BY bo.Customer_Name, bo.CountryofCust, bo.product, bo.sort ORDER BY ").append(topBy)
//				.append(" DESC FETCH NEXT ").append(count).append(" ROWS ONLY");
//		return query.toString();
//	}
	
	private String buildTopCustomersSelectQuery(String region, String fromDate, String toDate, String topBy, int count,
			CCSortType ccSortType) {
		StringBuilder query = new StringBuilder().append("SELECT bo.Customer_Name AS level1, "
				+ "SUM(NVL(NET_VOLUME, 0)) netVolume, "
				+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END exwUsdPerTon, "
				+ "SUM(NVL(SP_AMT, 0)) exwAmountInMillion, "
				+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END contributionUsdPerTon, "
				+ "SUM(NVL(CONTR_AMT, 0)) contributionAmountInMillion, SUM(NVL(VAT_USD, 0)) vatAmountInMillion, "
				+ "SUM(NVL(GrossNetOfVat_USD, 0)) grossNetOfVat FROM  ").append(TableNames.TABLE_NAME_BILLING_F161B)
				.append(" bo  WHERE ");
		if (region != null) {
			query.append("bo.region = CAST('").append(region).append("' AS NVARCHAR2(50)) AND ");
		}
		query.append("TO_DATE(bo.BILL_DATE, 'YYYYMMDD') BETWEEN TO_DATE('").append(fromDate)
				.append("', 'DD/MM/YYYY') AND TO_DATE('").append(toDate).append("', 'DD/MM/YYYY')");
		switch (ccSortType) {
		case PRIME:
			query.append(" AND UPPER(bo.sort) = 'PRIME'");
			break;
		case NON_PRIME:
			query.append(" AND UPPER(bo.sort) = 'NON-PRIME'");
			break;
		default:
			break;
		}
		query.append(" GROUP BY bo.Customer_Name ORDER BY ").append(topBy)
				.append(" DESC FETCH NEXT ").append(count).append(" ROWS ONLY");
		return query.toString();
	}

	private String buildTotalTopCustomersSelectQuery(String region, String fromDate, String toDate, String topBy,
			int count, CCSortType ccSortType) {
		return new StringBuilder().append(
				"SELECT SUM(netVolume) netVolume, CASE WHEN SUM(netVolume) = 0 THEN 0 ELSE (SUM(exwAmountInMillion) / SUM(netVolume)) END exwUsdPerTon, "
						+ "SUM(exwAmountInMillion) exwAmountInMillion, CASE WHEN SUM(netVolume) = 0 THEN 0 ELSE (SUM(contributionAmountInMillion) / SUM(netVolume)) END contributionUsdPerTon, "
						+ "SUM(contributionAmountInMillion) contributionAmountInMillion, SUM(vatAmountInMillion) vatAmountInMillion, "
						+ "SUM(grossNetOfVat) grossNetOfVat FROM (")
				.append(buildTopCustomersSelectQuery(region, fromDate, toDate, topBy, count, ccSortType))
				.append(") data").toString();
	}

	

}
