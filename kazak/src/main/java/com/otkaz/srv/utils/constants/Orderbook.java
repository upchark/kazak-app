package com.otkaz.srv.utils.constants;

public class Orderbook {
	
	private static final String VOLUME_COL = "volume";
	
	private static final String AMOUNT_COL = "Amount_in_USD";
	
	private static final String PRODUCT_TABLE_NAME = "TB_OCP_PRODUCTS";
	
	private static final String REPORT_TABLE_NAME = "TB_ORDER_F176_REPORT";
	
	public static String[] getAgeings() {
		String[] ageings = new String[4];
		ageings[0] = "0-30 days";
		ageings[1] = "31-60 days";
		ageings[2] = "61-90 days";
		ageings[3] = ">90 days";
		return ageings;
	}
	
	public static String getFromAndJoinQuery() {
		return " from " + REPORT_TABLE_NAME+ " orp ";
		//return " from " + PRODUCT_TABLE_NAME;// + " p left join " + REPORT_TABLE_NAME + " orp on p.name = orp.PRODUCT "; ISNULL(SUM(ISNULL(QUANTITY, 0)), 0)
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
