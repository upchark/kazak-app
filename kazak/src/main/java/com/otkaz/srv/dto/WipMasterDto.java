package com.otkaz.srv.dto;


import java.io.Serializable;
import java.util.Date;

import com.otkaz.srv.entity.Wip;
import com.otkaz.srv.projection.WipMasterView;


public class WipMasterDto extends BaseDto implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	private String product_type;
	
	private String product;
	
	private Long quantity;
	
	private Date entry_date;
	

	public WipMasterDto() {
	}

	public WipMasterDto(Wip wip) {
		this.id = wip.getId();
		this.product_type = wip.getProduct_type();
		this.quantity = wip.getQuantity();
		this.product = wip.getProduct();
		this.entry_date = wip.getEntry_date();
	}
	
	public WipMasterDto(WipMasterView wipView) {
		this.id = wipView.getId();
		this.product_type = wipView.getProduct_type();
		this.quantity = wipView.getQuantity();
		this.product = wipView.getProduct();
		this.entry_date = wipView.getEntry_date();
	}

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	

	public String getProduct_type() {
		return product_type;
	}

	public void setProduct_type(String product_type) {
		this.product_type = product_type;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public Date getEntry_date() {
		return entry_date;
	}

	public void setEntry_date(Date entry_date) {
		this.entry_date = entry_date;
	}

	
}
