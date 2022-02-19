/**
 * 
 */
package com.otkaz.srv.utils.constants;

/**
 * @author sheen
 *
 */
public class StockReport {
	private static final String QUANTITY_COLUMN = "QUANTITY";
	private static final String PLANT = "PLANT";
	private static final String MAKTX = "MAKTX";
	private static final String SHOP_NAME = "SHOP_NAME";
	private static final String TYPE = "TYPE";
	private static final String PRODUCT = "PRODUCT";
	private static final String SORT = "SORT";
	private static final String REPORT_TABLE_NAME = "tb_stock_detailed_rpt";
	private static final int PRIME = 0;
	private static final int NON_PRIME = 1;

	
	public static String[] getAgeings() {
		String[] ageings = new String[10];
		ageings[0] = "HSM";
		ageings[1] = "CRM2";
		ageings[2] = "CRM3";
		ageings[3] = "Galva shops";
		ageings[4] = "Pipe mill";
		ageings[5] = "Rebar mill";
	//	ageings[6] = "Grand total";
	//	ageings[7] = "FreeforDespatch";
		ageings[6] = "Blocked";
		ageings[7] = "Prime";
		ageings[8] = "Non-Prime";
		ageings[9] = "Loaded on Wagons";
		//ageings[12] = "Grandtotal including loaded on wagon";ISNULL(SUM(ISNULL(QUANTITY, 0)), 0)
		
	
		return ageings;
	}
	
	public static String getFromAndJoinQuery() {
		return " from " + REPORT_TABLE_NAME + " orp ";
	}
	
	public static String getQuantitySumQuery() {
		
		return " select NVL(SUM(NVL(" + QUANTITY_COLUMN + ",0)),0) from " + REPORT_TABLE_NAME +"";
		
	}
}
