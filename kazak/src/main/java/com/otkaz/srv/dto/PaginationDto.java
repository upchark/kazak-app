package com.otkaz.srv.dto;

import java.util.List;

public class PaginationDto {

	private long count;

	private List<BaseDto> data;

	public PaginationDto() {
		// TODO Auto-generated constructor stub
	}
	
	public PaginationDto(List<BaseDto> data) {
		this.data = data;
	}

	public PaginationDto(long count, List<BaseDto> data) {
		this.count = count;
		this.data = data;
	}

	public long getCount() {
		return count;
	}

	public void setCount(long count) {
		this.count = count;
	}

	public List<BaseDto> getData() {
		return data;
	}

	public void setData(List<BaseDto> data) {
		this.data = data;
	}
}
