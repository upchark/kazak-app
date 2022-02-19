package com.otkaz.srv.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.otkaz.srv.entity.OrderReport;
import com.otkaz.srv.projection.CustomerView;
import com.otkaz.srv.projection.OrderPlantView;
import com.otkaz.srv.projection.ProfitabilityItemView;
import com.otkaz.srv.projection.ProfitabilityPivotItemView;
import com.otkaz.srv.projection.RegionView;
import com.otkaz.srv.projection.SalesItemView;
import com.otkaz.srv.projection.SalesPivotItemView;
import com.otkaz.srv.projection.UserStatusView;
import com.otkaz.srv.projection.excel.SalesByProductExcelView;
import com.otkaz.srv.utils.constants.TableNames;


@Repository
public interface OrderReportRepository extends PagingAndSortingRepository<OrderReport, Long>, JpaRepository<OrderReport, Long> {

	@Query(value = "select name, name as code "
			+ "	from TB_OCP_REGIONS_MASTER order by rank asc ", nativeQuery = true)
	public List<RegionView> fetchRegions(); 
	

	@Query(value = "SELECT \"PLANT\" as name, \"PLANT\" as code FROM TB_ORDER_F176_REPORT group by PLANT order by PLANT asc", nativeQuery = true)
	public List<OrderPlantView> fetchOrderPlant(); 
	
	@Query(value = "SELECT \"PLANT\" as name, \"PLANT\" as code FROM \"TB_ORDER_F079_REPORT\" group by PLANT order by PLANT asc", nativeQuery = true)
	public List<OrderPlantView> fetchZayvkasPlants(); 
	
	@Query(value = "SELECT USER_STATUS as name, USER_STATUS as code FROM \"TB_ORDER_F079_REPORT\" group by USER_STATUS order by USER_STATUS", nativeQuery = true)
	public List<UserStatusView> fetchUserStatus(); 

	@Query(value = "select region as name, region as code "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " group by region order by region asc ", nativeQuery = true)
	public List<RegionView> fetchSalesRegions();  
	
	@Query(value = "select customer_name as name, customer_name as code "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " group by customer_name order by customer_name asc ", nativeQuery = true)
	public List<CustomerView> fetchSalesCustomers();  
	
