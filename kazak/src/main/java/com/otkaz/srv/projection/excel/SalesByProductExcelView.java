package com.otkaz.srv.projection.excel;

public interface SalesByProductExcelView {
	
	String getProduct();
	
	String getPrime();
	
	Double getNetVolume();
	
	Double getExwUsdPerTon();
	
	Double getExwAmountInMillion();
	
	Double getContributionUsdPerTon();
	
	Double getContributionAmountInMillion();
	
	Double getVatAmountInMillion();
	
	Double getGrossNetOfVat();
}
