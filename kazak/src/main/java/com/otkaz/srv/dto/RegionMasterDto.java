package com.otkaz.srv.dto;

import java.io.Serializable;

import com.otkaz.srv.entity.Region;
import com.otkaz.srv.projection.RegionMasterView;

public class RegionMasterDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	private String name;
	
	private Long rank;

	public RegionMasterDto() {
	}

	public RegionMasterDto(Region region) {
		this.id = region.getId();
		this.name = region.getName();
		this.rank = region.getRank();
	}

	public RegionMasterDto(RegionMasterView regionView) {
		this.id = regionView.getId();
		this.name = regionView.getName();
		this.rank = regionView.getRank();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getRank() {
		return rank;
	}

	public void setRank(Long rank) {
		this.rank = rank;
	}

}
