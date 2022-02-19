package com.otkaz.srv.dto.excel;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvBindByPosition;
import com.otkaz.srv.annotation.ExcelBindByPosition;
import com.otkaz.srv.dto.OPZayvkasDto;
import com.otkaz.srv.projection.OPZayvkasView;

public class ZayvkasDataExcelDto extends DataExcelDto {
	
	@CsvBindByName(column = "Product", locale = "en-US")
	@CsvBindByPosition(position = 0)
	@JsonProperty("product")
	private String product;
	
	@CsvBindByName(column = "Vol", locale = "en-US")
	@CsvBindByPosition(position = 9)
	@JsonProperty("totalVolume")
	private BigDecimal totalVolume;
	
	@CsvBindByName(column = "$/T", locale = "en-US")
	@CsvBindByPosition(position = 10)
	@JsonProperty("totalAmount")
	private BigDecimal totalAmount;
	
	public ZayvkasDataExcelDto() {
		
	}
	
	public ZayvkasDataExcelDto(OPZayvkasView opZayvkasView) {
		this.product = opZayvkasView.getProduct();
		this.totalVolume = opZayvkasView.getTotalVolume();
		this.totalAmount = opZayvkasView.getTotalAmount();
	}
	
	public ZayvkasDataExcelDto(OPZayvkasDto opZayvkasDto) {
		this.product = opZayvkasDto.getProduct();
		this.totalVolume = opZayvkasDto.getTotalVolume();
		this.totalAmount = opZayvkasDto.getTotalAmount();
	}

	@ExcelBindByPosition(position = 0)
	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	@ExcelBindByPosition(position = 9)
	public BigDecimal getTotalVolume() {
		return totalVolume;
	}

	public void setTotalVolume(BigDecimal totalVolume) {
		this.totalVolume = totalVolume;
	}

	@ExcelBindByPosition(position = 10)
	public BigDecimal getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(BigDecimal totalAmount) {
		this.totalAmount = totalAmount;
	}	

}
