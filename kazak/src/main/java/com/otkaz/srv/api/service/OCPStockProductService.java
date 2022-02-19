package com.otkaz.srv.api.service;

import org.springframework.data.domain.Pageable;

import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.OCPStockProductDto;
import com.otkaz.srv.exception.OTException;

public interface OCPStockProductService {
	
	PaginationDto fetchAllProducts(String search, Pageable pagingParams);
	
	OCPStockProductDto createProduct(OCPStockProductDto body) throws OTException;
	
	OCPStockProductDto fetchOneProduct(Long id) throws OTException;
	
	OCPStockProductDto updateProduct(Long id, OCPStockProductDto body) throws OTException;
	
	OCPStockProductDto deleteProduct(Long id) throws OTException;
}
