package com.otkaz.srv.api.service;

import org.springframework.data.domain.Pageable;

import com.otkaz.srv.dto.OCPStockMarketDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.exception.OTException;

public interface OCPStockCustomerService {
	
	PaginationDto fetchAll(String search, Pageable pagingParams);
	
	OCPStockMarketDto createCustomer(OCPStockMarketDto body) throws OTException;
	
	OCPStockMarketDto fetchOne(Long id) throws OTException;
	
	OCPStockMarketDto updateCustomer(Long id, OCPStockMarketDto body) throws OTException;
	
	OCPStockMarketDto deleteCustomer(Long id) throws OTException;
}
