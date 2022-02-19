package com.otkaz.srv.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.otkaz.srv.entity.ProductCost;
import com.otkaz.srv.projection.ProductCostView;

public class ProductCostDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	@JsonProperty(value = "productId")
	private Long productId;

	@JsonProperty(value = "productName")
	private String productName;

//	@JsonProperty(value = "productType")
//	private String productType;

	@JsonProperty(value = "productRank")
	private Long productRank;
	
	private Integer year;
	
	private String month;

	@JsonProperty(value = "fixedCost")
	private Float fixedCost;

	@JsonProperty(value = "variableCost")
	private Float variableCost;

	public ProductCostDto() {
	}

	public ProductCostDto(ProductCost productCost) {
		this.id = productCost.getId();
		this.productId = productCost.getProduct() != null ? productCost.getProduct().getId() : null;
		this.productName = productCost.getProduct() != null ? productCost.getProduct().getName() : null;
//		this.productType = productCost.getProduct() != null ? productCost.getProduct().getType() : null;
		this.productRank = productCost.getProduct() != null ? productCost.getProduct().getRank() : null;
		this.year = productCost.getYear();
		this.month = productCost.getMonth();
		this.fixedCost = productCost.getFixedCost();
		this.variableCost = productCost.getVariableCost();
	}

	public ProductCostDto(ProductCostView productCostView) {
		this.id = productCostView.getId();
		this.productId = productCostView.getProductId();
		this.productName = productCostView.getProductName();
//		this.productType = productCostView.getProductType();
		this.productRank = productCostView.getProductRank();
		this.year = productCostView.getYear();
		this.month = productCostView.getMonth();
		this.fixedCost = productCostView.getFixedCost();
		this.variableCost = productCostView.getVariableCost();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

//	public String getProductType() {
//		return productType;
//	}
//
//	public void setProductType(String productType) {
//		this.productType = productType;
//	}

	public Long getProductRank() {
		return productRank;
	}

	public void setProductRank(Long productRank) {
		this.productRank = productRank;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public Float getFixedCost() {
		return fixedCost;
	}

	public void setFixedCost(Float fixedCost) {
		this.fixedCost = fixedCost;
	}

	public Float getVariableCost() {
		return variableCost;
	}

	public void setVariableCost(Float variableCost) {
		this.variableCost = variableCost;
	}

}
