package com.otkaz.srv.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.otkaz.srv.entity.OCPStockProduct;
import com.otkaz.srv.projection.OCPStockProductView;

public class OCPStockProductDto extends BaseDto{
	
	private Long id;
	
	@JsonProperty("product_id")
	private String productId;
	
	private String code;
	
	private String name;
	
	private int order;
	
	public OCPStockProductDto() {}
	public OCPStockProductDto(OCPStockProduct entity) {
		this.id = entity.getId();
		this.productId = entity.getProductId();
		this.name = entity.getName();
		this.code = entity.getCode();
		this.order = entity.getOrder();
	}

	public OCPStockProductDto(OCPStockProductView item) {
		this.id = item.getId();
		this.productId = item.getProductId();
		this.name = item.getName();
		this.code = item.getCode();
		this.order = item.getProductOrder();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getOrder() {
		return order;
	}
	public void setOrder(int order) {
		this.order = order;
	}
	@Override
	public String toString() {
		return "StockProductDto [productId=" + productId + ", code=" + code + ", name=" + name + "]";
	}
	
}