	@Query(value = "select bo.product as level1, bo.sort as level2, "
			+ " SUM(NET_VOLUME) as netVolume, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(SP_AMT) / SUM(NET_VOLUME)) END as exwUsdPerTon, "
			+ "	SUM(SP_AMT) as exwAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(CONTR_AMT) / SUM(NET_VOLUME)) END as contributionUsdPerTon, "
			+ " SUM(CONTR_AMT) as contributionAmountInMillion, "
			+ "	SUM(VAT_USD) as vatAmountInMillion, "
			+ "	SUM(GrossNetOfVat_USD) as grossNetOfVat "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
//			+ "	from tb_ocp_products  inv left join " + TableNames.TABLE_NAME_BILLING_F161B + " bo on inv.name = bo.product"
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY') ) and(?4 is null or bo.customer_name = cast(?4 as nvarchar2(50)))"
			+ "	group by bo.product, bo.sort ", 
			countQuery = "select COUNT(*) "
					+ "	from  " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
//					+ "	from tb_ocp_products  inv left join " + TableNames.TABLE_NAME_BILLING_F161B + " bo on inv.name = bo.product"
					+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
					+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and(?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
					+ "	group by bo.product, bo.sort ", nativeQuery = true)
	Page<SalesPivotItemView> fetchSalesProductsPivot(String region, String fromDate, String toDate,String customer, Pageable pagingParams);
	
	@Query(value = "select 'TOTAL'  as name, "
			+ "	SUM(NVL(pp.netVolume, 0)) as netVolume, "
			+ "	SUM(NVL(pp.exwAmountInMillion, 0))/SUM(NVL(pp.netVolume, 0)) as exwUsdPerTon, SUM(NVL(pp.exwAmountInMillion, 0)) as exwAmountInMillion, "
			+ "	SUM(NVL(pp.contributionAmountInMillion, 0))/SUM(NVL(pp.netVolume, 0)) as contributionUsdPerTon, SUM(NVL(pp.contributionAmountInMillion, 0)) as contributionAmountInMillion, "
			+ "	SUM(NVL(pp.vatAmountInMillion, 0)) as vatAmountInMillion, SUM(NVL(pp.grossNetOfVat, 0)) as grossNetOfVat "
			+ "	from (select bo.product name, "
			+ " SUM(NVL(NET_VOLUME, 0)) as netVolume, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as exwUsdPerTon, "
			+ "	SUM(NVL(SP_AMT, 0)) as exwAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as contributionUsdPerTon, "
			+ " SUM(NVL(CONTR_AMT, 0)) as contributionAmountInMillion, "
			+ "	SUM(NVL(VAT_USD, 0)) as vatAmountInMillion, "
			+ "	SUM(NVL(GrossNetOfVat_USD, 0)) as grossNetOfVat "
			+ "	from  " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
//			+ "	from tb_ocp_products  inv left join " + TableNames.TABLE_NAME_BILLING_F161B + " bo on inv.name = bo.product"
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
			+ "	group by bo.product) pp ", nativeQuery = true)
	SalesItemView fetchTotalSalesProducts(String region, String fromDate, String toDate, String customer);
	
	@Query(value = "select bo.CountryofCust as level1, bo.product as level2, bo.sort as level3, "
			+ " SUM(NET_VOLUME) as netVolume, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(SP_AMT) / SUM(NET_VOLUME)) END as exwUsdPerTon, "
			+ "	SUM(SP_AMT) as exwAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(CONTR_AMT) / SUM(NET_VOLUME)) END as contributionUsdPerTon, "
			+ " SUM(CONTR_AMT) as contributionAmountInMillion, "
			+ "	SUM(VAT_USD) as vatAmountInMillion, "
			+ "	SUM(GrossNetOfVat_USD) as grossNetOfVat "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
			+ "	group by bo.CountryofCust, bo.product, bo.sort ",
			countQuery = "select COUNT(*) "
					+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
					+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
					+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
					+ "	group by bo.CountryofCust, bo.product, bo.sort ", nativeQuery = true)
	Page<SalesPivotItemView> fetchSalesCountriesPivot(String region, String fromDate, String toDate, String customer, Pageable pagingParams);
	
	
	@Query(value = "select bo.region level1, bo.product as level2, bo.sort as level3, "
			+ " SUM(NET_VOLUME) netVolume, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(SP_AMT) / SUM(NET_VOLUME)) END exwUsdPerTon, "
			+ "	SUM(SP_AMT) exwAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(CONTR_AMT) / SUM(NET_VOLUME)) END contributionUsdPerTon, "
			+ " SUM(CONTR_AMT) contributionAmountInMillion, "
			+ "	SUM(VAT_USD) vatAmountInMillion, "
			+ "	SUM(GrossNetOfVat_USD) grossNetOfVat " 
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
			+ "	group by bo.region, bo.product, bo.sort ",
			countQuery = "select COUNT(*) "
					+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
					+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
					+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
					+ "	group by bo.region, bo.product, bo.sort ", nativeQuery = true)
	Page<SalesPivotItemView> fetchSalesRegionPivot(String region, String fromDate, String toDate, String customer, Pageable pagingParams);

	@Query(value = "SELECT 'TOTAL' AS name, "
			+ " SUM(NVL(NET_VOLUME, 0)) AS netVolume, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END AS exwUsdPerTon, "
			+ "	SUM(NVL(SP_AMT, 0)) AS exwAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END AS contributionUsdPerTon, "
			+ " SUM(NVL(CONTR_AMT, 0)) AS contributionAmountInMillion, "
			+ "	SUM(NVL(VAT_USD, 0)) AS vatAmountInMillion, "
			+ "	SUM(NVL(GrossNetOfVat_USD, 0)) AS grossNetOfVat "
			+ "	FROM " + TableNames.TABLE_NAME_BILLING_F161B
			+ "	WHERE (?1 IS NULL OR LOWER(REGION) = cast(?1 as nvarchar2(50))) "
			+ "	AND TO_DATE(BILL_DATE, 'YYYYMMDD') BETWEEN TO_DATE(?2, 'DD/MM/YYYY') AND TO_DATE(?3, 'DD/MM/YYYY') "
			+ " AND (?4 is null or customer_name = cast(?4 as nvarchar2(100)))", nativeQuery = true)
	SalesItemView fetchTotalForSales(String region, String fromDate, String toDate, String customer);
	
	
	@Query(value = "select 'TOTAL' as name, "
			+ "	SUM(pp.netVolume) as netVolume, "
			+ "	SUM(pp.exwAmountInMillion)/SUM(pp.netVolume) exwUsdPerTon, SUM(pp.exwAmountInMillion) as exwAmountInMillion, "
			+ "	SUM(pp.contributionAmountInMillion)/SUM(pp.netVolume) contributionUsdPerTon, SUM(pp.contributionAmountInMillion) as contributionAmountInMillion, "
			+ "	SUM(pp.vatAmountInMillion) vatAmountInMillion, SUM(pp.grossNetOfVat) as grossNetOfVat "
			+ "	from (select bo.CountryofCust as name, "
			+ " SUM(NVL(NET_VOLUME, 0)) as netVolume, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as exwUsdPerTon, "
			+ "	SUM(NVL(SP_AMT, 0)) as exwAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as contributionUsdPerTon, "
			+ " SUM(NVL(CONTR_AMT, 0)) as contributionAmountInMillion, "
			+ "	SUM(NVL(VAT_USD, 0)) as vatAmountInMillion, "
			+ "	SUM(NVL(GrossNetOfVat_USD, 0)) as grossNetOfVat "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50)))  "
			+ "	group by bo.CountryofCust) pp ", nativeQuery = true)
	SalesItemView fetchTotalSalesCountries(String region, String fromDate, String toDate, String customer);
	
	/**
	 * 
	 * @param region
	 * @param fromDate
	 * @param toDate
	 * @return
	 */
	@Query(value = "select bo.Customer_Name level1, bo.CountryofCust level2, bo.product as level3, bo.sort as level4, "
			+ " SUM(NET_VOLUME) netVolume, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(SP_AMT) / SUM(NET_VOLUME)) END exwUsdPerTon, "
			+ "	SUM(SP_AMT) exwAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(CONTR_AMT) / SUM(NET_VOLUME)) END contributionUsdPerTon, "
			+ " SUM(CONTR_AMT) contributionAmountInMillion, "
			+ "	SUM(VAT_USD) vatAmountInMillion, "
			+ "	SUM(GrossNetOfVat_USD) grossNetOfVat "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
			+ "	group by bo.Customer_Name, bo.CountryofCust, bo.product, bo.sort ",
			countQuery = "select COUNT(*) "
					+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
					+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
					+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
					+ "	group by bo.Customer_Name, bo.CountryofCust, bo.product, bo.sort ", nativeQuery = true)
	Page<SalesPivotItemView> fetchSalesCustomersPivot(String region, String fromDate, String toDate, String customer, Pageable pagingParams);
	
	/**
	 * 
	 * @param region
	 * @param fromDate
	 * @param toDate
	 * @return
	 */
	@Query(value = "select 'TOTAL' name, "
			+ "	SUM(pp.netVolume) netVolume, "
			+ "	SUM(pp.exwAmountInMillion)/SUM(pp.netVolume) exwUsdPerTon, SUM(pp.exwAmountInMillion) exwAmountInMillion, "
			+ "	SUM(pp.contributionAmountInMillion)/SUM(pp.netVolume) contributionUsdPerTon, SUM(pp.contributionAmountInMillion) contributionAmountInMillion, "
			+ "	SUM(pp.vatAmountInMillion) vatAmountInMillion, SUM(pp.grossNetOfVat) grossNetOfVat "
			+ "	from (select bo.Customer_Name name, "
			+ " SUM(NVL(NET_VOLUME, 0)) netVolume, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END exwUsdPerTon, "
			+ "	SUM(NVL(SP_AMT, 0)) exwAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END contributionUsdPerTon, "
			+ " SUM(NVL(CONTR_AMT, 0)) contributionAmountInMillion, "
			+ "	SUM(NVL(VAT_USD, 0)) vatAmountInMillion, "
			+ "	SUM(NVL(GrossNetOfVat_USD, 0)) grossNetOfVat "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY'))  and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50)))"
			+ "	group by bo.Customer_Name) pp ", nativeQuery = true)
	SalesItemView fetchTotalSalesCustomers(String region, String fromDate, String toDate, String customer);
	
	/**
	 * 
	 * @param region
	 * @param fromDate
	 * @param toDate
	 * @return
	 */
	@Query(value = "select 'TOTAL' as name, "
			+ "	SUM(pp.netVolume) as netVolume, "
			+ "	SUM(pp.exwAmountInMillion)/SUM(pp.netVolume) exwUsdPerTon, SUM(pp.exwAmountInMillion) as exwAmountInMillion, "
			+ "	SUM(pp.contributionAmountInMillion)/SUM(pp.netVolume) contributionUsdPerTon, SUM(pp.contributionAmountInMillion) as contributionAmountInMillion, "
			+ "	SUM(pp.vatAmountInMillion) vatAmountInMillion, SUM(pp.grossNetOfVat) as grossNetOfVat "
			+ "	from (select bo.region as name, "
			+ " SUM(NVL(NET_VOLUME, 0)) as netVolume, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as exwUsdPerTon, "
			+ "	SUM(NVL(SP_AMT, 0)) as exwAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as contributionUsdPerTon, "
			+ " SUM(NVL(CONTR_AMT, 0)) as contributionAmountInMillion, "
			+ "	SUM(NVL(VAT_USD, 0)) as vatAmountInMillion, "
			+ "	SUM(NVL(GrossNetOfVat_USD, 0)) as grossNetOfVat "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY'))  and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
			+ "	group by bo.region) pp ", nativeQuery = true)
	SalesItemView fetchTotalSalesRegion(String region, String fromDate, String toDate , String customer);

	
	@Query(value = "select bo.product product, "
			+ " bo.prime_non_prime prime, "
			+ "	SUM(\"Volume,net\") netVolume, "
			+ "	SUM(ValuePriceEXW) exwUsdPerTon, "
			+ "	SUM((ValuePriceEXW * \"Volume,net\")/1000000) exwAmountInMillion, "
			+ "	SUM(ValueOnContrPrice) contributionUsdPerTon, "
			+ "	SUM((ValueOnContrPrice * \"Volume,net\")/1000000) contributionAmountInMillion, "
			+ "	SUM(VAT) vatAmountInMillion, "
			+ "	SUM(GrossNetOfVat) grossNetOfVat"
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
//			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
//			+ "	and TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY') "
			+ "	group by bo.product "
			+ "	order by bo.product asc ", nativeQuery = true)
	List<SalesByProductExcelView> fetchSalesProductsForExcel(String region, String fromDate, String toDate);
	
	@Query(value = "select bo.product as level1, bo.sort as level2, "
			+ " SUM(NET_VOLUME) netVolume, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(SP_AMT) / SUM(NET_VOLUME)) END nrpUsdPerTon, "
			+ "	SUM(SP_AMT) nrpAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(CONTR_AMT) / SUM(NET_VOLUME)) END contributionUsdPerTon, "
			+ " SUM(CONTR_AMT) contributionAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(EBITDA_AMT) / SUM(NET_VOLUME)) END ebitdaUsdPerTon, "
			+ " SUM(EBITDA_AMT) ebitdaAmountInMillion "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY') ) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
			+ "	group by bo.product, bo.sort ",
			countQuery = "select COUNT(*) "
					+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
					+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
					+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
					+ "	group by bo.product, bo.sort ", nativeQuery = true)
	Page<ProfitabilityPivotItemView> fetchProfitabilityProductsPivot(String region, String fromDate, String toDate, String customer, Pageable pagingParams);
	
	@Query(value = "select 'TOTAL' as name, "
			+ "	SUM(pp.netVolume) as netVolume, "
			+ "	SUM(pp.nrpAmountInMillion)/SUM(pp.netVolume) nrpUsdPerTon, SUM(pp.nrpAmountInMillion) as nrpAmountInMillion, "
			+ "	SUM(pp.contributionAmountInMillion)/SUM(pp.netVolume) contributionUsdPerTon, SUM(pp.contributionAmountInMillion) as contributionAmountInMillion, "
			+ "	SUM(pp.ebitdaAmountInMillion)/SUM(pp.netVolume) ebitdaUsdPerTon, SUM(pp.ebitdaAmountInMillion) as ebitdaAmountInMillion "
			+ "	from (select bo.product as name, "
			+ " SUM(NVL(NET_VOLUME, 0)) as netVolume, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as nrpUsdPerTon, "
			+ "	SUM(NVL(SP_AMT, 0)) as nrpAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as contributionUsdPerTon, "
			+ " SUM(NVL(CONTR_AMT, 0)) as contributionAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(EBITDA_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as ebitdaUsdPerTon, "
			+ " SUM(NVL(EBITDA_AMT, 0)) as ebitdaAmountInMillion "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "

			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) "
			+ "and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
			+ "	group by bo.product) pp ", nativeQuery = true)
	ProfitabilityItemView fetchTotalProfitabilityProducts(String region, String fromDate, String toDate, String customer);
	
	
	@Query(value = "select bo.CountryofCust level1, bo.product as level2, bo.sort as level3, "
			+ " SUM(NET_VOLUME) netVolume, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(SP_AMT) / SUM(NET_VOLUME)) END nrpUsdPerTon, "
			+ "	SUM(SP_AMT) nrpAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(CONTR_AMT) / SUM(NET_VOLUME)) END contributionUsdPerTon, "
			+ " SUM(CONTR_AMT) contributionAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(EBITDA_AMT) / SUM(NET_VOLUME)) END ebitdaUsdPerTon, "
			+ " SUM(EBITDA_AMT) ebitdaAmountInMillion "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50)))"
			+ "	group by bo.CountryofCust, bo.product, bo.sort ",
			countQuery = "select COUNT(*) "
					+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
					+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
					+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
					+ "	group by bo.CountryofCust, bo.product, bo.sort ", nativeQuery = true)
	Page<ProfitabilityPivotItemView> fetchProfitabilityCountriesPivot(String region, String fromDate, String toDate, String customer,Pageable pagingParams);
	
	@Query(value = "select bo.region level1, bo.product as level2, bo.sort as level3, "
			+ " SUM(NET_VOLUME) netVolume, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(SP_AMT) / SUM(NET_VOLUME)) END nrpUsdPerTon, "
			+ "	SUM(SP_AMT) nrpAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(CONTR_AMT) / SUM(NET_VOLUME)) END contributionUsdPerTon, "
			+ " SUM(CONTR_AMT) contributionAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(EBITDA_AMT) / SUM(NET_VOLUME)) END ebitdaUsdPerTon, "
			+ " SUM(EBITDA_AMT) ebitdaAmountInMillion "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
			+ "	group by bo.region, bo.product, bo.sort ",
			countQuery = "select COUNT(*) "
					+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " "
					+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
					+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50)) "
					+ "	group by bo.region, bo.product, bo.sort ", nativeQuery = true)
	Page<ProfitabilityPivotItemView> fetchProfitabilityRegionPivot(String region, String fromDate, String toDate, String customer, Pageable pagingParams);


