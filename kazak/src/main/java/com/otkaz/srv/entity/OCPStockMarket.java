package com.otkaz.srv.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.otkaz.srv.dto.OCPStockMarketDto;

@Entity
@Table(name = "TB_OCP_STOCK_MB_MARKET_DEV")
public class OCPStockMarket {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "D_MARKET")
	private String marketId;
	
	@Column(name = "MARKET")
	private String code;
	
	@Column(name = "MARKET_2")
	private String name;
	
	@Column(name = "MARKET_SORT")
	private Integer order;

	public OCPStockMarket() {}
	public OCPStockMarket(OCPStockMarketDto dto) {
		this.id = dto.getId();
		this.marketId = dto.getMarketId();
		this.name = dto.getName();
		this.code = dto.getCode();
		this.order = dto.getOrder();
	}

	public String getMarketId() {
		return marketId;
	}
	public void setMarketId(String marketId) {
		this.marketId = marketId;
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
	public Integer getOrder() {
		return order;
	}
	public void setOrder(Integer order) {
		this.order = order;
	}

}
