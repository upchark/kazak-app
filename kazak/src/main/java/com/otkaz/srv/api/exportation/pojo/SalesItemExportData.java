package com.otkaz.srv.api.exportation.pojo;

import java.math.BigDecimal;

import com.otkaz.srv.api.exportation.annotation.ExcelBindByName;
import com.otkaz.srv.dto.SalesPivotItemDto;
import com.otkaz.srv.projection.SalesItemView;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Author Anish
 * @Date 26-Aug-2021
 *
 */
@Getter
@Setter
@ToString
public class SalesItemExportData implements ExportData {

	private String level1Name;

	private String level2Name;

	private String level3Name;

	private String level4Name;

	private int levelIndex;

	private int sortOrder;

	@ExcelBindByName(name = "Net Volume", methodName = "getNetVolume", position = 0)
	private BigDecimal netVolume;

	@ExcelBindByName(name = "EXW $/T", methodName = "getExwUsdPerTon", position = 1)
	private BigDecimal exwUsdPerTon;

	@ExcelBindByName(name = "EXW Amount", methodName = "getExwAmountInMillion", position = 2)
	private BigDecimal exwAmountInMillion;

	@ExcelBindByName(name = "VAT Amount", methodName = "getVatAmountInMillion", position = 3)
	private BigDecimal vatAmountInMillion;

	@ExcelBindByName(name = "Gross Net Of Vat", methodName = "getGrossNetOfVat", position = 4)
	private BigDecimal grossNetOfVat;

	@ExcelBindByName(name = "Contribution Amount", methodName = "getContributionAmountInMillion", position = 5)
	private BigDecimal contributionAmountInMillion;
	
	@ExcelBindByName(name = "Contribution $/T", methodName = "getContributionUsdPerTon", position = 5)
	private BigDecimal contributionUsdPerTon;

	/**
	 * Default Constructor
	 */
	public SalesItemExportData() {
	}

	/**
	 * Construct using query result Object array
	 * 
	 * @param queryResult
	 */
	public SalesItemExportData(Object[] queryResult) {
		this.level1Name = (String) queryResult[0];
		this.level2Name = (String) queryResult[1];
		this.level3Name = (String) queryResult[2];
		this.level4Name = (String) queryResult[3];
		this.levelIndex = ((BigDecimal) queryResult[4]).intValue();
		this.netVolume = (BigDecimal) queryResult[6];
		this.exwUsdPerTon = (BigDecimal) queryResult[7];
		this.exwAmountInMillion = (BigDecimal) queryResult[8];
		this.vatAmountInMillion = (BigDecimal) queryResult[9];
		this.grossNetOfVat = (BigDecimal) queryResult[10];
		this.contributionAmountInMillion = (BigDecimal) queryResult[11];
		this.contributionUsdPerTon = (BigDecimal) queryResult[12];
	}
	
	/**
	 * Construct using {@link SalesPivotItemDto}
	 * 
	 * @param salesPivotItemDto
	 */
	public SalesItemExportData(SalesPivotItemDto salesPivotItemDto) {
		this.level1Name = salesPivotItemDto.getLevel1();
		this.level2Name = salesPivotItemDto.getLevel2();
		this.level3Name = salesPivotItemDto.getLevel3();
		this.level4Name = salesPivotItemDto.getLevel4();
		this.levelIndex = 1;
		this.netVolume = salesPivotItemDto.getNetVolume();
		this.exwUsdPerTon = salesPivotItemDto.getExwUsdPerTon();
		this.exwAmountInMillion = salesPivotItemDto.getExwAmountInMillion();
		this.contributionAmountInMillion = salesPivotItemDto.getContributionAmountInMillion();
		this.vatAmountInMillion = salesPivotItemDto.getVatAmountInMillion();
		this.grossNetOfVat = salesPivotItemDto.getGrossNetOfVat();
		this.contributionUsdPerTon = salesPivotItemDto.getContributionUsdPerTon();
	}

	/**
	 * Construct using {@link SalesItemView}
	 * 
	 * @param salesItemView
	 */
	public SalesItemExportData(SalesItemView salesItemView) {
		this.level1Name = "TOTAL";
		this.levelIndex = 1;
		this.netVolume = salesItemView.getNetVolume();
		this.exwUsdPerTon = salesItemView.getExwUsdPerTon();
		this.exwAmountInMillion = salesItemView.getExwAmountInMillion();
		this.contributionAmountInMillion = salesItemView.getContributionAmountInMillion();
		this.vatAmountInMillion = salesItemView.getVatAmountInMillion();
		this.grossNetOfVat = salesItemView.getGrossNetOfVat();
		this.contributionUsdPerTon = salesItemView.getContributionUsdPerTon();
	}


}
