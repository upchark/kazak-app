package com.otkaz.srv.api.service;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.ProductCostDto;
import com.otkaz.srv.exception.OTException;

@Service
public interface ProductCostService {
	
	PaginationDto fetchAllProductCosts(String search, Integer year, Integer month, Long productId, Pageable pagingParams);
	
	ProductCostDto createProductCost(ProductCostDto body) throws OTException;
	
	ProductCostDto fetchOneProductCost(Long id) throws OTException;
	
	ProductCostDto updateProductCost(Long id, ProductCostDto body) throws OTException;
	
	ProductCostDto deleteProductCost(Long id) throws OTException;
	
	PaginationDto fetchAllProductsInCost(String search,  Pageable pagingParams);

}
