package com.otkaz.srv.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.Table;

import com.otkaz.srv.entity.listeners.EntityListener;
import com.otkaz.srv.projection.EmployeeView;

@Entity
@Table(name = "TB_OCP_EMPLOYEE")
@EntityListeners(EntityListener.class)
public class Employee {

	@Id
	@Column(name = "employeecode")
	private String employeeCode;
	
	private String name;

	@Column(name = "employeenumber")
	private String employeeNumber;

	private String email;

	private String fax;

	private String mobile;

	private String phone;
	
	private Integer active;
	
	public Employee() {
		
	}
	
	public Employee(EmployeeView employeeView) {
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
