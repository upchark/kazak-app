package com.otkaz.srv.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.otkaz.srv.entity.listeners.EntityListener;

@Entity
@Table(name = "TB_ORDER_F176_REPORT")
@EntityListeners(EntityListener.class)
public class OrderReport {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY,generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "guid")
	@Column(name = "Table_ID")
	private Long id;

	@Column(name = "ORDER_DATE")
	private String orderDate;

	@Column(name = "REGION")
	private String region;

	@Column(name = "PRODUCT")
	private String product;

	@Column(name = "AGEING")
	private String adminCode;

	@Column(name = "VOLUME")
	private Float volume;

	@Column(name = "AMOUNT")
	private Float amount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getAdminCode() {
		return adminCode;
	}

	public void setAdminCode(String adminCode) {
		this.adminCode = adminCode;
	}

	public Float getVolume() {
		return volume;
	}

	public void setVolume(Float volume) {
		this.volume = volume;
	}

	public Float getAmount() {
		return amount;
	}

	public void setAmount(Float amount) {
		this.amount = amount;
	}
}
