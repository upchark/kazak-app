package com.otkaz.srv.dto;

public class CreateProductInvDto {
	
	private String name;
	
	private String productGroup;

	public CreateProductInvDto() {
	}

	
	
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}



	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}



	/**
	 * @return the productGroupInv
	 */
	public String getProductGroup() {
		return productGroup;
	}

	/**
	 * @param productGroupInv the productGroupInv to set
	 */
	public void setProductGroup(String productGroup) {
		this.productGroup = productGroup;
	}


	

}
