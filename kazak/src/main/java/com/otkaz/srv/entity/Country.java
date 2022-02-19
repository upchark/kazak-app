package com.otkaz.srv.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.otkaz.srv.entity.listeners.EntityListener;

@Entity
@Table(name = "TB_OCP_REGIONS")
@EntityListeners(EntityListener.class)
public class Country {

	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id", updatable=false)
	private Long id;
	
	private String country;
	
	private String name;
	
	private Long rank;
	
	private Long country_rank;

	public Long getCountry_rank() {
		return country_rank;
	}

	public void setCountry_rank(Long country_rank) {
		this.country_rank = country_rank;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	
	/**
	 * @return the country
	 */
	public String getCountry() {
		return country;
	}

	/**
	 * @param country the country to set
	 */
	public void setCountry(String country) {
		this.country = country;
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
