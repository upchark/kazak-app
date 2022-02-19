package com.otkaz.srv.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import com.otkaz.srv.projection.SalesPivotItemView;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SalesPivotItemDto extends BaseDto implements Serializable {

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
	
	private BigDecimal exwUsdPerTon;
	
	private BigDecimal exwAmountInMillion;
	
	private BigDecimal contributionUsdPerTon;
	
	private BigDecimal contributionAmountInMillion;
	
	private BigDecimal vatAmountInMillion;
	
	private BigDecimal grossNetOfVat;

	public SalesPivotItemDto() {
	}

	public SalesPivotItemDto(SalesPivotItemView salesPivotItemView) {
		this.level1 = salesPivotItemView.getLevel1();
		this.level2 = salesPivotItemView.getLevel2();
		this.level3 = salesPivotItemView.getLevel3();
		this.level4 = salesPivotItemView.getLevel4();
		this.level5 = salesPivotItemView.getLevel5();
		this.netVolume = salesPivotItemView.getNetVolume();
		this.exwUsdPerTon = salesPivotItemView.getExwUsdPerTon();
		this.exwAmountInMillion = salesPivotItemView.getExwAmountInMillion();
		this.contributionUsdPerTon = salesPivotItemView.getContributionUsdPerTon();
		this.contributionAmountInMillion = salesPivotItemView.getContributionAmountInMillion();
		this.vatAmountInMillion = salesPivotItemView.getVatAmountInMillion();
		this.grossNetOfVat = salesPivotItemView.getGrossNetOfVat();
	}
	
	public SalesPivotItemDto(Object[] result) {
		super();
		this.level1 = (String) result[0];
		this.level2 = "";
		this.level3 = "";
		this.level4 = "";
		this.netVolume = (BigDecimal) result[1];
		this.exwUsdPerTon = (BigDecimal) result[2];
		this.exwAmountInMillion = (BigDecimal) result[3];
		this.contributionUsdPerTon = (BigDecimal) result[4];
		this.contributionAmountInMillion = (BigDecimal) result[5];
		this.vatAmountInMillion = (BigDecimal) result[6];
		this.grossNetOfVat = (BigDecimal) result[7];
	}

}
