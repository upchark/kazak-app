package com.otkaz.srv.dto;

import java.io.Serializable;

import com.otkaz.srv.entity.ProductGroup;
import com.otkaz.srv.entity.ProductInv;
import com.otkaz.srv.projection.ProductGroupView;
import com.otkaz.srv.projection.ProductInvView;

public class ProductInvDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	private String name;
	
	private String product;
	
	private Long rank;
	public ProductInvDto() {
	}

	public ProductInvDto(ProductInv product) {
		this.id = product.getId();
		this.name = product.getMaktx();
		this.product = product.getName();
		this.rank = product.getRank();
	}

	public ProductInvDto(ProductInvView productView) {
		this.id = productView.getId();
		this.name = productView.getMaktx();
		this.product = productView.getName();
		this.rank = productView.getRank();
	}

	/**
	 * 
	 * @return the id
	 */
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


	public Long getRank() {
		return rank;
	}

	public void setRank(Long rank) {
		this.rank = rank;
	}

	/**
	 * @return the productGroup
	 */
	public String getProduct() {
		return product;
	}

	/**
	 * @param productGroup the productGroup to set
	 */
	public void setProduct(String productGroup) {
		this.product = productGroup;
	}

	
}
