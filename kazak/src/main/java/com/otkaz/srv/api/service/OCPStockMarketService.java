package com.otkaz.srv.api.service;

import org.springframework.data.domain.Pageable;

import com.otkaz.srv.dto.OCPStockMarketDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.exception.OTException;

public interface OCPStockMarketService {
	
	PaginationDto fetchAllMarket(String search, Pageable pagingParams);
	
	OCPStockMarketDto createMarket(OCPStockMarketDto body) throws OTException;
	
	OCPStockMarketDto fetchOne(Long id) throws OTException;
	
	OCPStockMarketDto updateMarket(Long id, OCPStockMarketDto body) throws OTException;
	
	OCPStockMarketDto deleteMarket(Long id) throws OTException;
}
