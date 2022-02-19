package com.otkaz.srv.dto;

import com.otkaz.srv.projection.CustomerView;

public class CustomerDto {
	
	private String name;
	
	private String code;

	public CustomerDto() {
	}

	public CustomerDto(CustomerView customerView) {
		this.name = customerView.getName();
		this.code = customerView.getCode();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

}
