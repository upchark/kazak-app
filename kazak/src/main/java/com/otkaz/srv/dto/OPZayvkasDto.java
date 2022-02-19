package com.otkaz.srv.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import com.otkaz.srv.projection.OPZayvkasView;

public class OPZayvkasDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String product;
	
	private BigDecimal totalVolume;
	
	private BigDecimal totalAmount;

	public OPZayvkasDto() {
	}

	public OPZayvkasDto(OPZayvkasView opView) {
		this.product = opView.getProduct();
		this.totalVolume = opView.getTotalVolume();
		this.totalAmount = opView.getTotalAmount();
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public BigDecimal getTotalVolume() {
		return totalVolume;
	}

	public void setTotalVolume(BigDecimal totalVolume) {
		this.totalVolume = totalVolume;
	}

	public BigDecimal getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(BigDecimal totalAmount) {
		this.totalAmount = totalAmount;
	}

}
