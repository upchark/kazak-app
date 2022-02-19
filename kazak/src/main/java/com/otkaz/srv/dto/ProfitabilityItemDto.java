/**
 * 
 */
package com.otkaz.srv.dto;

import java.math.BigDecimal;

import com.otkaz.srv.projection.ProfitabilityItemView;

import lombok.Getter;
import lombok.Setter;

/**
 * @author sheen
 *
 */
@Getter
@Setter
public class ProfitabilityItemDto {

	private String name;
	
	private Integer level;
	
	private Boolean subRow;
	
	private BigDecimal netVolume;
	
	private BigDecimal nrpUsdPerTon;
	
	private BigDecimal nrpAmountInMillion;
	
	private BigDecimal contributionUsdPerTon;
	
	private BigDecimal contributionAmountInMillion;
 
	private BigDecimal ebitdaUsdPerTon;
	
	private BigDecimal ebitdaAmountInMillion;
	
	/**
	 * 
	 */
	public ProfitabilityItemDto() {
	}
	
	public ProfitabilityItemDto(ProfitabilityItemView profitabilityItemView) {
		super();
		this.name = profitabilityItemView.getName();
		this.netVolume = profitabilityItemView.getNetVolume();
		this.nrpUsdPerTon = profitabilityItemView.getNrpUsdPerTon();
		this.nrpAmountInMillion = profitabilityItemView.getNrpAmountInMillion();
		this.contributionUsdPerTon = profitabilityItemView.getContributionUsdPerTon();
		this.contributionAmountInMillion = profitabilityItemView.getContributionAmountInMillion();
		this.ebitdaUsdPerTon = profitabilityItemView.getEbitdaUsdPerTon();
		this.ebitdaAmountInMillion = profitabilityItemView.getEbitdaAmountInMillion();
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
	 * @return the nrpUsdPerTon
	 */
	public BigDecimal getNrpUsdPerTon() {
		return nrpUsdPerTon;
	}

	/**
	 * @param nrpUsdPerTon the nrpUsdPerTon to set
	 */
	public void setNrpUsdPerTon(BigDecimal nrpUsdPerTon) {
		this.nrpUsdPerTon = nrpUsdPerTon;
	}

	/**
	 * @return the nrpAmountInMillion
	 */
	public BigDecimal getNrpAmountInMillion() {
		return nrpAmountInMillion;
	}

	/**
	 * @param nrpAmountInMillion the nrpAmountInMillion to set
	 */
	public void setNrpAmountInMillion(BigDecimal nrpAmountInMillion) {
		this.nrpAmountInMillion = nrpAmountInMillion;
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
	 * @return the ebitdaUsdPerTon
	 */
	public BigDecimal getEbitdaUsdPerTon() {
		return ebitdaUsdPerTon;
	}

	/**
	 * @param ebitdaUsdPerTon the ebitdaUsdPerTon to set
	 */
	public void setEbitdaUsdPerTon(BigDecimal ebitdaUsdPerTon) {
		this.ebitdaUsdPerTon = ebitdaUsdPerTon;
	}

	/**
	 * @return the ebitdaAmountInMillion
	 */
	public BigDecimal getEbitdaAmountInMillion() {
		return ebitdaAmountInMillion;
	}

	/**
	 * @param ebitdaAmountInMillion the ebitdaAmountInMillion to set
	 */
	public void setEbitdaAmountInMillion(BigDecimal ebitdaAmountInMillion) {
		this.ebitdaAmountInMillion = ebitdaAmountInMillion;
	}
	

}
