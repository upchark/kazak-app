package com.otkaz.srv.api.service;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.dto.CreateProductDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.ProductDto;
import com.otkaz.srv.exception.OTException;

@Service
public interface ProductService {
	
	PaginationDto fetchAllProducts(String search, String type, Pageable pagingParams);
	
	ProductDto createProduct(CreateProductDto body) throws OTException;
	
	ProductDto fetchOneProduct(Long id) throws OTException;
	
	ProductDto updateProduct(Long id, ProductDto body) throws OTException;
	
	ProductDto deleteProduct(Long id) throws OTException;

}
