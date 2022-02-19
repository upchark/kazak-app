package com.otkaz.srv.projection;

import java.math.BigDecimal;

public interface OPView {
	
	String getProduct();
	
	BigDecimal getVolume1();
	
	BigDecimal getAmount1();
	
	BigDecimal getVolume2();
	
	BigDecimal getAmount2();
	
	BigDecimal getVolume3();
	
	BigDecimal getAmount3();
	
	BigDecimal getVolume4();
	
	BigDecimal getAmount4();
	
	BigDecimal getTotalVolume();
	
	BigDecimal getTotalAmount(); 
}
