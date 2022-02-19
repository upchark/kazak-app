package com.otkaz.srv.dto.excel;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvBindByPosition;
import com.otkaz.srv.annotation.ExcelBindByPosition;

public class SalesByProductSummaryExcelDto extends SummaryExcelDto {
	
	@CsvBindByName(column = "Type: ", locale = "en-US")
	@CsvBindByPosition(position = 0)
	@JsonProperty("type")
	private String type;
	
	@CsvBindByName(column = "Created By: ", locale = "en-US")
	@CsvBindByPosition(position = 1)
	@JsonProperty("created_by")
	private String createdBy;
	
	@CsvBindByName(column = "Created On: ", locale = "en-US")
	@CsvBindByPosition(position = 2)
	@JsonProperty("created_on")
	private String createdOn;
	
	@CsvBindByName(column = "From Date: ", locale = "en-US")
	@CsvBindByPosition(position = 3)
	@JsonInclude(Include.NON_NULL)
	@JsonProperty("fromDate")
	private String fromDate; 
	
	@CsvBindByName(column = "To Date: ", locale = "en-US")
	@CsvBindByPosition(position = 4)
	@JsonInclude(Include.NON_NULL)
	@JsonProperty("toDate")
	private String toDate;

	@ExcelBindByPosition(position = 0)
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@ExcelBindByPosition(position = 1)
	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	@ExcelBindByPosition(position = 2)
	public String getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(String createdOn) {
		this.createdOn = createdOn;
	}

	@ExcelBindByPosition(position = 3)
	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	@ExcelBindByPosition(position = 4)
	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}	

}
