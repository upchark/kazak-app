package com.otkaz.srv.projection;

public interface ProductCostView {
	
	Long getId();
	
	Long getProductId();
	
	String getProductName();
	
	//String getProductType();
	
	Long getProductRank();
	
	Integer getYear();

	String getMonth();
	
	Float getFixedCost();

	Float getVariableCost();
}
