/**
 * 
 */
package com.otkaz.srv.dto;

import com.otkaz.srv.projection.OrderPlantView;

/**
 * @author sheen
 *
 */
public class OrderPlantDto {
	
	private String name;
	
	private String code;
	
	public OrderPlantDto(OrderPlantView orderPlantView) {
		this.setName(orderPlantView.getName());
		this.code = orderPlantView.getCode();
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

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
	
}
