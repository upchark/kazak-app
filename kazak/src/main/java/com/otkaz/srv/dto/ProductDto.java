package com.otkaz.srv.dto;

import java.io.Serializable;

import com.otkaz.srv.entity.Product;
import com.otkaz.srv.projection.ProductView;

public class ProductDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	private String name;
	
	private String type;
	
	private Long rank;

	public ProductDto() {
	}

	public ProductDto(Product product) {
		this.id = product.getId();
		this.name = product.getName();
		this.type = product.getType();
		this.rank = product.getRank();
	}

	public ProductDto(ProductView productView) {
		this.id = productView.getId();
		this.name = productView.getName();
		this.type = productView.getType();
		this.rank = productView.getRank();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Long getRank() {
		return rank;
	}

	public void setRank(Long rank) {
		this.rank = rank;
	}

}
