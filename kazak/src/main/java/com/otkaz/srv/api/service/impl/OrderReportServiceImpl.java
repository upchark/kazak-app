package com.otkaz.srv.api.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.OrderReportService;
import com.otkaz.srv.dto.OPDto;
import com.otkaz.srv.dto.OPZayvkasDto;
import com.otkaz.srv.dto.OrderPlantDto;
import com.otkaz.srv.dto.OrderReportDto;
import com.otkaz.srv.dto.OrderReportZayvkasDto;
import com.otkaz.srv.dto.RegionDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.dto.UserStatusDto;
import com.otkaz.srv.enums.ProductTypes;
import com.otkaz.srv.projection.OrderPlantView;
import com.otkaz.srv.projection.RegionView;
import com.otkaz.srv.projection.UserStatusView;
import com.otkaz.srv.repository.OrderReportRepository;
import com.otkaz.srv.utils.Utils;
import com.otkaz.srv.utils.constants.Orderbook;
import com.otkaz.srv.utils.constants.Zayvkas;

@Service(value = "orderReportService")
public class OrderReportServiceImpl implements OrderReportService {
	
	@Autowired
	private OrderReportRepository orderReportRepository;
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<RegionDto> fetchRegions() {
		List<RegionView> responseList = orderReportRepository.fetchRegions();
		List<RegionDto> response = new ArrayList<RegionDto>();
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				response.add(new RegionDto(item));
			});
		}
		return response;
	}
	
	@Override
	public List<OrderPlantDto> fetchPlants() {
		List<OrderPlantView> responseList = orderReportRepository.fetchOrderPlant();
		List<OrderPlantDto> response = new ArrayList<OrderPlantDto>();
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				response.add(new OrderPlantDto(item));
			});
		}
		return response;
	}
	
	@Override
	public List<OrderPlantDto> fetchZayvkasPlants() {
		List<OrderPlantView> responseList = orderReportRepository.fetchZayvkasPlants();
		List<OrderPlantDto> response = new ArrayList<OrderPlantDto>();
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				response.add(new OrderPlantDto(item));
			});
		}
		return response;
	}
	
	@Override
	public List<UserStatusDto> fetchUserStatus() {
		List<UserStatusView> responseList = orderReportRepository.fetchUserStatus();
		List<UserStatusDto> response = new ArrayList<UserStatusDto>();
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				response.add(new UserStatusDto(item));
			});
		}
		return response;
	}

	@Override
	public OrderReportDto fetchOrdersByProducts(String region,String[] plants, String fromDate, String toDate) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		List<OPDto> rolledProducts = fetchProducts(subjectDto, ProductTypes.ROLLED, region, plants, fromDate, toDate);
		List<OPDto> semisProducts = fetchProducts(subjectDto, ProductTypes.SEMIS, region, plants, fromDate, toDate);
		List<OPDto> consignmentProducts = fetchProducts(subjectDto, ProductTypes.Consignment, region, plants, fromDate, toDate);
		OPDto totalRolled = fetchTotalProducts(subjectDto, ProductTypes.ROLLED, region, plants,fromDate, toDate);
		OPDto totalSemis = fetchTotalProducts(subjectDto, ProductTypes.SEMIS, region, plants, fromDate, toDate);
		OPDto totalPIGIR = fetchTotalProducts(subjectDto, ProductTypes.PIGIR, region, plants, fromDate, toDate);
		OPDto totalConsignment = fetchTotalProducts(subjectDto, ProductTypes.Consignment, region, plants, fromDate, toDate);
		OPDto total = fetchTotalProducts(subjectDto, null, region, plants, fromDate, toDate);
		return new OrderReportDto(rolledProducts, semisProducts,consignmentProducts, totalRolled, totalSemis, totalPIGIR, totalConsignment, total);
	}
	
	private List<OPDto> fetchProducts(SubjectDto subjectDto, ProductTypes productType, String region, String[] plants, String fromDate, String toDate) {
		String whereCondition = buildWhereCondition(productType != null ? productType.name() : null);
		String query = generateProductQuery(whereCondition,(productType != null ? productType.name() : null), region, fromDate, toDate, plants);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		List<OPDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToOpDto(response);
		}).collect(Collectors.toList());
		return ls;
	}

	private OPDto fetchTotalProducts(SubjectDto subjectDto, ProductTypes productType, String region, String[] plants, String fromDate, String toDate) {
		String whereCondition = buildWhereCondition(productType != null ? productType.name() : null);
		String query = generateTotalProductQuery(whereCondition, productType != null ? productType.name() : null, region, fromDate, toDate, plants);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		List<OPDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToOpDto(response);
		}).collect(Collectors.toList());
		return ls != null && ls.size() > 0 ? ls.get(0) : null;
	}
	
	private String generateProductQuery(String whereCondition,String product_type, String region, String fromDate, String toDate, String[] plants) {
		String query = " select orp.product product";
		String[] ageings = Orderbook.getAgeings();
		for(int i = 0; i < ageings.length; i++) {
			String sqWhereCondition = buildSubQueryWhereCondition(region,product_type, fromDate, toDate, plants, ageings[i]);
			query += ", (" + Orderbook.getVolumeSumQuery() + sqWhereCondition 
					+ ") volume" + (i + 1) + ", (" + Orderbook.getAmountSumQuery() + sqWhereCondition + ") amount" + (i + 1) + " ";
		}
		String sqTotalWhereCondition = buildSubQueryWhereCondition(region,product_type, fromDate, toDate, plants, null);
		query += ", (" + Orderbook.getVolumeSumQuery() + sqTotalWhereCondition 
				+ ") totalVolume, (" + Orderbook.getAmountSumQuery() + sqTotalWhereCondition + ") totalAmount";
		query += Orderbook.getFromAndJoinQuery() + whereCondition;
		query += " group by orp.product, orp.product_rank, orp.product_type order by orp.product_rank asc ";
		return query;
	}
	
	private String generateTotalProductQuery(String whereCondition, String productType, String region, String fromDate, String toDate, String[] plants) {
		String query = "select (case when '" + productType + "' = 'SEMIS' then 'Total Semis' "
				+ "	when '" + productType + "' = 'ROLLED' then 'Total Rolled'"
				+ "	when '" + productType + "' = 'PIGIR' then 'Total PIGIRON'"
				+ "	when '" + productType + "' = 'Consignment' then 'Total Consignment'"
				+ "	else 'Total Direct' end) product, SUM(pp.volume1) volume1, SUM(pp.amount1)/SUM(pp.volume1) amount1, "
				+ "	SUM(pp.volume2) volume2, SUM(pp.amount2)/SUM(pp.volume2) amount2, "
				+ "	SUM(pp.volume3) volume3, SUM(pp.amount3)/SUM(pp.volume3) amount3, "
				+ "	SUM(pp.volume4) volume4, SUM(pp.amount4)/SUM(pp.volume4) amount4, "
				+ "	SUM(pp.totalVolume) totalVolume, (SUM(pp.totalAmount)/SUM(pp.totalVolume)) totalAmount "
				+ "	from (";
		query += " select orp.product product";
		String[] ageings = Orderbook.getAgeings();
		for(int i = 0; i < ageings.length; i++) {
			String sqWhereCondition = buildSubQueryWhereCondition(region,productType, fromDate, toDate, plants, ageings[i]);
//			String sqWhereCondition = buildSubQueryWhereCondition(region, "01/01/2017", toDate, plants, ageings[i]);
			query += ", (" + Orderbook.getVolumeSumQuery() + sqWhereCondition 
					+ ") volume" + (i + 1) + ", (" + Orderbook.getAmountSumTotalQuery() + sqWhereCondition + ") amount" + (i + 1) + " ";
			
			System.out.println("------------------------"+query);
		}
		String sqTotalWhereCondition = buildSubQueryWhereCondition(region,productType, fromDate, toDate, plants, null);
		query += ", (" + Orderbook.getVolumeSumQuery() + sqTotalWhereCondition 
				+ ") totalVolume, (" + Orderbook.getAmountSumTotalQuery() + sqTotalWhereCondition + ") totalAmount";
		query += Orderbook.getFromAndJoinQuery() + whereCondition;
		query += " group by orp.product, orp.product_type";
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
	
	private String buildSubQueryWhereCondition(String region, String productType, String fromDate, String toDate, String[] plants, String ageing) {
		String where = " where product = orp.product  ";
		
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
			where += (where.isEmpty() ? " where " : " and ") + "TO_DATE( ORDER_DATE , 'DD/MM/YYYY')"
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
		return where;
	}

	@Override
	public OrderReportZayvkasDto fetchOrdersByZayvkasProducts(String[] plants, String fromDate, String toDate, String[] userStatus) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		List<OPZayvkasDto> rolledProducts = fetchZayvkasProducts(subjectDto, ProductTypes.ROLLED, fromDate, toDate, plants,userStatus);
		List<OPZayvkasDto> semisProducts = fetchZayvkasProducts(subjectDto, ProductTypes.SEMIS, fromDate, toDate, plants,userStatus);
		List<OPZayvkasDto> consignmentProducts = fetchZayvkasProducts(subjectDto, ProductTypes.Consignment, fromDate, toDate, plants,userStatus);
		OPZayvkasDto totalRolled = fetchTotalZayvkasProducts(subjectDto, ProductTypes.ROLLED, fromDate, toDate, plants,userStatus);
		OPZayvkasDto totalSemis = fetchTotalZayvkasProducts(subjectDto, ProductTypes.SEMIS, fromDate, toDate, plants,userStatus);
		OPZayvkasDto totalPigir = fetchTotalZayvkasProducts(subjectDto, ProductTypes.PIGIR, fromDate, toDate, plants,userStatus);
		OPZayvkasDto total = fetchTotalZayvkasProducts(subjectDto, null, fromDate, toDate, plants,userStatus);
		OPZayvkasDto totalConsignment = fetchTotalZayvkasProducts(subjectDto, ProductTypes.Consignment, fromDate, toDate, plants,userStatus);
		return new OrderReportZayvkasDto(rolledProducts, semisProducts,consignmentProducts,  totalRolled, totalSemis,totalPigir, total,totalConsignment);
	}
	
	private List<OPZayvkasDto> fetchZayvkasProducts(SubjectDto subjectDto, ProductTypes productType, String fromDate, String toDate, String[] plants,String[] userStatus) {
		String whereCondition = buildZayvkasWhereCondition(productType != null ? productType.name() : null);
		String query = generateZayvkasProductQuery(whereCondition, productType != null ? productType.name() : null, fromDate, toDate, plants, userStatus);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		List<OPZayvkasDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToZayvkasDto(response);
		}).collect(Collectors.toList());
		return ls;
	} 

	private OPZayvkasDto fetchTotalZayvkasProducts(SubjectDto subjectDto, ProductTypes productType, String fromDate, String toDate, String[] plants, String[] userStatus) {
		String whereCondition = buildZayvkasWhereCondition(productType != null ? productType.name() : null);
		String query = generateTotalZayvkasProductQuery(whereCondition, productType != null ? productType.name() : null, fromDate, toDate, plants, userStatus);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		List<OPZayvkasDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToZayvkasDto(response);
		}).collect(Collectors.toList());
		return ls != null && ls.size() > 0 ? ls.get(0) : null;
	}
	
	private String generateZayvkasProductQuery(String whereCondition, String productType, String fromDate, String toDate, String[] plants, String[] userStatus) {
		String query = " select orp.product product";
		String sqTotalWhereCondition = buildZayvkasSubQueryWhereCondition(fromDate, productType, toDate, plants, userStatus);
		query += ", (" + Zayvkas.getVolumeSumQuery() + sqTotalWhereCondition 
				+ ") totalVolume, (" + Zayvkas.getAmountSumQuery() + sqTotalWhereCondition + ") totalAmount";
		query += Zayvkas.getFromAndJoinQuery() + whereCondition;
		query += " group by orp.product, orp.product_rank, orp.product_type order by orp.product_rank asc ";
		return query;
	}
	
	private String generateTotalZayvkasProductQuery(String whereCondition, String productType, String fromDate, String toDate, String[] plants, String[] userStatus) {
		String query = "select (case when '" + productType + "' = 'SEMIS' then 'Total Semis Order' "
				+ "	when '" + productType + "' = 'ROLLED' then 'Total Rolled Order'"
				+ "	when '" + productType + "' = 'PIGIR' then 'Total PIGIRON'"
				+ "	when '" + productType + "' = 'Consignment' then 'Total Consignment Order'"
				+ "	else 'Total Direct Order' end) product, "
				+ "	SUM(pp.totalVolume) totalVolume, (SUM(pp.totalAmount)/SUM(pp.totalVolume)) totalAmount "
				+ "	from (";
		query += " select orp.product product ";
		String sqTotalWhereCondition = buildZayvkasSubQueryWhereCondition(fromDate,productType, toDate, plants, userStatus);
		query += ", (" + Zayvkas.getVolumeSumQuery() + sqTotalWhereCondition 
				+ ") totalVolume, (" + Zayvkas.getAmountSumTotalQuery() + sqTotalWhereCondition + ") totalAmount";
		query += Zayvkas.getFromAndJoinQuery() + whereCondition;
		query += " group by orp.product, orp.product_rank, orp.product_type ";
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
		} else {
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
			where += (where.isEmpty() ? " where " : " and ") + "TO_DATE( ORDER_DATE , 'DD/MM/YYYY')"
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

//	private String buildZayvkasSubQueryWhereCondition(String fromDate, String toDate, String[] plants) {
//		String where = " where product = p.name ";
//		if(fromDate != null && !fromDate.isEmpty() && toDate != null && !toDate.isEmpty()) {
//			where += (where.isEmpty() ? " where " : " and ") + " TO_DATE(ORDER_DATE, 'DD/MM/YYYY') "
//					+ " between TO_DATE('" + fromDate + "', 'DD/MM/YYYY') "
//					+ "	and TO_DATE('" + toDate + "', 'DD/MM/YYYY') ";
//		} 
//		if(plants != null && plants.length > 0) {
//			String plantsStr = "";
//			for(int i = 0; i < plants.length; i++) {
//				plantsStr += (plantsStr.isEmpty() ? "" : ", ") + "'" + plants[i] + "'";
//			}
//			where += (where.isEmpty() ? " where " : " and ") + " plant in (" + plantsStr + ") ";
//		}
//		return where;
//	}

}
