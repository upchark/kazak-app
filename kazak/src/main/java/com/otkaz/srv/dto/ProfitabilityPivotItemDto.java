/**
 * 
 */
package com.otkaz.srv.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import com.otkaz.srv.projection.ProfitabilityPivotItemView;

import lombok.Getter;
import lombok.Setter;

/**
 * @author sheen
 *
 */
@Getter
@Setter
public class ProfitabilityPivotItemDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String level1;

	private String level2;

	private String level3;

	private String level4;

	private String level5;

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
	public ProfitabilityPivotItemDto() {

	}

	public ProfitabilityPivotItemDto(ProfitabilityPivotItemView profitabilityPivotItemView) {
		super();
		this.level1 = profitabilityPivotItemView.getLevel1();
		this.level2 = profitabilityPivotItemView.getLevel2();
		this.level3 = profitabilityPivotItemView.getLevel3();
		this.level4 = profitabilityPivotItemView.getLevel4();
		this.level5 = profitabilityPivotItemView.getLevel5();
		this.netVolume = profitabilityPivotItemView.getNetVolume();
		this.nrpUsdPerTon = profitabilityPivotItemView.getNrpUsdPerTon();
		this.nrpAmountInMillion = profitabilityPivotItemView.getNrpAmountInMillion();
		this.contributionUsdPerTon = profitabilityPivotItemView.getContributionUsdPerTon();
		this.contributionAmountInMillion = profitabilityPivotItemView.getContributionAmountInMillion();
		this.ebitdaUsdPerTon = profitabilityPivotItemView.getEbitdaUsdPerTon();
		this.ebitdaAmountInMillion = profitabilityPivotItemView.getContributionAmountInMillion();

	}

	public ProfitabilityPivotItemDto(Object[] result) {
		super();
		this.level1 = (String) result[0];
		this.level2 = (String) result[1];
		this.level3 = (String) result[2];
		this.level4 = (String) result[3];
		this.netVolume = (BigDecimal) result[4];
		this.nrpUsdPerTon = (BigDecimal) result[5];
		this.nrpAmountInMillion = (BigDecimal) result[6];
		this.contributionUsdPerTon = (BigDecimal) result[7];
		this.contributionAmountInMillion = (BigDecimal) result[8];
		this.ebitdaUsdPerTon = (BigDecimal) result[9];
		this.ebitdaAmountInMillion = (BigDecimal) result[10];
	}

}
