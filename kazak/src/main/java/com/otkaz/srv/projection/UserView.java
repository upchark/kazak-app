package com.otkaz.srv.projection;

public interface UserView {
	
	Long getId();
	
	String getCode();
	
	String getName();
	
	String getNumberValue();

	String getEmail();

	String getPassword();
	
	String getFax();
	
	String getMobile();
	
	String getPhone();
	
	String getRole();
	
	short getActive();
	
	short getActivated();
}
