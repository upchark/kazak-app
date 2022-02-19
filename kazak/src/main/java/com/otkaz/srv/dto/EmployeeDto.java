package com.otkaz.srv.dto;

import java.io.Serializable;

import com.otkaz.srv.projection.EmployeeView;

public class EmployeeDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String employeeCode;
	
	private String name;
	
	private String employeeNumber;
	
	private String email;
	
	private String fax;
	
	private String mobile;
	
	private String phone;
	
	private Integer active;

	public EmployeeDto() {
	}

	public EmployeeDto(EmployeeView employeeView) {
		this.employeeCode = employeeView.getEmployeeCode();
		this.name = employeeView.getName();
		this.employeeNumber = employeeView.getEmployeeNumber();
		this.email = employeeView.getEmail();
		this.fax = employeeView.getFax();
		this.mobile = employeeView.getMobile();
		this.phone = employeeView.getPhone();
		this.active = employeeView.getActive();
	}

	public String getEmployeeCode() {
		return employeeCode;
	}

	public void setEmployeeCode(String employeeCode) {
		this.employeeCode = employeeCode;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmployeeNumber() {
		return employeeNumber;
	}

	public void setEmployeeNumber(String employeeNumber) {
		this.employeeNumber = employeeNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Integer getActive() {
		return active;
	}

	public void setActive(Integer active) {
		this.active = active;
	}

}
