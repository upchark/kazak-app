package com.otkaz.srv.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.otkaz.srv.entity.validator.EmailValidator;

public class LoginDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@EmailValidator(message = "{user.invalid.email}")
	private String email;

	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;

	public LoginDto() {
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
