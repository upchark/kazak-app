/**
 * 
 */
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

import com.otkaz.srv.api.service.ProfitabilityService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.CustomerDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.ProfitabilityDto;
import com.otkaz.srv.dto.ProfitabilityItemDto;
import com.otkaz.srv.dto.ProfitabilityPivotItemDto;
import com.otkaz.srv.dto.RegionDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.enums.CCSortType;
import com.otkaz.srv.enums.Periodicities;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.projection.CustomerView;
import com.otkaz.srv.projection.ProfitabilityItemView;
import com.otkaz.srv.projection.ProfitabilityPivotItemView;
import com.otkaz.srv.projection.RegionView;
import com.otkaz.srv.repository.OrderReportRepository;
import com.otkaz.srv.utils.QueryUtils;
import com.otkaz.srv.utils.Utils;
import com.otkaz.srv.utils.constants.TableNames;
import com.otkaz.srv.utils.levels.ProfitabilityCustomers;
import com.otkaz.srv.utils.levels.ProfitabilityProducts;
import com.otkaz.srv.utils.levels.ProfitabilityRegion;
import com.otkaz.srv.utils.levels.SalesCountries;

/**
 * @author sheen
 *
 */
@Service(value = "profitabilityService")
public class ProfitabilityServiceImpl implements ProfitabilityService {

	private static final int FIRST_LEVEL = 1;
	
	private static final int SECOND_LEVEL = 2;
	
	private static final int THIRD_LEVEL = 3;
	
	private static final int FOURTH_LEVEL = 4;
	
	private static final int FIFTH_LEVEL = 5;
	
