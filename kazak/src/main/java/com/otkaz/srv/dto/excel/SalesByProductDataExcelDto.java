package com.otkaz.srv.dto.excel;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvBindByPosition;
import com.otkaz.srv.annotation.ExcelBindByPosition;
import com.otkaz.srv.projection.SalesItemView;

public class SalesByProductDataExcelDto extends DataExcelDto {
	
	@CsvBindByName(column = "Name", locale = "en-US")
	@CsvBindByPosition(position = 0)
	@JsonProperty("name")
	private String name;
	
	@CsvBindByName(column = "(0-30 days) Vol", locale = "en-US")
	@CsvBindByPosition(position = 1)
	@JsonProperty("netVolume")
	private BigDecimal netVolume;
	
	@CsvBindByName(column = "(0-30 days) $/T", locale = "en-US")
	@CsvBindByPosition(position = 2)
	@JsonProperty("exwUsdPerTon")
	private BigDecimal exwUsdPerTon;
	
	@CsvBindByName(column = "(31-60 days) Vol", locale = "en-US")
	@CsvBindByPosition(position = 3)
	@JsonProperty("exwAmountInMillion")
	private BigDecimal exwAmountInMillion;
	
	@CsvBindByName(column = "(31-60 days) $/T", locale = "en-US")
	@CsvBindByPosition(position = 4)
	@JsonProperty("contributionUsdPerTon")
	private BigDecimal contributionUsdPerTon;
	
	@CsvBindByName(column = "(61-90 days) Vol", locale = "en-US")
	@CsvBindByPosition(position = 5)
	@JsonProperty("contributionAmountInMillion")
	private BigDecimal contributionAmountInMillion;
	
	@CsvBindByName(column = "(61-90 days) $/T", locale = "en-US")
	@CsvBindByPosition(position = 6)
	@JsonProperty("amountInMillion")
	private BigDecimal amountInMillion;
	
	@CsvBindByName(column = "(>90 days) Vol", locale = "en-US")
	@CsvBindByPosition(position = 7)
	@JsonProperty("grossNetOfVat")
	private BigDecimal grossNetOfVat;
	
	public SalesByProductDataExcelDto() {
		
	}
	
	public SalesByProductDataExcelDto(SalesItemView salesItemView) {
		this.name = salesItemView.getName();
		this.netVolume = salesItemView.getNetVolume();
		this.exwUsdPerTon = salesItemView.getExwUsdPerTon();
		this.exwAmountInMillion = salesItemView.getExwAmountInMillion();
		this.contributionUsdPerTon = salesItemView.getContributionUsdPerTon();
		this.contributionAmountInMillion = salesItemView.getContributionAmountInMillion();
		this.amountInMillion = salesItemView.getVatAmountInMillion();
		this.grossNetOfVat = salesItemView.getGrossNetOfVat();
	}

	@ExcelBindByPosition(position = 0)
	public String getProduct() {
		return name;
	}

	public void setProduct(String product) {
		this.name = product;
	}

	@ExcelBindByPosition(position = 1)
	public BigDecimal getVolume1() {
		return netVolume;
	}

	public void setVolume1(BigDecimal volume1) {
		this.netVolume = volume1;
	}

	@ExcelBindByPosition(position = 2)
	public BigDecimal getAmount1() {
		return exwUsdPerTon;
	}

	public void setAmount1(BigDecimal amount1) {
		this.exwUsdPerTon = amount1;
	}

	@ExcelBindByPosition(position = 3)
	public BigDecimal getVolume2() {
		return exwAmountInMillion;
	}

	public void setVolume2(BigDecimal volume2) {
		this.exwAmountInMillion = volume2;
	}

	@ExcelBindByPosition(position = 4)
	public BigDecimal getAmount2() {
		return contributionUsdPerTon;
	}

	public void setAmount2(BigDecimal amount2) {
		this.contributionUsdPerTon = amount2;
	}

	@ExcelBindByPosition(position = 5)
	public BigDecimal getVolume3() {
		return contributionAmountInMillion;
	}

	public void setVolume3(BigDecimal volume3) {
		this.contributionAmountInMillion = volume3;
	}

	@ExcelBindByPosition(position = 6)
	public BigDecimal getAmount3() {
		return amountInMillion;
	}

	public void setAmount3(BigDecimal amount3) {
		this.amountInMillion = amount3;
	}

	@ExcelBindByPosition(position = 7)
	public BigDecimal getVolume4() {
		return grossNetOfVat;
	}

	public void setVolume4(BigDecimal volume4) {
		this.grossNetOfVat = volume4;
	}

}
