package com.otkaz.srv.dto;

public class CreateProductGroupDto {
	
	private String name;
	
	private String productGroup;

	public CreateProductGroupDto() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProductGroup() {
		return productGroup;
	}

	public void setType(String productGroup) {
		this.productGroup = productGroup;
	}

}
