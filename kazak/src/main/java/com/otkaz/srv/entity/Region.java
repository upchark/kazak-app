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
@Table(name = "TB_OCP_REGIONS_MASTER")
@EntityListeners(EntityListener.class)
public class Region {

	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id", updatable=false)
	private Long id;
	
	private String name;
	
	private Long rank;

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
