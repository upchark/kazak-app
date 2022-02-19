package com.otkaz.srv.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.otkaz.srv.entity.listeners.EntityListener;

@Entity
@Table(name = "TB_OCP_STOCK_ENTRY")
@EntityListeners(EntityListener.class)
public class Wip {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id", updatable=false)
	private Long id;
	
	private String product_type;
	
	private String product;
	
	private Long quantity;
	
	private Date entry_date;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
	
	public String getProduct_type() {
		return product_type;
	}

	public void setProduct_type(String product_type) {
		this.product_type = product_type;
	}

	public Date getEntry_date() {
		return entry_date;
	}

	public void setEntry_date(Date entry_date) {
		this.entry_date = entry_date;
	}

	
}