//	@Query(value = "select 'TOTAL' as name, "
//			+ "SUM(NVL(NET_VOLUME, 0)) AS netVolume, "
//			+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END AS nrpUsdPerTon, "
//			+ "SUM(NVL(SP_AMT, 0)) AS nrpAmountInMillion, "
//			+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END AS contributionUsdPerTon, "
//			+ "SUM(NVL(CONTR_AMT, 0)) AS contributionAmountInMillion, "
//			+ "CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(EBITDA_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END AS ebitdaUsdPerTon, "
//			+ "SUM(NVL(EBITDA_AMT, 0)) AS ebitdaAmountInMillion FROM " + TableNames.TABLE_NAME_BILLING_F161B 
//			+ "	WHERE (?1 IS NULL OR LOWER(REGION) = cast(?1 AS nvarchar2(50))) "
//			+ "	AND (TO_DATE(BILL_DATE, 'YYYYMMDD') BETWEEN TO_DATE(?2, 'DD/MM/YYYY') AND TO_DATE(?3, 'DD/MM/YYYY')) "
//			+ " AND (?5 is null or customer_name = cast(?5 as nvarchar2(50))) "
//			+ " HAVING (?4 is null OR (CAST(?4 AS NUMBER) = 1 AND SUM(NVL(EBITDA_AMT, 0)) < 0) OR (CAST(?4 AS NUMBER) = 0))"
//			, nativeQuery = true)
//	ProfitabilityItemView fetchTotalForProfitability(String region, String fromDate, String toDate, Integer filterNegativeEBITDA, String customer);
	
	@Query(value = "select 'TOTAL' as name, "
			+ "	SUM(pp.netVolume) as netVolume, "
			+ "	SUM(pp.nrpAmountInMillion)/SUM(pp.netVolume) nrpUsdPerTon, "
			+ "SUM(pp.nrpAmountInMillion) as nrpAmountInMillion, "
			+ "	SUM(pp.contributionAmountInMillion)/SUM(pp.netVolume) contributionUsdPerTon, "
			+ "SUM(pp.contributionAmountInMillion) as contributionAmountInMillion, "
			+ "	SUM(pp.ebitdaAmountInMillion)/SUM(pp.netVolume) ebitdaUsdPerTon, "
			+ "SUM(pp.ebitdaAmountInMillion) as ebitdaAmountInMillion "
			+ "	from (select bo.Customer_Name as name, "
			+ " SUM(NVL(NET_VOLUME, 0)) as netVolume, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as nrpUsdPerTon, "
			+ "	SUM(NVL(SP_AMT, 0)) as nrpAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as contributionUsdPerTon, "
			+ " SUM(NVL(CONTR_AMT, 0)) as contributionAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(EBITDA_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as ebitdaUsdPerTon, "
			+ " SUM(NVL(EBITDA_AMT, 0)) as ebitdaAmountInMillion "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo"
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY') "
			+ " AND (?5 is null or bo.customer_name = cast(?5 as nvarchar2(100))) "
			+ "	group by bo.customer_name "
			+ " HAVING (?4 is null or (CAST(?4 AS NUMBER) = 1 AND SUM(NVL(EBITDA_AMT, 0)) < 0) OR (CAST(?4 AS NUMBER) = 0))"
			+ " ) pp ", nativeQuery = true)
	ProfitabilityItemView fetchTotalForProfitabilityExport(String region, String fromDate, String toDate, Integer filterNegativeEBITDA, String customer);
	
	@Query(value = "select 'TOTAL' as name, "
			+ "	SUM(pp.netVolume) as netVolume, "
			+ "	SUM(pp.nrpAmountInMillion)/SUM(pp.netVolume) nrpUsdPerTon, SUM(pp.nrpAmountInMillion) as nrpAmountInMillion, "
			+ "	SUM(pp.contributionAmountInMillion)/SUM(pp.netVolume) contributionUsdPerTon, SUM(pp.contributionAmountInMillion) as contributionAmountInMillion, "
			+ "	SUM(pp.ebitdaAmountInMillion)/SUM(pp.netVolume) ebitdaUsdPerTon, SUM(pp.ebitdaAmountInMillion) as ebitdaAmountInMillion "
			+ "	from (select bo.CountryofCust as name, "
			+ " SUM(NVL(NET_VOLUME, 0)) as netVolume, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as nrpUsdPerTon, "
			+ "	SUM(NVL(SP_AMT, 0)) as nrpAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as contributionUsdPerTon, "
			+ " SUM(NVL(CONTR_AMT, 0)) as contributionAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(EBITDA_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as ebitdaUsdPerTon, "
			+ " SUM(NVL(EBITDA_AMT, 0)) as ebitdaAmountInMillion "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY'))  and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50)))  "
			+ "	group by bo.CountryofCust) pp ", nativeQuery = true)
	ProfitabilityItemView fetchTotalProfitabilityCountries(String region, String fromDate, String toDate, String customer);
	
	@Query(value = "select bo.Customer_Name level1, bo.CountryofCust level2, bo.product as level3, bo.sort as level4, "
			+ " SUM(NET_VOLUME) netVolume, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(SP_AMT) / SUM(NET_VOLUME)) END nrpUsdPerTon, "
			+ "	SUM(SP_AMT) nrpAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(CONTR_AMT) / SUM(NET_VOLUME)) END contributionUsdPerTon, "
			+ " SUM(CONTR_AMT) contributionAmountInMillion, "
			+ " CASE WHEN SUM(NET_VOLUME) = 0 THEN 0 ELSE (SUM(EBITDA_AMT) / SUM(NET_VOLUME)) END ebitdaUsdPerTon, "
			+ " SUM(EBITDA_AMT) ebitdaAmountInMillion "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?5 is null or bo.customer_name = cast(?5 as nvarchar2(50)))  "
			+ "	group by bo.Customer_Name, bo.CountryofCust, bo.product, bo.sort "
			+ " HAVING (?4 is null or (CAST(?4 AS NUMBER) = 1 AND SUM(NVL(EBITDA_AMT, 0)) < 0) OR (CAST(?4 AS NUMBER) = 0))",
			countQuery = "select COUNT(*) "
					+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo "
					+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
					+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?5 is null or bo.customer_name = cast(?5 as nvarchar2(50)))  "
					+ "	group by bo.Customer_Name, bo.CountryofCust, bo.product, bo.sort "
					+ " HAVING (?4 is null or (CAST(?4 AS NUMBER) = 1 AND SUM(NVL(EBITDA_AMT, 0)) < 0) OR (CAST(?4 AS NUMBER) = 0))", nativeQuery = true)
	Page<ProfitabilityPivotItemView> fetchProfitabilityCustomersPivot(String region, String fromDate, String toDate, Integer filterNegativeEBITDA, String customer, Pageable pagingParams );
	
	@Query(value = "select 'TOTAL' as name, "
			+ "	SUM(pp.netVolume) as netVolume, "
			+ "	SUM(pp.nrpAmountInMillion)/SUM(pp.netVolume) nrpUsdPerTon, SUM(pp.nrpAmountInMillion) as nrpAmountInMillion, "
			+ "	SUM(pp.contributionAmountInMillion)/SUM(pp.netVolume) contributionUsdPerTon, SUM(pp.contributionAmountInMillion) as contributionAmountInMillion, "
			+ "	SUM(pp.ebitdaAmountInMillion)/SUM(pp.netVolume) ebitdaUsdPerTon, SUM(pp.ebitdaAmountInMillion) as ebitdaAmountInMillion "
			+ "	from (select bo.Customer_Name as name, "
			+ " SUM(NVL(NET_VOLUME, 0)) as netVolume, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as nrpUsdPerTon, "
			+ "	SUM(NVL(SP_AMT, 0)) as nrpAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as contributionUsdPerTon, "
			+ " SUM(NVL(CONTR_AMT, 0)) as contributionAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(EBITDA_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as ebitdaUsdPerTon, "
			+ " SUM(NVL(EBITDA_AMT, 0)) as ebitdaAmountInMillion "
			+ "	from " + TableNames.TABLE_NAME_BILLING_F161B + " bo"
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?5 is null or bo.customer_name = cast(?5 as nvarchar2(50)))"
			+ "	group by bo.Customer_Name "
			+ " HAVING (?4 is null or (CAST(?4 AS NUMBER) = 1 AND SUM(NVL(EBITDA_AMT, 0)) < 0) OR (CAST(?4 AS NUMBER) = 0))"
			+ " ) pp ", nativeQuery = true)
	ProfitabilityItemView fetchTotalProfitabilityCustomers(String region, String fromDate, String toDate, Integer filterNegativeEBITDA, String customer);

	@Query(value = "select 'TOTAL' as name, "
			+ "	SUM(pp.netVolume) as netVolume, "
			+ "	SUM(pp.nrpAmountInMillion)/SUM(pp.netVolume) nrpUsdPerTon, SUM(pp.nrpAmountInMillion) as nrpAmountInMillion, "
			+ "	SUM(pp.contributionAmountInMillion)/SUM(pp.netVolume) contributionUsdPerTon, SUM(pp.contributionAmountInMillion) as contributionAmountInMillion, "
			+ "	SUM(pp.ebitdaAmountInMillion)/SUM(pp.netVolume) ebitdaUsdPerTon, SUM(pp.ebitdaAmountInMillion) as ebitdaAmountInMillion "
			+ "	from (select bo.region as name, "
			+ " SUM(NVL(NET_VOLUME, 0)) as netVolume, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(SP_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as nrpUsdPerTon, "
			+ "	SUM(NVL(SP_AMT, 0)) as nrpAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(CONTR_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as contributionUsdPerTon, "
			+ " SUM(NVL(CONTR_AMT, 0)) as contributionAmountInMillion, "
			+ " CASE WHEN SUM(NVL(NET_VOLUME, 0)) = 0 THEN 0 ELSE (SUM(NVL(EBITDA_AMT, 0)) / SUM(NVL(NET_VOLUME, 0))) END as ebitdaUsdPerTon, "
			+ " SUM(NVL(EBITDA_AMT, 0)) as ebitdaAmountInMillion "
			+ "	from  " + TableNames.TABLE_NAME_BILLING_F161B + " bo"
			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
			+ "	and (TO_DATE(bo.BILL_DATE, 'YYYYMMDD') between TO_DATE(?2, 'DD/MM/YYYY') and TO_DATE(?3, 'DD/MM/YYYY')) and (?4 is null or bo.customer_name = cast(?4 as nvarchar2(50))) "
			+ "	group by bo.region) pp ", nativeQuery = true)
	ProfitabilityItemView fetchTotalProfitabilityRegion(String region, String fromDate, String toDate, String customer);
	