	private static final String SELECT_FIELDS = "SUM(NVL(NET_VOLUME, 0)) netVolume, "
			+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END nrpUsdPerTon, "
			+ "SUM(NVL(SP_AMT, 0)) nrpAmountInMillion, "
			+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END contributionUsdPerTon, "
			+ "SUM(NVL(CONTR_AMT, 0)) contributionAmountInMillion, "
			+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(EBITDA_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END ebitdaUsdPerTon, "
			+ "SUM(NVL(EBITDA_AMT, 0)) ebitdaAmountInMillion";
	
	@Autowired
	private EntityManager entityManager;
	
	@Autowired
	private OrderReportRepository orderReportRepository;
	
	/**
	 * 
	 */
	public ProfitabilityServiceImpl() {
		// TODO Auto-generated constructor stub
	}

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
	public PaginationDto fetchProfitabilityByProductsPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		Page<ProfitabilityPivotItemView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.orderReportRepository.fetchProfitabilityProductsPivot(region, dateFilter[0], dateFilter[1], customer, pagingParams);
		} else {
			responseList = this.orderReportRepository.fetchProfitabilityProductsPivot(region, dateFilter[0], dateFilter[1],customer,  pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				ProfitabilityPivotItemDto profitabilityPivotItemDto = new ProfitabilityPivotItemDto(item);
				baseDto.add(profitabilityPivotItemDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}

	@Override
	public ProfitabilityDto fetchProfitabilityByProducts(String[] billToPay, Periodicities periodicity, Integer periodLevel,
			Integer level, Integer year, String region, String customer)
			throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		List<Object[]> dbResponseList = null;
		ProfitabilityDto profitabilityDto = new ProfitabilityDto();
		if (billToPay.length==0) {
			String query = buildAllLevelQuery(periodicity, periodLevel, year, level, ProfitabilityProducts.LEVEL_1, billToPay, region,customer, ProfitabilityProducts.class, 0);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList(); 
			profitabilityDto.setParent(null);
		}else {
			String query = buildDynamicProductQuery(periodicity, periodLevel, year, level, billToPay, region, customer, ProfitabilityProducts.class, 0);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			profitabilityDto.setParent(billToPay[billToPay.length-1]);
		}
		List<ProfitabilityItemDto> ls  = dbResponseList.stream().map((Object[] response) -> {
			return convertToProfitabilityItemDto(response, level, 2);
		}).collect(Collectors.toList());
		
		profitabilityDto.setCount(ls.size());
		profitabilityDto.setLevel(level);
		profitabilityDto.setData(ls);
		return profitabilityDto;
	}
	
	private ProfitabilityItemDto convertToProfitabilityItemDto(Object[] response, Integer level, Integer maxLevel) {
		ProfitabilityItemDto profitabilityItemDto = new ProfitabilityItemDto();
		profitabilityItemDto.setName((String) response[0]);
		profitabilityItemDto.setLevel(level);
		profitabilityItemDto.setNetVolume((BigDecimal) response[1]);
		profitabilityItemDto.setNrpUsdPerTon((BigDecimal) response[2]);
		profitabilityItemDto.setNrpAmountInMillion((BigDecimal) response[3]);
		profitabilityItemDto.setContributionUsdPerTon((BigDecimal) response[4]);
		profitabilityItemDto.setContributionAmountInMillion((BigDecimal) response[5]);
		profitabilityItemDto.setEbitdaUsdPerTon((BigDecimal) response[6]);
		profitabilityItemDto.setEbitdaAmountInMillion((BigDecimal) response[7]);
		profitabilityItemDto.setSubRow(level >= maxLevel ? false : true);
		return profitabilityItemDto;
	}

	@Override
	public ProfitabilityItemDto fetchProfitabilityByProductsTotal(Periodicities periodicity, Integer periodLevel,
			Integer year, String region, String customer) {
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		ProfitabilityItemView  profitabilityItemView = orderReportRepository.fetchTotalProfitabilityProducts(region, dateFilter[0], dateFilter[1], customer);
		ProfitabilityItemDto profitabilityItemDto = new ProfitabilityItemDto(profitabilityItemView);
		return profitabilityItemDto;
	}
	
	@Override
	public PaginationDto fetchProfitabilityByCountriesPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		Page<ProfitabilityPivotItemView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.orderReportRepository.fetchProfitabilityCountriesPivot(region, dateFilter[0], dateFilter[1], customer, pagingParams);
		} else {
			responseList = this.orderReportRepository.fetchProfitabilityCountriesPivot(region, dateFilter[0], dateFilter[1], customer, pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				ProfitabilityPivotItemDto profitabilityPivotItemDto = new ProfitabilityPivotItemDto(item);
				baseDto.add(profitabilityPivotItemDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}	
	
	@Override
	public ProfitabilityDto  fetchProfitabilityByCountries(String[] billToPay, Periodicities periodicity, Integer periodLevel, Integer level, Integer year, String region, String customer) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		List<Object[]> dbResponseList = null;
		ProfitabilityDto profitabilityDto = new ProfitabilityDto() ;
		if (billToPay.length==0) {
			String query = buildAllLevelQuery(periodicity, periodLevel, year, level, SalesCountries.LEVEL_1, billToPay, region,customer, SalesCountries.class, 0);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			profitabilityDto.setParent(null);
		}else {
			String query = buildDynamicProductQuery(periodicity, periodLevel, year, level, billToPay, region, customer, SalesCountries.class, 0);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			profitabilityDto.setParent(billToPay[billToPay.length-1]);
		}
		List<ProfitabilityItemDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToProfitabilityItemDto(response, level, 3);
		}).collect(Collectors.toList());
		profitabilityDto.setCount(ls.size());
		profitabilityDto.setLevel(level);
		profitabilityDto.setData(ls);
		return profitabilityDto;
	}
	
	@Override
	public ProfitabilityItemDto fetchProfitabilityByCountriesTotal(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer) {
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		ProfitabilityItemView profitabilityItemView = orderReportRepository.fetchTotalProfitabilityCountries(region, dateFilter[0], dateFilter[1],customer);
		ProfitabilityItemDto profitabilityItemDto = new ProfitabilityItemDto(profitabilityItemView);
		return profitabilityItemDto;
	}

	
	@Override
	public PaginationDto fetchProfitabilityByCustomersPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer, Integer filterNegativeEBITDA, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		Page<ProfitabilityPivotItemView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.orderReportRepository.fetchProfitabilityCustomersPivot(region, dateFilter[0], dateFilter[1], filterNegativeEBITDA,customer, pagingParams);
		} else {
			responseList = this.orderReportRepository.fetchProfitabilityCustomersPivot(region, dateFilter[0], dateFilter[1], filterNegativeEBITDA,customer, pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				ProfitabilityPivotItemDto profitabilityPivotItemDto = new ProfitabilityPivotItemDto(item);
				baseDto.add(profitabilityPivotItemDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}
	
	@Override
	public ProfitabilityDto fetchProfitabilityByCustomers(String[] billToPay, Periodicities periodicity, Integer periodLevel, Integer level,
			Integer year, String region, String customer, Integer filterNegativeEBITDA)
			throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		List<Object[]> dbResponseList = null;
		ProfitabilityDto profitabilityDto = new ProfitabilityDto() ;
		if (billToPay.length==0) {
			String query = buildAllLevelQuery(periodicity, periodLevel, year, level, ProfitabilityCustomers.LEVEL_1, billToPay, region, customer,ProfitabilityCustomers.class, filterNegativeEBITDA);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			profitabilityDto.setParent(null);
		}else {
			String query = buildDynamicProductQuery(periodicity, periodLevel, year, level, billToPay, region, customer, ProfitabilityCustomers.class, filterNegativeEBITDA);
			Query q = entityManager.createNativeQuery(query);
			
			dbResponseList = q.getResultList();
			profitabilityDto.setParent(billToPay[billToPay.length-1]);
		}
		List<ProfitabilityItemDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToProfitabilityItemDto(response, level, 4);
		}).collect(Collectors.toList());
		profitabilityDto.setCount(ls.size());
		profitabilityDto.setLevel(level);
		profitabilityDto.setData(ls);
		return profitabilityDto;
	}
	
	
	@Override
	public ProfitabilityItemDto fetchProfitabilityByCustomersTotal(Periodicities periodicity, Integer periodLevel, Integer year,
			String region, String customer, Integer filterNegativeEBITDA) {
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		ProfitabilityItemView profitabilityItemView = orderReportRepository.fetchTotalProfitabilityCustomers(region, dateFilter[0], dateFilter[1], filterNegativeEBITDA,customer);
		ProfitabilityItemDto profitabilityItemDto = new ProfitabilityItemDto(profitabilityItemView);
		return profitabilityItemDto;
	}
	
	

	@Override
	public PaginationDto fetchProfitabilityByRegionPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		Page<ProfitabilityPivotItemView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.orderReportRepository.fetchProfitabilityRegionPivot(region, dateFilter[0], dateFilter[1], customer, pagingParams);
		} else {
			responseList = this.orderReportRepository.fetchProfitabilityRegionPivot(region, dateFilter[0], dateFilter[1], customer, pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				ProfitabilityPivotItemDto profitabilityPivotItemDto = new ProfitabilityPivotItemDto(item);
				baseDto.add(profitabilityPivotItemDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}
	
	@Override
	public ProfitabilityDto fetchProfitabilityByRegion(String[] billToPay, Periodicities periodicity, Integer periodLevel, Integer level,
			Integer year, String region, String customer)
			throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		List<Object[]> dbResponseList = null;
		ProfitabilityDto profitabilityDto = new ProfitabilityDto() ;
		if (billToPay.length==0) {
			String query = buildAllLevelQuery(periodicity, periodLevel, year, level, ProfitabilityRegion.LEVEL_1, billToPay, region,customer, ProfitabilityRegion.class, 0);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			profitabilityDto.setParent(null);
		}else {
			String query = buildDynamicProductQuery(periodicity, periodLevel, year, level, billToPay, region, customer,ProfitabilityRegion.class, 0);
			Query q = entityManager.createNativeQuery(query);
			dbResponseList = q.getResultList();
			profitabilityDto.setParent(billToPay[billToPay.length-1]);
		}
		List<ProfitabilityItemDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToProfitabilityItemDto(response, level, 3);
		}).collect(Collectors.toList());
		profitabilityDto.setCount(ls.size());
		profitabilityDto.setLevel(level);
		profitabilityDto.setData(ls);
		return profitabilityDto;
	}
	
	
	@Override
	public ProfitabilityItemDto fetchProfitabilityByRegionTotal(Periodicities periodicity, Integer periodLevel, Integer year,
			String region, String customer) {
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		ProfitabilityItemView profitabilityItemView = orderReportRepository.fetchTotalProfitabilityRegion(region, dateFilter[0], dateFilter[1],customer);
		ProfitabilityItemDto profitabilityItemDto = new ProfitabilityItemDto(profitabilityItemView);
		return profitabilityItemDto;
	}
	
	private String buildAllLevelQuery(Periodicities periodicity, Integer periodLevel, Integer year, 
			Integer level, String levelName, String[] billToPay, String region, String customer, Class<?> clazz, Integer filterNegativeEBITDA) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		String query = new String();
		final String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		String whereCondition = buildWhereCondition(dateFilter[0], dateFilter[1], level, billToPay, region, customer, clazz);
		query = getProductQuery(level, levelName, whereCondition, filterNegativeEBITDA);
		return query;
	}

	private String getProductQuery(Integer level, String levelName, String whereCondition, Integer filterNegativeEBITDA) {
		String query = "select LTRIM(RTRIM(tb." + levelName + ")) as billToName, "
				+ SELECT_FIELDS + "	FROM " + TableNames.TABLE_NAME_BILLING_F161B + " tb"
//				+ SELECT_FIELDS + "	FROM tb_ocp_products inv left join " + TableNames.TABLE_NAME_BILLING_F161B + " tb on inv.name = tb.product "
				+ whereCondition
				+ " GROUP by tb." + levelName;
		if(filterNegativeEBITDA == 1) query += " HAVING SUM(NVL(EBITDA_AMT,0)) < 0";
		return query;
	}

	private String buildDynamicProductQuery(Periodicities periodicity, Integer periodLevel, Integer year, 
			Integer level, String[] billToPay, String region,String customer, Class<?> clazz, Integer filterNegativeEBITDA) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		String query = new String();
		switch (level) {
			case (SECOND_LEVEL):
				query = buildAllLevelQuery(periodicity, periodLevel, year, level, clazz.getField("LEVEL_2").get(clazz).toString(), billToPay, region, customer,clazz, filterNegativeEBITDA);
			break;
			case (THIRD_LEVEL):
				query = buildAllLevelQuery(periodicity, periodLevel, year, level, clazz.getField("LEVEL_3").get(clazz).toString(), billToPay, region,customer, clazz, filterNegativeEBITDA);
			break;
			case (FOURTH_LEVEL):
				query = buildAllLevelQuery(periodicity, periodLevel, year, level, clazz.getField("LEVEL_4").get(clazz).toString(), billToPay, region, customer,clazz, filterNegativeEBITDA);
			break;
			case (FIFTH_LEVEL):
				query = buildAllLevelQuery(periodicity, periodLevel, year, level, clazz.getField("LEVEL_5").get(clazz).toString(), billToPay, region,customer, clazz, filterNegativeEBITDA);
			break;
		}
		return query;
	}

	private String buildWhereCondition(String fromDate, String toDate, Integer level, String[] billToPay, String region, String customer, Class<?> clazz) 
			throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException {
		String where = " WHERE TO_DATE(tb.BILL_DATE, 'YYYYMMDD') BETWEEN TO_DATE('" + fromDate + "', 'DD/MM/YYYY') "
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

	//////////////TOP 10 CUSTOMERS //////////////////
	
	private final List<String> apiFields = Arrays
			.asList(new String[] { "net_volume", "nrp_usd_per_ton", "nrp_amount_in_million", "contribution_usd_per_ton",
					"contribution_amount_in_million", "ebitda_usd_per_ton", "ebitda_amount_in_million" });
	private final List<String> queryFields = Arrays
			.asList(new String[] { "netVolume", "nrpUsdPerTon", "nrpAmountInMillion", "contributionUsdPerTon",
					"contributionAmountInMillion", "ebitdaUsdPerTon", "ebitdaAmountInMillion" });
	
	@Override
	public List<BaseDto> fetchProfitabilityByTopCustomers(Periodicities periodicity, Integer periodLevel, Integer year,
			String region, String topBy, CCSortType ccSortType) {
		String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		String query = buildTopCustomersSelectQuery(region, dateFilter[0], dateFilter[1], convertToQueryField(topBy.trim(), apiFields, queryFields), TOP_CUSTOMER_LIMIT, ccSortType);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		return dbResponseList.stream().map(ProfitabilityPivotItemDto::new).collect(Collectors.toList());
	}
	
	@Override
	public BaseDto fetchTotalProfitabilityByTopCustomers(Periodicities periodicity, Integer periodLevel, Integer year,
			String region, String topBy, CCSortType ccSortType) {
		String[] dateFilter = getFilterDatePeriods(periodicity, periodLevel, year);
		String query = buildTotalTopCustomersSelectQuery(region, dateFilter[0], dateFilter[1],
				convertToQueryField(topBy.trim(), apiFields, queryFields), TOP_CUSTOMER_LIMIT, ccSortType);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		ProfitabilityPivotItemDto resultDto = new ProfitabilityPivotItemDto();
		resultDto.setLevel1("TOTAL");
		if (dbResponseList != null && !dbResponseList.isEmpty()) {
			Object[] result = dbResponseList.get(0);
			resultDto.setNetVolume((BigDecimal) result[0]);
			resultDto.setNrpUsdPerTon((BigDecimal) result[1]);
			resultDto.setNrpAmountInMillion((BigDecimal) result[2]);
			resultDto.setContributionUsdPerTon((BigDecimal) result[3]);
			resultDto.setContributionAmountInMillion((BigDecimal) result[4]);
			resultDto.setEbitdaUsdPerTon((BigDecimal) result[5]);
			resultDto.setEbitdaAmountInMillion((BigDecimal) result[6]);
		}
		return resultDto;
	}
	
	private String buildTopCustomersSelectQuery(String region, String fromDate, String toDate, String topBy, int count,
			CCSortType ccSortType) {
		StringBuilder query = new StringBuilder().append(
				"SELECT bo.Customer_Name AS level1, bo.CountryofCust AS level2, bo.product AS level3, bo.sort AS level4, "
						+ "SUM(NVL(NET_VOLUME, 0)) netVolume, CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END nrpUsdPerTon, "
						+ "SUM(NVL(SP_AMT, 0)) nrpAmountInMillion, CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END contributionUsdPerTon, "
						+ "SUM(NVL(CONTR_AMT, 0)) contributionAmountInMillion, CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(EBITDA_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END ebitdaUsdPerTon, "
						+ "SUM(NVL(EBITDA_AMT, 0)) ebitdaAmountInMillion FROM tb_ocp_products_inv inv LEFT JOIN ")
				.append(TableNames.TABLE_NAME_BILLING_F161B).append(" bo ON inv.name = bo.product WHERE ");
				if(region != null) {
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
		query.append(" GROUP BY bo.Customer_Name, bo.CountryofCust, bo.product, bo.sort ORDER BY ").append(topBy)
				.append(" DESC FETCH NEXT ").append(count).append(" ROWS ONLY");
		return query.toString();
	}

	private String buildTotalTopCustomersSelectQuery(String region, String fromDate, String toDate, String topBy,
			int count, CCSortType ccSortType) {
		return new StringBuilder().append(
				"SELECT SUM(netVolume) netVolume, CASE WHEN SUM(netVolume) = 0 THEN 0 ELSE (SUM(nrpAmountInMillion) / SUM(netVolume)) END nrpUsdPerTon, "
						+ "SUM(nrpAmountInMillion) nrpAmountInMillion, CASE WHEN SUM(netVolume) = 0 THEN 0 ELSE (SUM(contributionAmountInMillion) / SUM(netVolume)) END contributionUsdPerTon, "
						+ "SUM(contributionAmountInMillion) contributionAmountInMillion, CASE WHEN SUM(netVolume) = 0 THEN 0 ELSE (SUM(ebitdaAmountInMillion) / SUM(netVolume)) END ebitdaUsdPerTon, "
						+ "SUM(ebitdaAmountInMillion) ebitdaAmountInMillion FROM (")
				.append(buildTopCustomersSelectQuery(region, fromDate, toDate, topBy, count, ccSortType)).append(") data")
				.toString();
	}

}
