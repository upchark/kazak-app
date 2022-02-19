package com.otkaz.srv.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.otkaz.srv.entity.OCPStockMarket;
import com.otkaz.srv.projection.OCPStockMarketView;

public class OCPStockMarketDto extends BaseDto{
	
	private Long id;
	
	@JsonProperty("market_id")
	private String marketId;
	
	private String code;
	
	private String name;
	
	private int order;
	
	public OCPStockMarketDto() {}
	public OCPStockMarketDto(OCPStockMarket entity) {
		this.id = entity.getId();
		this.marketId = entity.getMarketId();
		this.name = entity.getName();
		this.code = entity.getCode();
		this.order = entity.getOrder();
	}

	public OCPStockMarketDto(OCPStockMarketView item) {
		this.id = item.getId();
		this.marketId = item.getMarketId();
		this.name = item.getName();
		this.code = item.getCode();
		this.order = item.getMarketOrder();
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

	public int getOrder() {
		return order;
	}
	public void setOrder(int order) {
		this.order = order;
	}
	@Override
	public String toString() {
		return "StockProductDto [marketId=" + marketId + ", code=" + code + ", name=" + name + "]";
	}
	
}
