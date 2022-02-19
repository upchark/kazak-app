package com.otkaz.srv.api.exportation.pojo;

import java.math.BigDecimal;

import com.otkaz.srv.api.exportation.annotation.ExcelBindByName;
import com.otkaz.srv.dto.ProfitabilityPivotItemDto;
import com.otkaz.srv.projection.ProfitabilityItemView;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @Author Anish
 * @Date 01-Sep-2021
 *
 */
@Getter
@Setter
@ToString
public class ProfitabilityItemExportData implements ExportData {

	private String level1Name;

	private String level2Name;

	private String level3Name;

	private String level4Name;

	private int levelIndex;

	private int sortOrder;

	@ExcelBindByName(name = "Net Volume", methodName = "getNetVolume", position = 0)
	private BigDecimal netVolume;

	@ExcelBindByName(name = "NRP Amount", methodName = "getNrpAmountInMillion", position = 1)
	private BigDecimal nrpAmountInMillion;

	@ExcelBindByName(name = "NRP $/T", methodName = "getNrpUsdPerTon", position = 2)
	private BigDecimal nrpUsdPerTon;

	@ExcelBindByName(name = "EBITDA Amount", methodName = "getEbitdaAmountInMillion", position = 3)
	private BigDecimal ebitdaAmountInMillion;

	@ExcelBindByName(name = "EBITDA $/T", methodName = "getEbitdaUsdPerTon", position = 4)
	private BigDecimal ebitdaUsdPerTon;

	@ExcelBindByName(name = "Contribution Amount", methodName = "getContributionAmountInMillion", position = 5)
	private BigDecimal contributionAmountInMillion;
	
	@ExcelBindByName(name = "Contribution $/T", methodName = "getContributionUsdPerTon", position = 5)
	private BigDecimal contributionUsdPerTon;

	
	public ProfitabilityItemExportData() {
	}

	public ProfitabilityItemExportData(Object[] queryResult) {
		this.level1Name = (String) queryResult[0];
		this.level2Name = (String) queryResult[1];
		this.level3Name = (String) queryResult[2];
		this.level4Name = (String) queryResult[3];
		this.levelIndex = ((BigDecimal) queryResult[4]).intValue();
		this.netVolume = (BigDecimal) queryResult[6];
		this.nrpAmountInMillion = (BigDecimal) queryResult[7];
		this.nrpUsdPerTon = (BigDecimal) queryResult[8];
		this.ebitdaAmountInMillion = (BigDecimal) queryResult[9];
		this.ebitdaUsdPerTon = (BigDecimal) queryResult[10];
		this.contributionAmountInMillion = (BigDecimal) queryResult[11];
		this.contributionUsdPerTon = (BigDecimal) queryResult[12];
	}

	public ProfitabilityItemExportData(ProfitabilityItemView profitabilityItemView) {
		this.level1Name = "TOTAL";
		this.levelIndex = 1;
		this.netVolume = profitabilityItemView.getNetVolume();
		this.nrpUsdPerTon = profitabilityItemView.getNrpUsdPerTon();
		this.nrpAmountInMillion = profitabilityItemView.getNrpAmountInMillion();
		this.contributionUsdPerTon = profitabilityItemView.getContributionUsdPerTon();
		this.contributionAmountInMillion = profitabilityItemView.getContributionAmountInMillion();
		this.ebitdaUsdPerTon = profitabilityItemView.getEbitdaUsdPerTon();
		this.ebitdaAmountInMillion = profitabilityItemView.getEbitdaAmountInMillion();
	}

	public ProfitabilityItemExportData(ProfitabilityPivotItemDto profitabilityPivotItemDto) {
		this.level1Name = profitabilityPivotItemDto.getLevel1();
		this.level2Name = profitabilityPivotItemDto.getLevel2();
		this.level3Name = profitabilityPivotItemDto.getLevel3();
		this.level4Name = profitabilityPivotItemDto.getLevel4();
		this.levelIndex = 1;
		this.netVolume = profitabilityPivotItemDto.getNetVolume();
		this.nrpUsdPerTon = profitabilityPivotItemDto.getNrpUsdPerTon();
		this.nrpAmountInMillion = profitabilityPivotItemDto.getNrpAmountInMillion();
		this.contributionUsdPerTon = profitabilityPivotItemDto.getContributionUsdPerTon();
		this.contributionAmountInMillion = profitabilityPivotItemDto.getContributionAmountInMillion();
		this.ebitdaUsdPerTon = profitabilityPivotItemDto.getEbitdaUsdPerTon();
		this.ebitdaAmountInMillion = profitabilityPivotItemDto.getEbitdaAmountInMillion();
	}

}
