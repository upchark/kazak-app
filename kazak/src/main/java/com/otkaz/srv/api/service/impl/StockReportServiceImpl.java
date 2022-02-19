package com.otkaz.srv.api.service.impl;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.jdbc.Work;
import org.hibernate.query.NativeQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.otkaz.srv.api.service.StockReportService;
import com.otkaz.srv.dto.OcpStockDto;
import com.otkaz.srv.dto.SPDto;
import com.otkaz.srv.dto.StockReportDto;
import com.otkaz.srv.entity.OCPStock;
import com.otkaz.srv.entity.OCPStockBPM;
import com.otkaz.srv.entity.OCPStockMBIndex;
import com.otkaz.srv.entity.OCPStockMRF;
import com.otkaz.srv.enums.StockTypes;
import com.otkaz.srv.repository.OCPStockBPMReportRepository;
import com.otkaz.srv.repository.OCPStockMRFReportRepository;
import com.otkaz.srv.utils.Constants;
import com.otkaz.srv.utils.ExcelImportUtils;
import com.otkaz.srv.utils.constants.StockReport;

@Service(value = "stockReportService")
public class StockReportServiceImpl implements StockReportService {
	
	
	@Autowired
	//@PersistenceContext
	private EntityManager entityManager;
	
	@Autowired
	private OCPStockMRFReportRepository oCPStockMRFReportRepository;
	
	@Autowired
	private OCPStockBPMReportRepository oCPStockBPMReportRepository;


	@Override
	public StockReportDto fetchStockReport() {
		return null;
	}
	
	@Override
	public StockReportDto fetchStockByProducts() {
		List<SPDto> fgProducts = fetchStockProductDetails(StockTypes.FG);
		List<SPDto> semisProducts = fetchStockProductDetails(StockTypes.SEMIS);
		List<SPDto> wipProducts = fetchStockProductDetails(StockTypes.WIP);
		List<SPDto> FgatcsProducts = fetchStockProductDetails(StockTypes.FG_at_CS);
		List<SPDto> FgatportProducts = fetchStockProductDetails(StockTypes.FG_at_Port);
		List<SPDto> freeProducts = fetchStockProductDetails(StockTypes.FREE);
		SPDto totalFG = fetchTotalStockProducts(StockTypes.FG);
		SPDto totalSemis = fetchTotalStockProducts(StockTypes.SEMIS);
		SPDto totalWIP = fetchTotalStockProducts(StockTypes.WIP);
		SPDto total = fetchTotalStockProducts(null);
		SPDto totalFgCs = fetchTotalStockProducts(StockTypes.FG_at_CS);
		SPDto totalFgPort = fetchTotalStockProducts(StockTypes.FG_at_Port);
		SPDto totalFree = fetchTotalStockProducts(StockTypes.FREE);
		SPDto totalAll = fetchTotalAllStockProducts(StockTypes.ALL);
		return new StockReportDto(fgProducts, semisProducts, wipProducts, FgatcsProducts, FgatportProducts, freeProducts, totalFG, totalSemis, totalWIP,
				total,totalFgCs, totalFgPort, totalFree, totalAll);
	}
//	
//	private List<OPDto> fetch(SubjectDto subjectDto, ProductTypes productType) {
//		String whereCondition = buildWhereCondition(productType != null ? productType.name() : null);
//		String query = generateProductQuery(whereCondition,(productType != null ? productType.name() : null), region, fromDate, toDate, plants);
//		Query q = entityManager.createNativeQuery(query);
//		List<Object[]> dbResponseList = q.getResultList();
//		List<OPDto> ls = dbResponseList.stream().map((Object[] response) -> {
//			return convertToOpDto(response);
//		}).collect(Collectors.toList());
//		return ls;
//	}
//	
	
	private List<SPDto> fetchStockProductDetails( StockTypes productType) {
		String whereCondition = buildWhereCondition(productType != null ? productType.name().replaceAll("_", " ") : null);
		String query = generateStockProductQuery(whereCondition,(productType != null ? productType.name().replaceAll("_", " ") : null));
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		List<SPDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToSpDto(response,productType != null ? productType.name().replaceAll("_", " ") : null);
		}).collect(Collectors.toList());
		if(ls != null && ls.size() > 0) {
			ls.get(0).setRowspan(ls.size());
		}
		return ls;
	}
