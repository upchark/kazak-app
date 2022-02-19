package com.otkaz.srv.dto;

import java.io.Serializable;

import com.otkaz.srv.entity.Country;
import com.otkaz.srv.projection.RegionCountryView;

public class RegionCountryDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	private String name;
	
	private String region;
	
	private Long rank;
	
	private Long country_rank;

	public RegionCountryDto() {
	}

	public RegionCountryDto(Country country) {
		this.id = country.getId();
		this.name = country.getCountry();
		this.region = country.getName();
		this.rank = country.getRank();
		this.country_rank = country.getCountry_rank();
	}

	public RegionCountryDto(RegionCountryView countryView) {
		this.id = countryView.getId();
		this.name = countryView.getCountry();
		this.region = countryView.getName();
		this.rank = countryView.getRank();
		this.country_rank = countryView.getCountry_rank();
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
	
	public Long getCountry_rank() {
		return country_rank;
	}

	public void setCountry_rank(Long country_rank) {
		this.country_rank = country_rank;
	}

	/**
	 * @return the region
	 */
	public String getRegion() {
		return region;
	}

	/**
	 * @param region the region to set
	 */
	public void setRegion(String region) {
		this.region = region;
	}

	
	
	

}
