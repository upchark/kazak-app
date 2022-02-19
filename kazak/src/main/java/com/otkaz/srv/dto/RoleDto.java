package com.otkaz.srv.dto;

public class RoleDto {
	
	private String name;
	
	private String code;

	public RoleDto() {
	}

	public RoleDto(String name, String code) {
		this.name = name;
		this.code = code;
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
