package com.otkaz.srv.dto;

import java.util.List;

public class SalesDto {
	
	private long count;
	
	private String parent;
	
	private long level;
	
	private List<SalesItemDto> data;
	
	public SalesDto() {
		// TODO Auto-generated constructor stub
	}

	public SalesDto(long count, String parent, long level, List<SalesItemDto> data) {
		this.count = count;
		this.parent = parent;
		this.level = level;
		this.data = data;
	}

	public long getCount() {
		return count;
	}

	public void setCount(long count) {
		this.count = count;
	}

	public List<SalesItemDto> getData() {
		return data;
	}

	public void setData(List<SalesItemDto> data) {
		this.data = data;
	}

	public String getParent() {
		return parent;
	}

	public void setParent(String parent) {
		this.parent = parent;
	}

	public long getLevel() {
		return level;
	}

	public void setLevel(long level) {
		this.level = level;
	}
}
