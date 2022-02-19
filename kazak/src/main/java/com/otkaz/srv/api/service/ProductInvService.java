/**
 * 
 */
package com.otkaz.srv.api.service;

import java.util.List;


import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.dto.CreateProductInvDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.ProductDto;
import com.otkaz.srv.dto.ProductGroupDto;
import com.otkaz.srv.dto.ProductInvDto;
import com.otkaz.srv.exception.OTException;

/**
 * 
 *
 */
@Service
public interface ProductInvService {

	PaginationDto fetchAllProducts(String search, String product, Pageable pagingParams);

	ProductInvDto createProductGroup(CreateProductInvDto body) throws OTException;

	List<ProductDto> fetchAllProductGroup();

	ProductInvDto fetchOneProduct(Long id) throws OTException;

	ProductInvDto updateProductGroup(Long id, ProductInvDto body) throws OTException;
	
	ProductInvDto deleteProductGroup(Long id) throws OTException;
	
	PaginationDto fetchAllInvProducts(String search, Pageable pagingParams);

}