//
	private SPDto fetchTotalStockProducts( StockTypes productType) {
		String whereCondition = buildWhereCondition(productType != null ? productType.name().replaceAll("_", " ") : null);
		String query = generateTotalProductQuery(whereCondition, productType != null ? productType.name().replaceAll("_", " ") : null);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		List<SPDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToSpDto(response,productType != null ? productType.name() : null);
		}).collect(Collectors.toList());
		 
		SPDto spDto = (ls != null && ls.size() > 0 ? ls.get(0) : (new SPDto()));
		
		if(ls == null || ls.size() <= 0) {
			spDto.setProduct(productType != null ? productType.name() : "GandTotal");
		}
		
		return spDto; 
	}
	
	
	private SPDto fetchTotalAllStockProducts( StockTypes productType) {
		String whereCondition = buildWhereCondition(productType != null ? productType.name().replaceAll("_", " ") : null);
		String query = generateTotalAllProductQuery(whereCondition, productType != null ? productType.name().replaceAll("_", " ") : null);
		Query q = entityManager.createNativeQuery(query);
		List<Object[]> dbResponseList = q.getResultList();
		List<SPDto> ls = dbResponseList.stream().map((Object[] response) -> {
			return convertToSpDto(response,productType != null ? productType.name().replaceAll("_", " ") : null);
		}).collect(Collectors.toList());
		 
		SPDto spDto = (ls != null && ls.size() > 0 ? ls.get(0) : (new SPDto()));
		
		if(ls == null || ls.size() <= 0) {
			spDto.setProduct(productType != null ? productType.name().replaceAll("_", " ") : "GandTotal");
		}
		
		return spDto; 
	}
	
//	
	private String generateStockProductQuery(String whereCondition,String product_type) {
		String query = " select orp.product product, orp.type product_type";
		String[] ageings = StockReport.getAgeings();
		
		for(int i = 0; i < ageings.length; i++) {
			String name = ageings[i].replaceAll("\\s", "");
			name = name.replaceAll("-", "");
			int sort = ((ageings[i] == "Prime" || ageings[i] == "Non-Prime") ? 1 : 0);
			String sqWhereCondition = buildSubQueryWhereCondition(product_type,ageings[i], sort );
			
			System.out.println("shop name -------"+ageings[i]);
			query += ", (" + StockReport.getQuantitySumQuery() + sqWhereCondition 
					+ ") " + name + "value ";
		}
		String sqWheregrandtotalCondition = buildSubQueryWherGrandTotal(product_type);
		query += ", (" + StockReport.getQuantitySumQuery() + sqWheregrandtotalCondition + ") grandTotal";
		query += StockReport.getFromAndJoinQuery() + whereCondition;
		query += " group by orp.product , orp.type ";
		return query;
	}
//	
//	private String generateProductQuery(String whereCondition,String product_type, String region, String fromDate, String toDate, String[] plants) {
//		String query = " select orp.product product";
//		String[] ageings = Orderbook.getAgeings();
//		for(int i = 0; i < ageings.length; i++) {
//			String sqWhereCondition = buildSubQueryWhereCondition(region,product_type, fromDate, toDate, plants, ageings[i]);
//			query += ", (" + Orderbook.getVolumeSumQuery() + sqWhereCondition 
//					+ ") volume" + (i + 1) + ", (" + Orderbook.getAmountSumQuery() + sqWhereCondition + ") amount" + (i + 1) + " ";
//		}
//		String sqTotalWhereCondition = buildSubQueryWhereCondition(region,product_type, fromDate, toDate, plants, null);
//		query += ", (" + Orderbook.getVolumeSumQuery() + sqTotalWhereCondition 
//				+ ") totalVolume, (" + Orderbook.getAmountSumQuery() + sqTotalWhereCondition + ") totalAmount";
//		query += Orderbook.getFromAndJoinQuery() + whereCondition;
//		query += " group by orp.product, orp.product_rank order by orp.product_rank asc ";
//		return query;
//	}
//	
	private String generateTotalProductQuery(String whereCondition, String productType) {
		String query = "select (case when '" + productType + "' = 'FG' then 'Total FG' "
				+ "	when '" + productType + "' = 'SEMIS' then 'Total Semis'"
				+ "	when '" + productType + "' = 'WIP' then 'Total WIP'"
				+ "	when '" + productType + "' = 'FREE' then 'Total Metal Inventory ( FG at Ports and CS )'"
				+ "	when '" + productType + "' = 'FG at CS' then 'Total FG at CS '"
				+ "	when '" + productType + "' = 'FG at Port' then 'Total FG at Port '"
				+ "	else 'Total Metal Inventory at Plant' end) product"+", 'Product_type' prdtype ";
		query += " ";
		String[] ageings = StockReport.getAgeings();
		for(int i = 0; i < ageings.length; i++) {
			String name = ageings[i].replaceAll("\\s", "");
			name = name.replaceAll("-", "");
			int sort = ((ageings[i] == "Prime" || ageings[i] == "Non-Prime") ? 1 : 0);
			String sqWhereCondition = buildSubQueryTotalWhereCondition(productType,ageings[i],sort);
			query += ", (" + StockReport.getQuantitySumQuery() + sqWhereCondition 
					+ ") " + name + "value ";
		}
		
		String sqWheregrandtotalCondition = buildSubQueryGrandTotalWhereCondition(productType);
		query += ", (" + StockReport.getQuantitySumQuery() + sqWheregrandtotalCondition + ") grandTotal";
		
		query += StockReport.getFromAndJoinQuery() + whereCondition;
		query += " group by orp.type";
//		query += " ) pp";
		return query;
	}
	
	
	private String generateTotalAllProductQuery(String whereCondition, String productType) {
		String query = "select 'Grand Total Metal Inventory (incl. CS and Port)' product"+", 'Product_type' prdtype ";
		query += " ";
		String[] ageings = StockReport.getAgeings();
		for(int i = 0; i < ageings.length; i++) {
			String name = ageings[i].replaceAll("\\s", "");
			name = name.replaceAll("-", "");
			int sort = ((ageings[i] == "Prime" || ageings[i] == "Non-Prime") ? 1 : 0);
			String sqWhereCondition = buildSubQueryTotalAllWhereCondition(productType,ageings[i],sort);
			query += ", (" + StockReport.getQuantitySumQuery() + sqWhereCondition 
					+ ") " + name + "value ";
		}
		
		String sqWheregrandtotalCondition = buildSubQueryGrandTotalAllWhereCondition(productType);
		query += ", (" + StockReport.getQuantitySumQuery() + sqWheregrandtotalCondition + ") grandTotal";
		
		query += StockReport.getFromAndJoinQuery() + whereCondition;
		query += " group by orp.type";
//		query += " ) pp";
		return query;
	}
	
	
	
	
