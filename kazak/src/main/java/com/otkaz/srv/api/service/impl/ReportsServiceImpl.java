package com.otkaz.srv.api.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.ReportsService;
import com.otkaz.srv.dto.OPDto;
import com.otkaz.srv.dto.OPZayvkasDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.dto.excel.OrderReportDataExcelDto;
import com.otkaz.srv.dto.excel.OrderReportSummaryExcelDto;
import com.otkaz.srv.dto.excel.SummaryExcelDto;
import com.otkaz.srv.dto.excel.ZayvkasDataExcelDto;
import com.otkaz.srv.dto.excel.ZayvkasSummaryExcelDto;
import com.otkaz.srv.enums.ProductTypes;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.UserView;
import com.otkaz.srv.repository.OrderReportRepository;
import com.otkaz.srv.repository.UserRepository;
import com.otkaz.srv.utils.ExcelExportUtils;
import com.otkaz.srv.utils.Utils;
import com.otkaz.srv.utils.constants.Orderbook;
import com.otkaz.srv.utils.constants.Zayvkas;

@Service(value = "reportsService")
public class ReportsServiceImpl implements ReportsService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private OrderReportRepository orderReportRepository;
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public void exportOrderbookProducts(String region,String[] plants,String[] userStatus, String fromDate, String toDate, HttpServletResponse response) throws OTException {
		UserView user = getCurrentUserDetails();
		List<OPDto> rolledProductsList = fetchProducts(user.getRole(), ProductTypes.ROLLED, region, plants, userStatus, fromDate, toDate);
		List<OrderReportDataExcelDto> products = new ArrayList<OrderReportDataExcelDto>();
		if(!rolledProductsList.isEmpty()) {
			rolledProductsList.forEach(item->{
				OrderReportDataExcelDto orderReportDataExcelDto = new OrderReportDataExcelDto(item);
				products.add(orderReportDataExcelDto);
			});
			
		}
		products.add(new OrderReportDataExcelDto(fetchTotalProducts(user.getRole(), ProductTypes.ROLLED, region,plants, userStatus, fromDate, toDate)));
		List<OPDto> semisProductsList = fetchProducts(user.getRole(), ProductTypes.SEMIS, region,plants, userStatus, fromDate, toDate);
		if(!semisProductsList.isEmpty()) {
			semisProductsList.forEach(item->{
				OrderReportDataExcelDto orderReportDataExcelDto = new OrderReportDataExcelDto(item);
				products.add(orderReportDataExcelDto);
			});
		}
		products.add(new OrderReportDataExcelDto(fetchTotalProducts(user.getRole(), ProductTypes.SEMIS, region,plants, userStatus, fromDate, toDate)));
		products.add(new OrderReportDataExcelDto(fetchTotalProducts(user.getRole(), null, region,plants, userStatus, fromDate, toDate)));
		
		
		List<OPDto> consignmentProductsList = fetchProducts(user.getRole(), ProductTypes.Consignment, region, plants, userStatus, fromDate, toDate);
		if(!consignmentProductsList.isEmpty()) {
			consignmentProductsList.forEach(item->{
				OrderReportDataExcelDto orderReportDataExcelDto = new OrderReportDataExcelDto(item);
				products.add(orderReportDataExcelDto);
			});
			
		}
		products.add(new OrderReportDataExcelDto(fetchTotalProducts(user.getRole(), ProductTypes.Consignment, region,plants, userStatus, fromDate, toDate)));
		
		String fileName = Utils.fileNameWithCurrentDateAndTime("Order_Book_Report_", ".xls");
		OrderReportSummaryExcelDto orderBookSummary = addOrderBookSummarySheet("Order Book Report - By Products", user.getName(), fromDate, toDate);
		writeToResponse(response, products, OrderReportDataExcelDto.class, fileName, OrderReportSummaryExcelDto.class, orderBookSummary);
	}
	
	private OrderReportSummaryExcelDto addOrderBookSummarySheet(String type, String createdBy, String fromDate, String toDate) {
		OrderReportSummaryExcelDto orderBookData = new OrderReportSummaryExcelDto();
		orderBookData.setType(type);
		orderBookData.setCreatedBy(createdBy);
		orderBookData.setCreatedOn(Utils.currentDateAndTimeInString());
		orderBookData.setFromDate(fromDate);
		orderBookData.setToDate(toDate);
		return orderBookData;
	}
	
	private Collection<String> getPlantsCollection(String[] plants) {
		List<String> plantList = new ArrayList<>();
		if(plants != null && plants.length >0) 
			return null;
		
		for(int i = 0 ; i < plants.length; i++) {
			plantList.add(plants[i]);
		}
		return plantList;
	}
	
	private List<OPDto> fetchProducts(String role, ProductTypes productType, String region, String[] plants,String[] userStatus, String fromDate, String toDate) {
		String whereCondition = buildWhereCondition(productType != null ? productType.name() : null);
		String query = generateProductQuery(whereCondition, (productType != null ? productType.name() : null), region, fromDate, toDate, plants, userStatus);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		List<OPDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToOpDto(response);
		}).collect(Collectors.toList());
		return ls;
	}

	private OPDto fetchTotalProducts(String role, ProductTypes productType, String region, String[] plants,String[] userStatus, String fromDate, String toDate) {
		String whereCondition = buildWhereCondition(productType != null ? productType.name() : null);
		String query = generateTotalProductQuery(whereCondition, productType != null ? productType.name() : null, region, fromDate, toDate, plants, userStatus);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		List<OPDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToOpDto(response);
		}).collect(Collectors.toList());
		return ls != null && ls.size() > 0 ? ls.get(0) : null;
	}
	
	private String generateProductQuery(String whereCondition, String product_type, String region, String fromDate, String toDate, String[] plants, String[] userStatus) {
		String query = " select orp.product product";
		String[] ageings = Orderbook.getAgeings();
		for(int i = 0; i < ageings.length; i++) {
			String sqWhereCondition = buildSubQueryWhereCondition(region, product_type, fromDate, toDate, plants, userStatus, ageings[i]);
			query += ", (" + Orderbook.getVolumeSumQuery() + sqWhereCondition 
					+ ") volume" + (i + 1) + ", (" + Orderbook.getAmountSumQuery() + sqWhereCondition + ") amount" + (i + 1) + " ";
		}
		String sqTotalWhereCondition = buildSubQueryWhereCondition(region, product_type, fromDate, toDate, plants, userStatus, null);
		query += ", (" + Orderbook.getVolumeSumQuery() + sqTotalWhereCondition 
				+ ") totalVolume, (" + Orderbook.getAmountSumQuery() + sqTotalWhereCondition + ") totalAmount";
		query += Orderbook.getFromAndJoinQuery() + whereCondition;
		query += " group by orp.product, orp.product_rank, orp.product_type order by orp.product_rank asc ";
		//query += " group by p.name, p.rank order by p.rank asc ";
		return query;
	}
	
	private String generateTotalProductQuery(String whereCondition, String productType, String region, String fromDate, String toDate, String[] plants, String[] userStatus) {
		String query = "select (case when '" + productType + "' = 'SEMIS' then 'TOTAL SEMIS' "
				+ "	when '" + productType + "' = 'ROLLED' then 'TOTAL ROLLED'"
				+ "	when '" + productType + "' = 'Consignment' then 'TOTAL CONSIGNMENT'"
				+ "	else 'TOTAL' end) product, SUM(pp.volume1) volume1, SUM(pp.amount1)/SUM(pp.volume1) amount1, "
				+ "	SUM(pp.volume2) volume2, SUM(pp.amount2)/SUM(pp.volume2) amount2, "
				+ "	SUM(pp.volume3) volume3, SUM(pp.amount3)/SUM(pp.volume3) amount3, "
				+ "	SUM(pp.volume4) volume4, SUM(pp.amount4)/SUM(pp.volume4) amount4, "
				+ "	SUM(pp.totalVolume) totalVolume, (SUM(pp.totalAmount)/SUM(pp.totalVolume)) totalAmount "
				+ "	from (";
		query += " select orp.product product";
		String[] ageings = Orderbook.getAgeings();
		for(int i = 0; i < ageings.length; i++) {
			String sqWhereCondition = buildSubQueryWhereCondition(region, productType, fromDate, toDate, plants, userStatus, ageings[i]);
			query += ", (" + Orderbook.getVolumeSumQuery() + sqWhereCondition 
					+ ") volume" + (i + 1) + ", (" + Orderbook.getAmountSumTotalQuery() + sqWhereCondition + ") amount" + (i + 1) + " ";
		}
		String sqTotalWhereCondition = buildSubQueryWhereCondition(region, productType,fromDate, toDate, plants, userStatus, null);
		query += ", (" + Orderbook.getVolumeSumQuery() + sqTotalWhereCondition 
				+ ") totalVolume, (" + Orderbook.getAmountSumTotalQuery() + sqTotalWhereCondition + ") totalAmount";
		query += Orderbook.getFromAndJoinQuery() + whereCondition;
		query += " group by orp.product, orp.product_type ";
		query += " ) pp";
		return query;
	}
	
	private OPDto convertToOpDto(Object[] response) {
		OPDto opDto = new OPDto();
		opDto.setProduct((String) response[0]);
		opDto.setVolume1((BigDecimal) response[1]);
		opDto.setAmount1((BigDecimal) response[2]);
		opDto.setVolume2((BigDecimal) response[3]);
		opDto.setAmount2((BigDecimal) response[4]);
		opDto.setVolume3((BigDecimal) response[5]);
		opDto.setAmount3((BigDecimal) response[6]);
		opDto.setVolume4((BigDecimal) response[7]);
		opDto.setAmount4((BigDecimal) response[8]);
		opDto.setTotalVolume((BigDecimal) response[9]);
		opDto.setTotalAmount((BigDecimal) response[10]);
		return opDto;
	}
	
	private String buildWhereCondition(String productType) {
		String where = "";
		if(productType != null && !productType.isEmpty()) {
			where += (where.isEmpty() ? " where " : " and ") + " orp.product_type = '" + productType + "' ";
		}else {
			where += (where.isEmpty() ? " where " : " and ") + "( orp.product_type = '" + ProductTypes.ROLLED.name() + "' or orp.product_type ='"+ ProductTypes.SEMIS.name() + "' )";
		}
		return where;
	}
	
	private String buildSubQueryWhereCondition(String region,String productType, String fromDate, String toDate, String[] plants, String[] userStatus, String ageing) {
		String where = " where product = orp.product ";
		if(productType != null && !productType.isEmpty()) {
			where += (where.isEmpty() ? " where " : " and ") + " product_type = '" + productType + "' ";
		}else {
			where += (where.isEmpty() ? " where " : " and ") + "( orp.product_type = product_type )";
		}
		if(ageing != null && !ageing.isEmpty()) {
			where += (where.isEmpty() ? " where " : " and ") + " ageing = '" + ageing + "' ";
		}
		if(region != null && !region.isEmpty()) {
			where += (where.isEmpty() ? " where " : " and ") + " region = '" + region + "' ";
		}
		if(fromDate != null && !fromDate.isEmpty() && toDate != null && !toDate.isEmpty()) {
			where += (where.isEmpty() ? " where " : " and ") + " TO_DATE(ORDER_DATE, 'DD/MM/YYYY') "
					+ " between TO_DATE('" + fromDate + "', 'DD/MM/YYYY') "
					+ "	and TO_DATE('" + toDate + "', 'DD/MM/YYYY') ";
		}
		if(plants != null && plants.length > 0) {
			String plantsStr = "";
			for(int i = 0; i < plants.length; i++) {
				plantsStr += (plantsStr.isEmpty() ? "" : ", ") + "'" + plants[i] + "'";
			}
			where += (where.isEmpty() ? " where " : " and ") + " plant in (" + plantsStr + ") ";
		}
		if(userStatus != null && userStatus.length > 0) {
			String userStatusStr = "";
			for(int i = 0; i < userStatus.length; i++) {
				userStatusStr += (userStatusStr.isEmpty() ? "" : ", ") + "'" + userStatus[i] + "'";
			}
			where += (where.isEmpty() ? " where " : " and ") + " user_status in (" + userStatusStr + ") ";
		}
		return where;
	}

	@Override
	public void exportZayvkasProducts(String[] plants, String[] userStatus, String fromDate, String toDate, HttpServletResponse response) throws OTException {
		UserView user = getCurrentUserDetails();
		List<OPZayvkasDto> rolledProductsList = fetchZayvkasProducts(user.getRole(), ProductTypes.ROLLED, fromDate, toDate, plants, userStatus);
		List<ZayvkasDataExcelDto> products = new ArrayList<ZayvkasDataExcelDto>();
		if(!rolledProductsList.isEmpty()) {
			rolledProductsList.forEach(item->{
				ZayvkasDataExcelDto orderReportDataExcelDto = new ZayvkasDataExcelDto(item);
				products.add(orderReportDataExcelDto);
			});
			
		}
		products.add(new ZayvkasDataExcelDto(fetchTotalZayvkasProducts(user.getRole(), ProductTypes.ROLLED, fromDate, toDate, plants, userStatus)));
		List<OPZayvkasDto> semisProductsList = fetchZayvkasProducts(user.getRole(), ProductTypes.SEMIS, fromDate, toDate, plants, userStatus);
		if(!semisProductsList.isEmpty()) {
			semisProductsList.forEach(item->{
				ZayvkasDataExcelDto orderReportDataExcelDto = new ZayvkasDataExcelDto(item);
				products.add(orderReportDataExcelDto);
			});
		}
		products.add(new ZayvkasDataExcelDto(fetchTotalZayvkasProducts(user.getRole(), ProductTypes.SEMIS, fromDate, toDate, plants, userStatus)));
		products.add(new ZayvkasDataExcelDto(fetchTotalZayvkasProducts(user.getRole(), null, fromDate, toDate, plants, userStatus)));
		List<OPZayvkasDto> consignmentProductsList = fetchZayvkasProducts(user.getRole(), ProductTypes.Consignment, fromDate, toDate, plants, userStatus);
		if(!consignmentProductsList.isEmpty()) {
			consignmentProductsList.forEach(item->{
				ZayvkasDataExcelDto orderReportDataExcelDto = new ZayvkasDataExcelDto(item);
				products.add(orderReportDataExcelDto);
			});
		}
		products.add(new ZayvkasDataExcelDto(fetchTotalZayvkasProducts(user.getRole(), ProductTypes.Consignment, fromDate, toDate, plants, userStatus)));
		
		String fileName = Utils.fileNameWithCurrentDateAndTime("Zayvkas_Report_", ".xls");
		ZayvkasSummaryExcelDto zayvkasSummary = addZayvkasSummarySheet("Zayvkas Report - By Products", user.getName(), fromDate, toDate);
		writeToResponse(response, products, ZayvkasDataExcelDto.class, fileName, ZayvkasSummaryExcelDto.class, zayvkasSummary);
	}
	
	private ZayvkasSummaryExcelDto addZayvkasSummarySheet(String type, String createdBy, String fromDate, String toDate) {
		ZayvkasSummaryExcelDto orderBookData = new ZayvkasSummaryExcelDto();
		orderBookData.setType(type);
		orderBookData.setCreatedBy(createdBy);
		orderBookData.setCreatedOn(Utils.currentDateAndTimeInString());
		orderBookData.setFromDate(fromDate);
		orderBookData.setToDate(toDate);
		return orderBookData;
	}
	
	private List<OPZayvkasDto> fetchZayvkasProducts(String role, ProductTypes productType, String fromDate, String toDate, String[] plants, String[] userStatus) {
		String whereCondition = buildZayvkasWhereCondition(productType != null ? productType.name() : null);
		String query = generateZayvkasProductQuery(whereCondition,  productType != null ? productType.name() : null, fromDate, toDate, plants, userStatus);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		List<OPZayvkasDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToZayvkasDto(response);
		}).collect(Collectors.toList());
		return ls;
	}

	private OPZayvkasDto fetchTotalZayvkasProducts(String role, ProductTypes productType, String fromDate, String toDate, String[] plants, String[] userStatus) {
		String whereCondition = buildZayvkasWhereCondition(productType != null ? productType.name() : null);
		String query = generateTotalZayvkasProductQuery(whereCondition, productType != null ? productType.name() : null, fromDate, toDate, plants, userStatus);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		List<OPZayvkasDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToZayvkasDto(response);
		}).collect(Collectors.toList());
		return ls != null && ls.size() > 0 ? ls.get(0) : null;
	}
	
	private String generateZayvkasProductQuery(String whereCondition,String productType, String fromDate, String toDate, String[] plants, String[] userStatus) {
		String query = " select orp.product product";
		String sqTotalWhereCondition = buildZayvkasSubQueryWhereCondition(fromDate, productType, toDate, plants, userStatus);
		query += ", (" + Zayvkas.getVolumeSumQuery() + sqTotalWhereCondition 
				+ ") totalVolume, (" + Zayvkas.getAmountSumQuery() + sqTotalWhereCondition + ") totalAmount";
		query += Zayvkas.getFromAndJoinQuery() + whereCondition;
		query += " group by orp.product, orp.product_rank order by orp.product_rank asc ";
		return query;
	}
	
	private String generateTotalZayvkasProductQuery(String whereCondition, String productType, String fromDate, String toDate, String[] plants, String[] userStatus) {
		String query = "select (case when '" + productType + "' = 'SEMIS' then 'TOTAL SEMIS' "
				+ "	when '" + productType + "' = 'ROLLED' then 'TOTAL ROLLED'"
				+ "	else 'TOTAL' end) product, "
				+ "	SUM(pp.totalVolume) totalVolume, (SUM(pp.totalAmount)/SUM(pp.totalVolume)) totalAmount "
				+ "	from (";
		query += " select orp.product product";
		String sqTotalWhereCondition = buildZayvkasSubQueryWhereCondition(fromDate, productType, toDate, plants, userStatus);
		query += ", SUM((" + Zayvkas.getVolumeSumQuery() + sqTotalWhereCondition 
				+ ")) totalVolume, SUM((" + Zayvkas.getAmountSumTotalQuery() + sqTotalWhereCondition + ")) totalAmount";
		query += Zayvkas.getFromAndJoinQuery() + whereCondition;
		query += " group by orp.product, orp.product_rank ";
		query += " ) pp";
		return query;
	}
	
	private OPZayvkasDto convertToZayvkasDto(Object[] response) {
		OPZayvkasDto opZayvkasDto = new OPZayvkasDto();
		opZayvkasDto.setProduct((String) response[0]);
		opZayvkasDto.setTotalVolume((BigDecimal) response[1]);
		opZayvkasDto.setTotalAmount((BigDecimal) response[2]);
		return opZayvkasDto;
	}
	
	private String buildZayvkasWhereCondition(String productType) {
		String where = "";
		if(productType != null && !productType.isEmpty()) {
			where += (where.isEmpty() ? " where " : " and ") + " orp.product_type = '" + productType + "' ";
		}else {
			where += (where.isEmpty() ? " where " : " and ") + "( orp.product_type = '" + ProductTypes.ROLLED.name() + "' or orp.product_type ='"+ ProductTypes.SEMIS.name() + "' )";
		}
		return where;
	}
	
	private String buildZayvkasSubQueryWhereCondition(String fromDate, String productType ,  String toDate, String[] plants,  String[] userStatus) {
		String where = " where product = orp.product ";
		
		if(productType != null && !productType.isEmpty()) {
			where += (where.isEmpty() ? " where " : " and ") + " product_type = '" + productType + "' ";
		}else {
			where += (where.isEmpty() ? " where " : " and ") + "( orp.product_type = product_type )";
		}
		
		if(fromDate != null && !fromDate.isEmpty() && toDate != null && !toDate.isEmpty()) {
			where += (where.isEmpty() ? " where " : " and ") + " TO_DATE(ORDER_DATE, 'DD/MM/YYYY') "
					+ " between TO_DATE('" + fromDate + "', 'DD/MM/YYYY') "
					+ "	and TO_DATE('" + toDate + "', 'DD/MM/YYYY') ";
		}
		if(plants != null && plants.length > 0) {
			String plantsStr = "";
			for(int i = 0; i < plants.length; i++) {
				plantsStr += (plantsStr.isEmpty() ? "" : ", ") + "'" + plants[i] + "'";
			}
			where += (where.isEmpty() ? " where " : " and ") + " plant in (" + plantsStr + ") ";
		}
		if(userStatus != null && userStatus.length > 0) {
			String userStatusStr = "";
			for(int i = 0; i < userStatus.length; i++) {
				userStatusStr += (userStatusStr.isEmpty() ? "" : ", ") + "'" + userStatus[i] + "'";
			}
			where += (where.isEmpty() ? " where " : " and ") + " user_status in (" + userStatusStr + ") ";
		}
		return where;
	}
	
	private <T> void writeToResponse(HttpServletResponse response, List<T> data, Class<?> dataClazz, String filename, Class<?> summaryClazz, SummaryExcelDto summarySheet)
			throws OTException {
		try (ServletOutputStream outStream = response.getOutputStream()) {
			response.setContentType(Utils.getMediaType("XLS"));
			response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename);
			if (summarySheet != null) {
				ExcelExportUtils.getExcelStream(outStream, data, dataClazz, summaryClazz, summarySheet);
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#report.xls.failed");
		}
	}
	
	private UserView getCurrentUserDetails() {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN.name())) 
			return this.userRepository.findAdminUser(subjectDto.getId());
		return this.userRepository.findEmployeeUser(subjectDto.getId());
	}

}
