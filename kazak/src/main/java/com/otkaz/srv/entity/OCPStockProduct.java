package com.otkaz.srv.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.otkaz.srv.dto.OCPStockProductDto;

@Entity
@Table(name = "TB_OCP_STOCK_MB_PRODUCT_DEV")
public class OCPStockProduct {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "D_PRODUCT")
	private String productId;
	
	@Column(name = "PROD_SIMPLIFIED")
	private String code;
	
	@Column(name = "PRODUCT_2")
	private String name;

	@Column(name = "PRODUCT_SORT")
	private Integer order;
	
	public OCPStockProduct() {}
	public OCPStockProduct(OCPStockProductDto dto) {
		this.id = dto.getId();
		this.productId = dto.getProductId();
		this.name = dto.getName();
		this.code = dto.getCode();
		this.order = dto.getOrder();
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
	public Integer getOrder() {
		return order;
	}
	public void setOrder(Integer order) {
		this.order = order;
	}

}