//	
	private SPDto convertToSpDto(Object[] response, String stockTypes) {
		SPDto spDto = new SPDto();
		
		spDto.setRowspan(0);
		spDto.setName(stockTypes);
		spDto.setProduct((String) response[0]);
		spDto.setType((String)response[1]);
		spDto.setHsm((BigDecimal) response[2]);
		spDto.setCrm2((BigDecimal) response[3]);
		spDto.setCrm3((BigDecimal) response[4]);
		spDto.setGalvashops((BigDecimal) response[5]);
		spDto.setPipemill((BigDecimal) response[6]);
		spDto.setRebarmill((BigDecimal) response[7]);
		

		spDto.setBlocked((BigDecimal) response[8]);
		spDto.setPrime((BigDecimal) response[9]);
		spDto.setNonprime((BigDecimal) response[10]);
		spDto.setLoadonwagon((BigDecimal) response[11]);
		spDto.setGrandtotal((BigDecimal) response[12]); 
		spDto.setFreeTodespatch(new BigDecimal(0));
		spDto.setFreeTodespatch(spDto.getFreeTodespatch().add(spDto.getGrandtotal()) == null ? (new BigDecimal(0)) : spDto.getGrandtotal());
		spDto.setFreeTodespatch(spDto.getFreeTodespatch().subtract(spDto.getBlocked() == null ? (new BigDecimal(0)) : spDto.getBlocked()));
		spDto.setGrandincltotal(new BigDecimal(0));
		spDto.setGrandincltotal(spDto.getGrandincltotal().add(spDto.getGrandtotal() == null ? (new BigDecimal(0)) : spDto.getGrandtotal()));
		spDto.setGrandincltotal(spDto.getGrandincltotal().add(spDto.getLoadonwagon()==null? (new BigDecimal(0)) : spDto.getLoadonwagon() ));
		return spDto; 
	} 
	
	private String buildWhereCondition(String productType) {
		String where = "";
		
		if(productType != null && !productType.isEmpty() && productType != "FREE" && productType != "ALL") {
			System.out.println("All the data------------------------->>>>"+productType);
			where += (where.isEmpty() ? " where " : " and ") + " orp.type = '" + productType + "' ";
		}else if(productType == "FREE") {
			where += (where.isEmpty() ? " where " : " and ") + " orp.type != '" + StockTypes.FG.name() + "' and orp.type !='"+ StockTypes.SEMIS.name() + "' "+ " and orp.type !='"+ StockTypes.WIP.name() + "' ";
		}else if(productType == "ALL"){
			
			
			where += (where.isEmpty() ? " where " : " and ") + " (type = '" + StockTypes.FG.name() + "' or type ='"+ StockTypes.SEMIS.name() + "' "+ " or type ='"+ StockTypes.WIP.name() + "' or type = 'FG at Port' or type = 'FG at CS' )";
			
		}else {
			where += (where.isEmpty() ? " where " : " and ") + " orp.type = '" + StockTypes.FG.name() + "' or orp.type ='"+ StockTypes.SEMIS.name() + "' "+ " or orp.type ='"+ StockTypes.WIP.name() + "' ";
		}
		return where;
	}