//	@Query(value = "select bo.product product, "
//			+ " bo.prime_non_prime prime, "
//			+ "	SUM(ISNULL(\"Volume,net\", 0)) netVolume, "
//			+ "	SUM(ISNULL(ValuePriceEXW, 0)) exwUsdPerTon, "
//			+ "	SUM(ISNULL((ValuePriceEXW * \"Volume,net\")/1000000, 0)) exwAmountInMillion, "
//			+ "	SUM(ISNULL(ValueOnContrPrice, 0)) contributionUsdPerTon, "
//			+ "	SUM(ISNULL((ValueOnContrPrice * \"Volume,net\")/1000000, 0)) contributionAmountInMillion, "
//			+ "	SUM(ISNULL(VAT, 0)) vatAmountInMillion, "
//			+ "	SUM(ISNULL(GrossNetOfVat, 0)) grossNetOfVat"
//			+ "	from " + CommercialControlling.TABLE_NAME_BILLING_F161B + " bo "
////			+ "	where (?1 is null or bo.region = cast(?1 as nvarchar2(50))) "
////			+ "	and convert(date, bo.ORDER_DATE, 103) between convert(date, ?2, 103) and convert(date, ?3, 103) "
//			+ "	group by bo.product "
//			+ "	order by bo.product asc ", nativeQuery = true)
//	List<SalesByProductExcelView> fetchProfitabilityProductsForExcel(String region, String fromDate, String toDate);

}
