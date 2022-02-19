package com.otkaz.srv.utils.constants;

public class Zayvkas {
	
	private static final String VOLUME_COL = "prod_volume";
	
	private static final String AMOUNT_COL = "Amount_in_USD";
	
	private static final String PRODUCT_TABLE_NAME = "TB_OCP_PRODUCTS";
	
	private static final String REPORT_TABLE_NAME = "TB_ORDER_F079_REPORT";
	
	public static String getFromAndJoinQuery() {
		return " from " + REPORT_TABLE_NAME + " orp ";
	}
	
	public static String getVolumeSumQuery() {
		return " select SUM(" + VOLUME_COL + ") from " + REPORT_TABLE_NAME;
	}
	
	public static String getAmountSumQuery() {
		return " select SUM(" + AMOUNT_COL + ")"
				+ " / "
				+ "	(case when SUM(" + VOLUME_COL + ") = 0 or SUM(" + VOLUME_COL + ") is null "
				+ " then 1 "
				+ " else SUM(" + VOLUME_COL + ") end) "
				+ " from " + REPORT_TABLE_NAME;
	}
	
	public static String getAmountSumTotalQuery() {
		return " select SUM(" + AMOUNT_COL + ")"
				+ " from " + REPORT_TABLE_NAME;
	}
}
