package com.otkaz.srv.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import com.otkaz.srv.projection.SalesItemView;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SalesItemDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String name;
	
	private Integer level;
	
	private Boolean subRow;
	
	private BigDecimal netVolume;
	
	private BigDecimal exwUsdPerTon;
	
	private BigDecimal exwAmountInMillion;
	
	private BigDecimal contributionUsdPerTon;
	
	private BigDecimal contributionAmountInMillion;
	
	private BigDecimal vatAmountInMillion;
	
	private BigDecimal grossNetOfVat;

	public SalesItemDto() {
	}

	public SalesItemDto(SalesItemView salesItemView) {
		this.name = salesItemView.getName();
		this.netVolume = salesItemView.getNetVolume();
		this.exwUsdPerTon = salesItemView.getExwUsdPerTon();
		this.exwAmountInMillion = salesItemView.getExwAmountInMillion();
		this.contributionUsdPerTon = salesItemView.getContributionUsdPerTon();
		this.contributionAmountInMillion = salesItemView.getContributionAmountInMillion();
		this.vatAmountInMillion = salesItemView.getVatAmountInMillion();
		this.grossNetOfVat = salesItemView.getGrossNetOfVat();
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the level
	 */
	public Integer getLevel() {
		return level;
	}

	/**
	 * @param level the level to set
	 */
	public void setLevel(Integer level) {
		this.level = level;
	}

	/**
	 * @return the subRow
	 */
	public Boolean getSubRow() {
		return subRow;
	}

	/**
	 * @param subRow the subRow to set
	 */
	public void setSubRow(Boolean subRow) {
		this.subRow = subRow;
	}

	/**
	 * @return the netVolume
	 */
	public BigDecimal getNetVolume() {
		return netVolume;
	}

	/**
	 * @param netVolume the netVolume to set
	 */
	public void setNetVolume(BigDecimal netVolume) {
		this.netVolume = netVolume;
	}

	/**
	 * @return the exwUsdPerTon
	 */
	public BigDecimal getExwUsdPerTon() {
		return exwUsdPerTon;
	}

	/**
	 * @param exwUsdPerTon the exwUsdPerTon to set
	 */
	public void setExwUsdPerTon(BigDecimal exwUsdPerTon) {
		this.exwUsdPerTon = exwUsdPerTon;
	}

	/**
	 * @return the exwAmountInMillion
	 */
	public BigDecimal getExwAmountInMillion() {
		return exwAmountInMillion;
	}

	/**
	 * @param exwAmountInMillion the exwAmountInMillion to set
	 */
	public void setExwAmountInMillion(BigDecimal exwAmountInMillion) {
		this.exwAmountInMillion = exwAmountInMillion;
	}

	/**
	 * @return the contributionUsdPerTon
	 */
	public BigDecimal getContributionUsdPerTon() {
		return contributionUsdPerTon;
	}

	/**
	 * @param contributionUsdPerTon the contributionUsdPerTon to set
	 */
	public void setContributionUsdPerTon(BigDecimal contributionUsdPerTon) {
		this.contributionUsdPerTon = contributionUsdPerTon;
	}

	/**
	 * @return the contributionAmountInMillion
	 */
	public BigDecimal getContributionAmountInMillion() {
		return contributionAmountInMillion;
	}

	/**
	 * @param contributionAmountInMillion the contributionAmountInMillion to set
	 */
	public void setContributionAmountInMillion(BigDecimal contributionAmountInMillion) {
		this.contributionAmountInMillion = contributionAmountInMillion;
	}

	/**
	 * @return the vatAmountInMillion
	 */
	public BigDecimal getVatAmountInMillion() {
		return vatAmountInMillion;
	}

	/**
	 * @param vatAmountInMillion the vatAmountInMillion to set
	 */
	public void setVatAmountInMillion(BigDecimal vatAmountInMillion) {
		this.vatAmountInMillion = vatAmountInMillion;
	}

	/**
	 * @return the grossNetOfVat
	 */
	public BigDecimal getGrossNetOfVat() {
		return grossNetOfVat;
	}

	/**
	 * @param grossNetOfVat the grossNetOfVat to set
	 */
	public void setGrossNetOfVat(BigDecimal grossNetOfVat) {
		this.grossNetOfVat = grossNetOfVat;
	}

	/**
	 * @return the serialversionuid
	 */
	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	
}