//	
	private String buildSubQueryWhereCondition(String productType , String shop_name, int sort) {
		String where = " where product = orp.product ";
		
		if(productType != null && !productType.isEmpty() && productType != "FREE") {
			where += (where.isEmpty() ? " where " : " and ") + " type = '" + productType + "'  ";
		}else if(productType == "FREE") {
			where += (where.isEmpty() ? " where " : " and ") + " type != '" + StockTypes.FG.name() + "' and type !='"+ StockTypes.SEMIS.name() + "' "+ " and type !='"+ StockTypes.WIP.name() + "' ";
		}
		
		if(sort  == 1) {
			where += (where.isEmpty() ? " where " : " and ") + " sort = '" + shop_name + "' and shop_name not in ('Blocked', 'Loaded on Wagons' )  ";
		}else {
			where += (where.isEmpty() ? " where " : " and ") + " shop_name = '" + shop_name + "'  ";
		}
		return where;
	}
	
	private String buildSubQueryWherGrandTotal(String productType) {
		String where = " where product = orp.product ";
		
		if(productType != null && !productType.isEmpty() && productType != "FREE") {
			where += (where.isEmpty() ? " where " : " and ") + " type = '" + productType + "'  ";
		}else if( productType != null && !productType.isEmpty() && productType == "FREE") {
			where += (where.isEmpty() ? " where " : " and ") + " (type != '" + StockTypes.FG.name() + "' and type !='"+ StockTypes.SEMIS.name() + "' "+ " and type !='"+ StockTypes.WIP.name() + "') ";
		}

			where += (where.isEmpty() ? " where " : " and ") + " shop_name not in ('Blocked', 'Loaded on Wagons' ) ";
		return where;
	}
	
	private String buildSubQueryTotalWhereCondition(String productType , String shop_name, int sort) {
		String where = "";
		
		if(productType != null && !productType.isEmpty() && productType != "FREE") {
			where += (where.isEmpty() ? " where " : " and ") + " type = '" + productType + "'  ";
		}else if(productType != null && !productType.isEmpty() && productType == "FREE") {
			where += (where.isEmpty() ? " where " : " and ") + "  ( type != '" + StockTypes.FG.name() + "' and type !='"+ StockTypes.SEMIS.name() + "' "+ " and type !='"+ StockTypes.WIP.name() + "' )";
		}else {
			where += (where.isEmpty() ? " where " : " and ") + " (type = '" + StockTypes.FG.name() + "' or type ='"+ StockTypes.SEMIS.name() + "' "+ " or type ='"+ StockTypes.WIP.name() + "' )";
		}
		
		if(sort  == 1) {
			where += (where.isEmpty() ? " where " : " and ") + " sort = '" + shop_name + "' and shop_name not in ('Blocked', 'Loaded on Wagons' )  ";
		}else {
			where += (where.isEmpty() ? " where " : " and ") + " shop_name = '" + shop_name + "'  ";
		}
		return where;
	}
	
	
	private String buildSubQueryTotalAllWhereCondition(String productType , String shop_name, int sort) {
		String where = "";
		
		if(productType != null && !productType.isEmpty() ) {
//			where += (where.isEmpty() ? " where " : " and ") + " type = '" + productType + "'  ";
//		}else if(productType != null && !productType.isEmpty() && productType == "FREE") {
//			where += (where.isEmpty() ? " where " : " and ") + "  ( type != '" + StockTypes.FG.name() + "' and type !='"+ StockTypes.SEMIS.name() + "' "+ " and type !='"+ StockTypes.WIP.name() + "' )";
//		}else {
			where += (where.isEmpty() ? " where " : " and ") + " (type = '" + StockTypes.FG.name() + "' or type ='"+ StockTypes.SEMIS.name() + "' "+ " or type ='"+ StockTypes.WIP.name() + "' or type = 'FG at Port' or type = 'FG at CS' )";
		}
		
		if(sort  == 1) {
			where += (where.isEmpty() ? " where " : " and ") + " sort = '" + shop_name + "' and shop_name not in ('Blocked', 'Loaded on Wagons' )  ";
		}else {
			where += (where.isEmpty() ? " where " : " and ") + " shop_name = '" + shop_name + "'  ";
		}
		return where;
	}
	
	private String buildSubQueryGrandTotalAllWhereCondition(String productType ) {
		String where = "";
		
		if(productType != null && !productType.isEmpty() ) {
			where += (where.isEmpty() ? " where " : " and ") + " (type = '" + StockTypes.FG.name() + "' or type ='"+ StockTypes.SEMIS.name() + "' "+ " or type ='"+ StockTypes.WIP.name() + "' or type = 'FG at Port' or type = 'FG at CS' )";
		}

		
			where += (where.isEmpty() ? " where " : " and ") + " shop_name not in ('Blocked', 'Loaded on Wagons' )  ";
		return where;
	}
	
	private String buildSubQueryGrandTotalWhereCondition(String productType ) {
		String where = "";
		
		if(productType != null && !productType.isEmpty() && productType != "FREE") {
			where += (where.isEmpty() ? " where " : " and ") + " type = '" + productType + "'  ";
		}else if(productType != null && !productType.isEmpty() && productType == "FREE") {
			where += (where.isEmpty() ? " where " : " and ") + "  ( type != '" + StockTypes.FG.name() + "' and type !='"+ StockTypes.SEMIS.name() + "' "+ " and type !='"+ StockTypes.WIP.name() + "') ";
		}else {
			where += (where.isEmpty() ? " where " : " and ") + " (type = '" + StockTypes.FG.name() + "' or type ='"+ StockTypes.SEMIS.name() + "' "+ " or type ='"+ StockTypes.WIP.name() + "' )";
		}
		
			where += (where.isEmpty() ? " where " : " and ") + " shop_name not in ('Blocked', 'Loaded on Wagons' )  ";
		return where;
	}

	@Override
	public List<SPDto> fetchStockProduct(StockTypes stockType) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void uploadOCPStockData(MultipartFile file1, MultipartFile file2, MultipartFile file3) {
		try {
			if(file1 != null) {
				processFile(file1);
			}
		}catch (Exception e) {
			System.out.println(e.getMessage());
			throw e;
		}
	}

	private void processFile1(MultipartFile file1) {
		System.out.println("Start Excel read:"+LocalDateTime.now());
		Map<Class<?>, List<OCPStock>> map  = ExcelImportUtils.prepareStockData(file1, OCPStock.class);
		System.out.println("End Excel read:"+LocalDateTime.now());
		for(Map.Entry<Class<?>, List<OCPStock>> entry : map.entrySet()) {
			System.out.println(entry.getKey().getSimpleName()+":"+entry.getValue().get(0));
			if("OCPStockMRF".equalsIgnoreCase(entry.getKey().getSimpleName())) {
				List<OCPStockMRF> tList = new ArrayList<>();
				entry.getValue().forEach(obj->{
					tList.add((OCPStockMRF) obj);
				});
				System.out.println("Start Save MRF:"+LocalDateTime.now());
				//ocpStockMRFRepository.saveAll(tList);
				System.out.println("End Save MRF:"+LocalDateTime.now());
			} else if("OCPStockBPM".equalsIgnoreCase(entry.getKey().getSimpleName())) {
				List<OCPStockBPM> tList = new ArrayList<>();
				entry.getValue().forEach(obj->{
					tList.add((OCPStockBPM) obj);
				});
				System.out.println("Start Save BPM:"+LocalDateTime.now());
				//ocpStockBPMRepository.saveAll(tList);
				System.out.println("End Save BPM:"+LocalDateTime.now());
			}
		}
		
	}

	private void processFile(MultipartFile file1) {
		System.out.println("Start Excel read:" + LocalDateTime.now());
		Map<Class<?>, List<OCPStock>> map = ExcelImportUtils.prepareStockData(file1, OCPStock.class);
		System.out.println("End Excel read:" + LocalDateTime.now());
		Session session = (Session) entityManager.getDelegate();
		for (Map.Entry<Class<?>, List<OCPStock>> entry : map.entrySet()) {
			System.out.println(entry.getKey().getSimpleName() + ":" + entry.getValue().get(0));
			if ("OCPStockMRF".equalsIgnoreCase(entry.getKey().getSimpleName())) {
				System.out.println("Start Save MRF:" + LocalDateTime.now());
				insertMRFBatchRecords(entry.getValue(), session);
				System.out.println("End Save MRF:" + LocalDateTime.now());
			} else if ("OCPStockBPM".equalsIgnoreCase(entry.getKey().getSimpleName())) {
				System.out.println("Start Save BPM:" + LocalDateTime.now());
				insertBPMBatchRecords(entry.getValue(), session);
				System.out.println("End Save BPM:" + LocalDateTime.now());
			} else if ("OCPStockMBIndex".equalsIgnoreCase(entry.getKey().getSimpleName())) {
				System.out.println("Start Save MB Index:" + LocalDateTime.now());
				insertMBIndexBatchRecords(entry.getValue(), session);
				System.out.println("End Save MB Index:" + LocalDateTime.now());
			}
		}
		session.close();
	}
	
	private void insertMBIndexBatchRecords(List<OCPStock> entities, Session session) {
		Transaction tx = session.beginTransaction();
		session.doWork(new Work() {
			@Override
			public void execute(Connection connection) throws SQLException {
				
				removeExistingMBIndexData(connection);
				
				PreparedStatement pstmt = null;
				try {
					String sqlInsert = "insert into "+Constants.TB_OCP_STOCK_MB_INDEX_DEV+" (DATE_1, MONTH, MONTH_NO, YEAR, QTR, WEEK, HRC, CRC, BLACK_SEA, HRS, UPDATE_DATE) values (?,?,?,?,?,?,?,?,?,?,?) ";
					pstmt = connection.prepareStatement(sqlInsert);
					int i = 0;
					for (OCPStock ocpStock2 : entities) {
						OCPStockMBIndex ocpStock = (OCPStockMBIndex) ocpStock2;
						pstmt.setInt(1, ocpStock.getDate());
						pstmt.setString(2, ocpStock.getMonth());
						pstmt.setInt(3, ocpStock.getMonthNumber());
						pstmt.setInt(4, ocpStock.getYear());
						pstmt.setString(5, ocpStock.getQtr());
						pstmt.setString(6, ocpStock.getWeek());
						pstmt.setDouble(7, ocpStock.getHrc());
						pstmt.setDouble(8, ocpStock.getCrc());
						pstmt.setDouble(9, ocpStock.getBlackSea());
						pstmt.setDouble(10, ocpStock.getHrs());
						pstmt.setDate(11, new Date(new java.util.Date().getTime()));
						pstmt.addBatch();

						// 20 : JDBC batch size
						if (i % 100 == 0) {
							pstmt.executeBatch();
						}
						i++;
					}
					pstmt.executeBatch();
					tx.commit();
				}catch(Exception e) {
					tx.rollback();
					e.printStackTrace();
					throw e;
				} finally {
					if (pstmt != null) {
						pstmt.close();
					}
				}
			}
		});
		
	}
	
	private void removeExistingMBIndexData(Connection connection) throws SQLException {
		try (PreparedStatement pStmt = connection
				.prepareStatement("delete from " + Constants.TB_OCP_STOCK_MB_INDEX_DEV)) {
			pStmt.execute();
		} catch (SQLException e) {
			throw e;
		}
	}

	private void insertMRFBatchRecords(List<OCPStock> entities, Session session) {
		Transaction tx = session.beginTransaction();
		session.doWork(new Work() {
			@Override
			public void execute(Connection connection) throws SQLException {
				
				removeExistingMRFData(entities, connection);
				
				PreparedStatement pstmt = null;
				try {
					String sqlInsert = "insert into " + Constants.TB_OCP_STOCK_MB_MRF_DEV + " (D_CA,D_DP,D_CUSTOMER,D_PRODUCT,T7000,D_MARKET,NRP_CALCULATED_FILED,D_PE,"
							+ "D_RU,D_FL,D_AU,D_PA,D_CU,D_ANALYSIS3,QT7000) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
					pstmt = connection.prepareStatement(sqlInsert);
					int i = 0;
					for (OCPStock ocpStock2 : entities) {
						OCPStockMRF ocpStock = (OCPStockMRF) ocpStock2;
						pstmt.setString(1, ocpStock.getdCa());
						pstmt.setDate(2,
								ocpStock.getdDp() != null ? new java.sql.Date(ocpStock.getdDp().getTime()) : null);
						pstmt.setString(3, ocpStock.getdCustomer());
						pstmt.setString(4, ocpStock.getdProduct());
						//pstmt.setString(5, ocpStock.getProduct());
						pstmt.setDouble(5, ocpStock.getT7000());
						pstmt.setString(6, ocpStock.getdMarket());
						//pstmt.setString(7, ocpStock.getMarket());
						pstmt.setDouble(7, ocpStock.getNrp());
						pstmt.setString(8, ocpStock.getdPe());
						pstmt.setString(9, ocpStock.getdRu());
						pstmt.setString(10, ocpStock.getdFl());
						pstmt.setString(11, ocpStock.getdAu());
						pstmt.setString(12, ocpStock.getdPa());
						pstmt.setString(13, ocpStock.getdCu());
						pstmt.setString(14, ocpStock.getdAnalysis3());
						pstmt.setDouble(15, ocpStock.getQt7000());
						//pstmt.setDouble(16, ocpStock.getT7000());
						//pstmt.setDouble(17, ocpStock.getNrp());
						pstmt.addBatch();

						// 20 : JDBC batch size
						if (i % 100 == 0) {
							pstmt.executeBatch();
						}
						i++;
					}
					pstmt.executeBatch();
					tx.commit();
				}catch(Exception e) {
					tx.rollback();
					e.printStackTrace();
					throw e;
				} finally {
					if (pstmt != null) {
						pstmt.close();
					}
				}
			}
		});
	}
	
	private void removeExistingMRFData(List<OCPStock> data, Connection connection) throws SQLException {
		Set<String> keys = new HashSet<>();
		for(OCPStock stock : data) {
			OCPStockMRF obj = (OCPStockMRF) stock;
			String key = ("".equals(obj.getdCa()) ? null : obj.getdCa()) + "#" + ("".equals(obj.getdPe()) ? null : obj.getdPe());
			if(!keys.contains(key)) {
				keys.add(key);
			}
		}
		System.out.println(keys.size());
		PreparedStatement pStmt = null;
		try {
			pStmt = connection.prepareStatement(
					"delete from " + Constants.TB_OCP_STOCK_MB_MRF_DEV + " where (D_CA = ? or D_CA IS NULL) and (D_PE = ? or D_PE IS NULL)");
			int i=0;
			for (String key : keys) {
				String[] keyArr = key.split("#");
				int paramIndex = 0;
				for(int keyArrIndex = 0;keyArrIndex < keyArr.length;keyArrIndex++) {
					++paramIndex;
					pStmt.setString(paramIndex, keyArr[keyArrIndex]);
				}
				
				pStmt.addBatch();
				if (i % 100 == 0) {
					pStmt.executeBatch();
				}
				i++;
			}
			pStmt.executeBatch();
		}catch(Exception e) {
			e.printStackTrace();
			throw e;
		} finally {
			if (pStmt != null) {
				pStmt.close();
			}
		}
	}

	private void insertBPMBatchRecords(List<OCPStock> entities, Session session) {
		Transaction tx = session.beginTransaction();
		session.doWork(new Work() {
			@Override
			public void execute(Connection connection) throws SQLException {
				
				removeExistingBPMData(entities, connection);
				
				PreparedStatement pstmt = null;
				try {
					String sqlInsert = "insert into "+Constants.TB_OCP_STOCK_MB_BPM_DEV+" (D_CA,D_DP,D_CUSTOMER,D_PRODUCT,T7000,D_MARKET,NRP,D_PE,"
							+ "D_RU,D_FL,D_AU,D_PA,D_CU,D_ANALYSIS3,QT7000) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
					pstmt = connection.prepareStatement(sqlInsert);
					int i = 0;
					for (OCPStock ocpStock2 : entities) {
						OCPStockBPM ocpStock = (OCPStockBPM) ocpStock2;
						pstmt.setString(1, ocpStock.getdCa());
						pstmt.setDate(2,
								ocpStock.getdDp() != null ? new java.sql.Date(ocpStock.getdDp().getTime()) : null);
						pstmt.setString(3, ocpStock.getdCustomer());
						pstmt.setString(4, ocpStock.getdProduct());
						//pstmt.setString(5, ocpStock.getProduct());
						pstmt.setDouble(5, ocpStock.getT7000());
						pstmt.setString(6, ocpStock.getdMarket());
						//pstmt.setString(7, ocpStock.getMarket());
						pstmt.setDouble(7, ocpStock.getNrp());
						pstmt.setString(8, ocpStock.getdPe());
						pstmt.setString(9, ocpStock.getdRu());
						pstmt.setString(10, ocpStock.getdFl());
						pstmt.setString(11, ocpStock.getdAu());
						pstmt.setString(12, ocpStock.getdPa());
						pstmt.setString(13, ocpStock.getdCu());
						pstmt.setString(14, ocpStock.getdAnalysis3());
						pstmt.setDouble(15, ocpStock.getQt7000());
						//pstmt.setDouble(16, ocpStock.getT7000());
						//pstmt.setDouble(17, ocpStock.getNrp());
						pstmt.addBatch();

						// 20 : JDBC batch size
						if (i % 100 == 0) {
							pstmt.executeBatch();
						}
						i++;
					}
					pstmt.executeBatch();
					tx.commit();
				}catch(Exception e) {
					tx.rollback();
					e.printStackTrace();
					throw e;
				} finally {
					if (pstmt != null) {
						pstmt.close();
					}
				}
			}
		});
	}
	
	private void removeExistingBPMData(List<OCPStock> data, Connection connection) throws SQLException {
		Set<String> keys = new HashSet<>();
		for (OCPStock stock : data) {
			OCPStockBPM obj = (OCPStockBPM) stock;
			String key = ("".equals(obj.getdCa()) ? null : obj.getdCa()) + "#" + ("".equals(obj.getdPe()) ? null : obj.getdPe());
			if (!keys.contains(key)) {
				keys.add(key);
			}
		}
		System.out.println(keys.size());
		try (PreparedStatement pStmt = connection.prepareStatement(
				"delete from " + Constants.TB_OCP_STOCK_MB_BPM_DEV + " where D_CA = ? and D_PE = ?")) {
			int i=0;
			for (String key : keys) {
				String[] keyArr = key.split("#");
				int paramIndex = 0;
				for(int keyArrIndex = 0;keyArrIndex < keyArr.length;keyArrIndex++) {
					++paramIndex;
					pStmt.setString(paramIndex, keyArr[keyArrIndex]);
				}
				
				pStmt.addBatch();
				if (i % 100 == 0) {
					pStmt.executeBatch();
				}
				i++;
			}
			pStmt.executeBatch();
		} catch (SQLException e) {
			throw e;
		} 
	}

	@Override
	public OcpStockDto getOcpStockData() {
		OcpStockDto dto = new OcpStockDto();
		List<OCPStock> bpmData = getBPMData();
		List<OCPStock> mrfData = getMRFData();
		List<OCPStock> indexData = getMBIndexData();
		dto.setIndexData(indexData);
		dto.setBpmData(bpmData);
		dto.setMrfData(mrfData);
		return dto;
	}
	private List<OCPStock> getMBIndexData() {
		List<OCPStock> list = new ArrayList<>();
		Query query = entityManager.createNativeQuery("SELECT * FROM " + Constants.TB_OCP_STOCK_MB_INDEX_DEV).unwrap(NativeQuery.class);
		
		List<OCPStockMBIndex> data = query.getResultList();
		list.addAll(data);
		return list;
	}

	private List<OCPStock> getMBIndexData2() {
		List<OCPStock> list = new ArrayList<>();
		Query query = entityManager.createNativeQuery("SELECT DATE_1, MONTH, MONTH_NO, YEAR, QTR, WEEK, HRC, CRC, BLACK_SEA, HRS, UPDATE_DATE FROM " + Constants.TB_OCP_STOCK_MB_INDEX_DEV);
		List<Object[]> data = query.getResultList();
		for(Object[] row : data) {
			OCPStockMBIndex stock = new OCPStockMBIndex();
			stock.setDate((BigDecimal) row[0] != null ? ((BigDecimal) row[0]).intValue(): null);
			stock.setMonth((String) row[1]);
			stock.setMonthNumber((BigDecimal) row[2] != null ? ((BigDecimal) row[2]).intValue(): null);
			stock.setYear((BigDecimal) row[3] != null ? ((BigDecimal) row[3]).intValue(): null);
			stock.setQtr((String) row[4]);
			stock.setWeek((String) row[5]);
			stock.setHrc((BigDecimal) row[6]  != null ? ((BigDecimal) row[6]).doubleValue(): null);
			stock.setCrc((BigDecimal) row[7]  != null ? ((BigDecimal) row[7]).doubleValue(): null);
			stock.setBlackSea((BigDecimal) row[8] != null ? ((BigDecimal) row[8]).doubleValue(): null);
			stock.setHrs((BigDecimal) row[9] != null ? ((BigDecimal) row[9]).doubleValue(): null);
			stock.setUpdatedDate((java.util.Date) row[10]);
			list.add(stock);
		}
		return list;
	}
	
	private List<OCPStock> getMRFData() {
		List<OCPStock> list = new ArrayList<>();
		try {
			/*
			 * Query query = entityManager.
			 * createNativeQuery("SELECT ID,D_CA,D_DP,D_CUSTOMER,D_PRODUCT,PRODUCT,D_MARKET,MARKET,D_PE,"
			 * +
			 * "D_RU,D_FL,D_AU,D_PA,D_CU,D_ANALYSIS3,QT7000,T7000,NRP_CALCULATED_FILED FROM tb_ocp_stock_MB_MRF_dev"
			 * );
			 * 
			 * List<Object[]> data = query.getResultList(); for(Object[] row : data) {
			 * OCPStockMRF stock = new OCPStockMRF(); stock.setId((BigDecimal) row[0] ==
			 * null ? null : ((BigDecimal)row[0]).longValue()); stock.setdCa((String)
			 * row[1]); stock.setdDp((java.util.Date) row[2]); stock.setdCustomer((String)
			 * row[3]); stock.setdProduct((String) row[4]); stock.setProduct((String)
			 * row[5]); stock.setdMarket((String) row[6]); stock.setMarket((String) row[7]);
			 * stock.setdPe((BigDecimal) row[8] == null ? null : ((BigDecimal)
			 * row[8]).doubleValue()); stock.setdRu((String) row[9]); stock.setdFl((String)
			 * row[10]); stock.setdAu((String) row[11]); stock.setdPa((String) row[12]);
			 * stock.setdCu((String) row[13]); stock.setdAnalysis3((String) row[14]);
			 * stock.setQt7000((BigDecimal) row[15] == null ? null : ((BigDecimal)
			 * row[15]).doubleValue()); stock.setT7000((BigDecimal) row[16] == null ? null :
			 * ((BigDecimal) row[16]).doubleValue()); stock.setNrp((BigDecimal) row[17] ==
			 * null ? null : ((BigDecimal) row[17]).doubleValue()); list.add(stock); }
			 */
			List<OCPStockMRF> data = oCPStockMRFReportRepository.findAll();
			list.addAll(data);
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return list;
		
	}

	private List<OCPStock> getBPMData() {
		List<OCPStock> list = new ArrayList<>();
		try {
			/*
			 * Query query = entityManager.
			 * createNativeQuery("SELECT ID,D_CA,D_DP,D_CUSTOMER,D_PRODUCT,PRODUCT,D_MARKET,MARKET,D_PE,"
			 * +
			 * "D_RU,D_FL,D_AU,D_PA,D_CU,D_ANALYSIS3,QT7000,T7000,NRP FROM tb_ocp_stock_mb_bpm_dev"
			 * );
			 * 
			 * List<Object[]> data = query.getResultList(); for(Object[] row : data) {
			 * OCPStockBPM stock = new OCPStockBPM(); stock.setId((BigDecimal) row[0] ==
			 * null ? null : ((BigDecimal)row[0]).longValue()); stock.setdCa((String)
			 * row[1]); stock.setdDp((java.util.Date) row[2]); stock.setdCustomer((String)
			 * row[3]); stock.setdProduct((String) row[4]); stock.setProduct((String)
			 * row[5]); stock.setdMarket((String) row[6]); stock.setMarket((String) row[7]);
			 * stock.setdPe((BigDecimal) row[8] == null ? null : ((BigDecimal)
			 * row[8]).doubleValue()); stock.setdRu((String) row[9]); stock.setdFl((String)
			 * row[10]); stock.setdAu((String) row[11]); stock.setdPa((String) row[12]);
			 * stock.setdCu((String) row[13]); stock.setdAnalysis3((String) row[14]);
			 * stock.setQt7000((BigDecimal) row[15] == null ? null : ((BigDecimal)
			 * row[15]).doubleValue()); stock.setT7000((BigDecimal) row[16] == null ? null :
			 * ((BigDecimal) row[16]).doubleValue()); stock.setNrp((BigDecimal) row[17] ==
			 * null ? null : ((BigDecimal) row[17]).doubleValue()); list.add(stock); }
			 */
			List<OCPStockBPM> data = oCPStockBPMReportRepository.findAll();
			list.addAll(data);
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return list;
		
	}

}
