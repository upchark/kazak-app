/**
 * 
 */
package com.otkaz.srv.dto;

import java.util.List;

/**
 * @author sheen
 *
 */
public class ProfitabilityDto {

	
	private long count;
	
	private String parent;
	
	private long level;
	
	private List<ProfitabilityItemDto> data; 
	
	
	/**
	 * @return the count
	 */
	public long getCount() {
		return count;
	}
	/**
	 * @param count the count to set
	 */
	public void setCount(long count) {
		this.count = count;
	}
	/**
	 * @return the parent
	 */
	public String getParent() {
		return parent;
	}
	/**
	 * @param parent the parent to set
	 */
	public void setParent(String parent) {
		this.parent = parent;
	}
	/**
	 * @return the level
	 */
	public long getLevel() {
		return level;
	}
	/**
	 * @param level the level to set
	 */
	public void setLevel(long level) {
		this.level = level;
	}
	/**
	 * @return the data
	 */
	public List<ProfitabilityItemDto> getData() {
		return data;
	}
	/**
	 * @param data the data to set
	 */
	public void setData(List<ProfitabilityItemDto> data) {
		this.data = data;
	}
	public ProfitabilityDto() {

	}
	/**
	 * 
	 */
	public ProfitabilityDto(long count, String parent, long level, List<ProfitabilityItemDto> data) {
		this.count = count;
		this.parent = parent;
		this.level = level;
		this.data = data;
	}
	

}
