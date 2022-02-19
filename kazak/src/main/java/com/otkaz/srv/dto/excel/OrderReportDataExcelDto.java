package com.otkaz.srv.dto.excel;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvBindByPosition;
import com.otkaz.srv.annotation.ExcelBindByPosition;
import com.otkaz.srv.dto.OPDto;
import com.otkaz.srv.projection.OPView;

public class OrderReportDataExcelDto extends DataExcelDto {
	
	@CsvBindByName(column = "Product", locale = "en-US")
	@CsvBindByPosition(position = 0)
	@JsonProperty("product")
	private String product;
	
	@CsvBindByName(column = "(0-30 days) Vol", locale = "en-US")
	@CsvBindByPosition(position = 1)
	@JsonProperty("volume1")
	private BigDecimal volume1;
	
	@CsvBindByName(column = "(0-30 days) $/T", locale = "en-US")
	@CsvBindByPosition(position = 2)
	@JsonProperty("amount1")
	private BigDecimal amount1;
	
	@CsvBindByName(column = "(31-60 days) Vol", locale = "en-US")
	@CsvBindByPosition(position = 3)
	@JsonProperty("volume2")
	private BigDecimal volume2;
	
	@CsvBindByName(column = "(31-60 days) $/T", locale = "en-US")
	@CsvBindByPosition(position = 4)
	@JsonProperty("amount2")
	private BigDecimal amount2;
	
	@CsvBindByName(column = "(61-90 days) Vol", locale = "en-US")
	@CsvBindByPosition(position = 5)
	@JsonProperty("volume3")
	private BigDecimal volume3;
	
	@CsvBindByName(column = "(61-90 days) $/T", locale = "en-US")
	@CsvBindByPosition(position = 6)
	@JsonProperty("amount3")
	private BigDecimal amount3;
	
	@CsvBindByName(column = "(>90 days) Vol", locale = "en-US")
	@CsvBindByPosition(position = 7)
	@JsonProperty("volume4")
	private BigDecimal volume4;
	
	@CsvBindByName(column = "(>90 days) $/T", locale = "en-US")
	@CsvBindByPosition(position = 8)
	@JsonProperty("amount4")
	private BigDecimal amount4;
	
	@CsvBindByName(column = "Total Vol", locale = "en-US")
	@CsvBindByPosition(position = 9)
	@JsonProperty("totalVolume")
	private BigDecimal totalVolume;
	
	@CsvBindByName(column = "Total $/T", locale = "en-US")
	@CsvBindByPosition(position = 10)
	@JsonProperty("totalAmount")
	private BigDecimal totalAmount;
	
	public OrderReportDataExcelDto() {
		
	}
	
	public OrderReportDataExcelDto(OPView opView) {
		this.product = opView.getProduct();
		this.volume1 = (opView.getVolume1() != null ? opView.getVolume1() : new BigDecimal(0));
		this.amount1 = (opView.getAmount1() != null ? opView.getAmount1() : new BigDecimal(0));
		this.volume2 = (opView.getVolume2() != null ? opView.getVolume2() : new BigDecimal(0));
		this.amount2 = (opView.getAmount2() != null ? opView.getAmount2() : new BigDecimal(0));
		this.volume3 = (opView.getVolume3() != null ? opView.getVolume3() : new BigDecimal(0));
		this.amount3 = (opView.getAmount3() != null ? opView.getAmount3() : new BigDecimal(0));
		this.volume4 = (opView.getVolume4() != null ? opView.getVolume4() : new BigDecimal(0));
		this.amount4 = (opView.getAmount4() != null ? opView.getAmount4() : new BigDecimal(0));
		this.totalVolume = (opView.getTotalVolume() != null ? opView.getTotalVolume() : new BigDecimal(0));
		this.totalAmount = (opView.getTotalAmount() != null ? opView.getTotalAmount() : new BigDecimal(0));
	}
	
	public OrderReportDataExcelDto(OPDto opDto) {
		this.product = opDto.getProduct();
		this.volume1 = (opDto.getVolume1() != null ? opDto.getVolume1() : new BigDecimal(0));
		this.amount1 = (opDto.getAmount1() != null ? opDto.getAmount1() : new BigDecimal(0));
		this.volume2 = (opDto.getVolume2() != null ? opDto.getVolume2() : new BigDecimal(0));
		this.amount2 = (opDto.getAmount2() != null ? opDto.getAmount2() : new BigDecimal(0));
		this.volume3 = (opDto.getVolume3() != null ? opDto.getVolume3() : new BigDecimal(0));
		this.amount3 = (opDto.getAmount3() != null ? opDto.getAmount3() : new BigDecimal(0));
		this.volume4 = (opDto.getVolume4() != null ? opDto.getVolume4() : new BigDecimal(0));
		this.amount4 = (opDto.getAmount4() != null ? opDto.getAmount4() : new BigDecimal(0));
		this.totalVolume = (opDto.getTotalVolume() != null ? opDto.getTotalVolume() : new BigDecimal(0));
		this.totalAmount = (opDto.getTotalAmount() != null ? opDto.getTotalAmount() : new BigDecimal(0));
	}

	@ExcelBindByPosition(position = 0)
	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	@ExcelBindByPosition(position = 1)
	public BigDecimal getVolume1() {
		return volume1;
	}

	public void setVolume1(BigDecimal volume1) {
		this.volume1 = volume1;
	}

	@ExcelBindByPosition(position = 2)
	public BigDecimal getAmount1() {
		return amount1;
	}

	public void setAmount1(BigDecimal amount1) {
		this.amount1 = amount1;
	}

	@ExcelBindByPosition(position = 3)
	public BigDecimal getVolume2() {
		return volume2;
	}

	public void setVolume2(BigDecimal volume2) {
		this.volume2 = volume2;
	}

	@ExcelBindByPosition(position = 4)
	public BigDecimal getAmount2() {
		return amount2;
	}

	public void setAmount2(BigDecimal amount2) {
		this.amount2 = amount2;
	}

	@ExcelBindByPosition(position = 5)
	public BigDecimal getVolume3() {
		return volume3;
	}

	public void setVolume3(BigDecimal volume3) {
		this.volume3 = volume3;
	}

	@ExcelBindByPosition(position = 6)
	public BigDecimal getAmount3() {
		return amount3;
	}

	public void setAmount3(BigDecimal amount3) {
		this.amount3 = amount3;
	}

	@ExcelBindByPosition(position = 7)
	public BigDecimal getVolume4() {
		return volume4;
	}

	public void setVolume4(BigDecimal volume4) {
		this.volume4 = volume4;
	}

	@ExcelBindByPosition(position = 8)
	public BigDecimal getAmount4() {
		return amount4;
	}

	public void setAmount4(BigDecimal amount4) {
		this.amount4 = amount4;
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
