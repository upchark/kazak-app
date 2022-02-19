package com.otkaz.srv.dto;

import com.otkaz.srv.projection.RegionView;

public class RegionDto {
	
	private String name;
	
	private String code;

	public RegionDto() {
	}

	public RegionDto(RegionView regionView) {
		this.name = regionView.getName();
		this.code = regionView.getCode();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

}
