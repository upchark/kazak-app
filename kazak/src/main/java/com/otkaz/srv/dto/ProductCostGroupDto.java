package com.otkaz.srv.dto;

import java.io.Serializable;

import com.otkaz.srv.entity.Product;
import com.otkaz.srv.projection.ProductCostGroupView;
import com.otkaz.srv.projection.ProductView;

public class ProductCostGroupDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	private String name;
	


	public ProductCostGroupDto() {
	}


	public ProductCostGroupDto(ProductCostGroupView productView) {
		this.id = productView.getId();
		this.name = productView.getName();
	}


	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}


	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
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

	
}
