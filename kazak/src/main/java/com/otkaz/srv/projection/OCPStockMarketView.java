package com.otkaz.srv.projection;

public interface OCPStockMarketView {
	
	Long getId();
	
	String getMarketId();
	
	String getCode();
	
	String getName();
	
	Integer getMarketOrder();
}
