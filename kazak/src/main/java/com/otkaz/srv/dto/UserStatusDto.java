/**
 * 
 */
package com.otkaz.srv.dto;

import com.otkaz.srv.projection.UserStatusView;

/**
 * @author sheen
 *
 */
public class UserStatusDto {
	
	private String name;
	
	private String code;
	
	public UserStatusDto(UserStatusView userStatusView) {
		this.name = userStatusView.getName();
		this.code = userStatusView.getCode();
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the code
	 */
	public String getCode() {
		return code;
	}

	/**
	 * @param code the code to set
	 */
	public void setCode(String code) {
		this.code = code;
	}
	

}
