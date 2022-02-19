/**
 * 
 */
package com.otkaz.srv.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.otkaz.srv.annotation.ExcelColumn;
import com.otkaz.srv.utils.Constants;

/**
 * @author pranika
 *
 */
@Entity
@Table(name = Constants.TB_OCP_STOCK_MB_INDEX_DEV)
public class OCPStockMBIndex extends OCPStock {
	
	//@ExcelColumn(name = "ID", position = 0)
	@Id
	@Column(name = "ID")
	private Long id;
	
	@Column(name = "DATE_1")
	@ExcelColumn(name = "Date", position = 0)
	private Integer date;
	
	@Column(name = "MONTH")
	@ExcelColumn(name = "Month", position = 0)
	private String month;
	
	@Column(name = "MONTH_NO")
	@ExcelColumn(name = "Month No", position = 0)
	private Integer monthNumber;
	
	@Column(name = "YEAR")
	@ExcelColumn(name = "Year", position = 0)
	private Integer year;
	
	@Column(name = "QTR")
	@ExcelColumn(name = "Qtr", position = 0)
	private String qtr;
	
	@Column(name = "WEEK")
	@ExcelColumn(name = "Week", position = 0)
	private String week;
	
	@Column(name = "HRC")
	@ExcelColumn(name = "HRC", position = 0)
	private Double hrc;
	
	@Column(name = "CRC")
	@ExcelColumn(name = "CRC", position = 0)
	private Double crc;
	
	@Column(name = "BLACK_SEA")
	@ExcelColumn(name = "Black_Sea", position = 0)
	private Double blackSea;
	
	@Column(name = "HRS")
	@ExcelColumn(name = "HRS", position = 0)
	private Double hrs;
	@Column(name = "UPDATE_DATE")
	private java.util.Date updatedDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getDate() {
		return date;
	}

	public void setDate(Integer date) {
		this.date = date;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public Integer getMonthNumber() {
		return monthNumber;
	}

	public void setMonthNumber(Integer monthNumber) {
		this.monthNumber = monthNumber;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getQtr() {
		return qtr;
	}

	public void setQtr(String qtr) {
		this.qtr = qtr;
	}

	public String getWeek() {
		return week;
	}

	public void setWeek(String week) {
		this.week = week;
	}

	public Double getHrc() {
		return hrc;
	}

	public void setHrc(Double hrc) {
		this.hrc = hrc;
	}

	public Double getCrc() {
		return crc;
	}

	public void setCrc(Double crc) {
		this.crc = crc;
	}

	public Double getBlackSea() {
		return blackSea;
	}

	public void setBlackSea(Double blackSea) {
		this.blackSea = blackSea;
	}

	public Double getHrs() {
		return hrs;
	}

	public void setHrs(Double hrs) {
		this.hrs = hrs;
	}

	public java.util.Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(java.util.Date updatedDate) {
		this.updatedDate = updatedDate;
	}
	
}
