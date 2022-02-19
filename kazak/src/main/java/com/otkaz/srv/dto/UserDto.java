package com.otkaz.srv.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.otkaz.srv.annotation.ValidateEnum;
import com.otkaz.srv.entity.Users;
import com.otkaz.srv.entity.validator.EmailValidator;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.projection.UserView;

public class UserDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;
	
	private String code;
	
	private String name;
	
	private String number;

	@EmailValidator(message = "{user.invalid.email}")
	private String email;
	
	private String fax;
	
	private String mobile;
	
	private String phone;

	@ValidateEnum(enumClass = Roles.class, message = "Invalid Role")
	private String role;

	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	
	private String jwtToken;
	
	private Boolean active;
	
	private Boolean activated;
	
	@JsonProperty("createdBy")
	private Long createdBy;

	public UserDto() {
	}

	public UserDto(UserView userView) {
		this.id = userView.getId();
		this.code = userView.getCode();
		this.name = userView.getName();
		this.number = userView.getNumberValue();
		this.email = userView.getEmail();
		this.fax = userView.getFax();
		this.mobile = userView.getMobile();
		this.phone = userView.getPhone();
		this.role = userView.getRole();
		this.active = (userView.getActive() == 1);
		this.activated = (userView.getActivated() == 1);
	}

	public UserDto(Users user) {
		this.id = user.getId();
		this.email = user.getEmail();
		this.role = user.getRole().name();
		this.active = user.getActive();
		this.activated = user.getActivated();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Boolean getActivated() {
		return activated;
	}

	public void setActivated(Boolean activated) {
		this.activated = activated;
	}

	public Long getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}
}
