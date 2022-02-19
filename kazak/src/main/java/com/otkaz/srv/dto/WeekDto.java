package com.otkaz.srv.dto;

public class WeekDto {
	
	private Integer week;
	
	private String fromDate;
	
	private String toDate;

	public WeekDto() {
	}

	public WeekDto(Integer week, String fromDate, String toDate) {
		this.week = week;
		this.fromDate = fromDate;
		this.toDate = toDate;
	}

	public Integer getWeek() {
		return week;
	}

	public void setWeek(Integer week) {
		this.week = week;
	}

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}

}
