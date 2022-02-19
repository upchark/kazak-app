package com.otkaz.srv.projection;

import java.util.Date;

public interface WipMasterView {

	Long getId();
	
	String getProduct();
	
	String getProduct_type();
	
	Long getQuantity();
	
	Date getEntry_date();
}
