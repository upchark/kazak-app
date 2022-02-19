package com.otkaz.srv.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import com.otkaz.srv.entity.listeners.EntityListener;

@Entity
@Table(name = "TB_OCP_PRODUCTS_COSTS")
@EntityListeners(EntityListener.class)
public class ProductCost {

	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id", updatable=false)
	private Long id;

	@OneToOne(targetEntity = Product.class, fetch = FetchType.LAZY)
	@NotFound(action = NotFoundAction.IGNORE)
	@JoinColumn(name = "productid")
	private Product product;
	
	private Integer year;
	
	private String month;

	@Column(name="fixedcost")
	private Float fixedCost;

	@Column(name="variablecost")
	private Float variableCost;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
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
