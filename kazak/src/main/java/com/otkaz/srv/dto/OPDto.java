package com.otkaz.srv.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import com.otkaz.srv.projection.OPView;

public class OPDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String product;
	
	private String type;
	
	private BigDecimal volume1;
	
	private BigDecimal amount1;
	
	private BigDecimal volume2;
	
	private BigDecimal amount2;
	
	private BigDecimal volume3;
	
	private BigDecimal amount3;
	
	private BigDecimal volume4;
	
	private BigDecimal amount4;
	
	private BigDecimal totalVolume;
	
	private BigDecimal totalAmount;

	public OPDto() {
	}

	public OPDto(OPView opView) {
		this.product = opView.getProduct();
		this.volume1 = opView.getVolume1();
		this.amount1 = opView.getAmount1();
		this.volume2 = opView.getVolume2();
		this.amount2 = opView.getAmount2();
		this.volume3 = opView.getVolume3();
		this.amount3 = opView.getAmount3();
		this.volume4 = opView.getVolume4();
		this.amount4 = opView.getAmount4();
		this.totalVolume = opView.getTotalVolume();
		this.totalAmount = opView.getTotalAmount();
	}

	/**
	 * @return the product
	 */
	public String getProduct() {
		return product;
	}

	/**
	 * @param product the product to set
	 */
	public void setProduct(String product) {
		this.product = product;
	}

	/**
	 * @return the volume1
	 */
	public BigDecimal getVolume1() {
		return volume1;
	}

	/**
	 * @param volume1 the volume1 to set
	 */
	public void setVolume1(BigDecimal volume1) {
		this.volume1 = volume1;
	}

	/**
	 * @return the amount1
	 */
	public BigDecimal getAmount1() {
		return amount1;
	}

	/**
	 * @param amount1 the amount1 to set
	 */
	public void setAmount1(BigDecimal amount1) {
		this.amount1 = amount1;
	}

	/**
	 * @return the volume2
	 */
	public BigDecimal getVolume2() {
		return volume2;
	}

	/**
	 * @param volume2 the volume2 to set
	 */
	public void setVolume2(BigDecimal volume2) {
		this.volume2 = volume2;
	}

	/**
	 * @return the amount2
	 */
	public BigDecimal getAmount2() {
		return amount2;
	}

	/**
	 * @param amount2 the amount2 to set
	 */
	public void setAmount2(BigDecimal amount2) {
		this.amount2 = amount2;
	}

	/**
	 * @return the volume3
	 */
	public BigDecimal getVolume3() {
		return volume3;
	}

	/**
	 * @param volume3 the volume3 to set
	 */
	public void setVolume3(BigDecimal volume3) {
		this.volume3 = volume3;
	}

	/**
	 * @return the amount3
	 */
	public BigDecimal getAmount3() {
		return amount3;
	}

	/**
	 * @param amount3 the amount3 to set
	 */
	public void setAmount3(BigDecimal amount3) {
		this.amount3 = amount3;
	}

	/**
	 * @return the volume4
	 */
	public BigDecimal getVolume4() {
		return volume4;
	}

	/**
	 * @param volume4 the volume4 to set
	 */
	public void setVolume4(BigDecimal volume4) {
		this.volume4 = volume4;
	}

	/**
	 * @return the amount4
	 */
	public BigDecimal getAmount4() {
		return amount4;
	}

	/**
	 * @param amount4 the amount4 to set
	 */
	public void setAmount4(BigDecimal amount4) {
		this.amount4 = amount4;
	}

	/**
	 * @return the totalVolume
	 */
	public BigDecimal getTotalVolume() {
		return totalVolume;
	}

	/**
	 * @param totalVolume the totalVolume to set
	 */
	public void setTotalVolume(BigDecimal totalVolume) {
		this.totalVolume = totalVolume;
	}

	/**
	 * @return the totalAmount
	 */
	public BigDecimal getTotalAmount() {
		return totalAmount;
	}

	/**
	 * @param totalAmount the totalAmount to set
	 */
	public void setTotalAmount(BigDecimal totalAmount) {
		this.totalAmount = totalAmount;
	}

	/**
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}



}
