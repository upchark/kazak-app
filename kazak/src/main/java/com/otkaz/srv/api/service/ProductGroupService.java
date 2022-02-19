/**
 * 
 */
package com.otkaz.srv.api.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.dto.CreateProductGroupDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.ProductDto;
import com.otkaz.srv.dto.ProductGroupDto;
import com.otkaz.srv.exception.OTException;

/**
 * @author sheen
 *
 */
@Service
public interface ProductGroupService {

	PaginationDto fetchAllProducts(String search, String type, Pageable pagingParams);

	ProductGroupDto createProductGroup(CreateProductGroupDto body) throws OTException;

	List<ProductDto> fetchAllProductGroup();

	ProductGroupDto fetchOneProduct(Long id) throws OTException;

	ProductGroupDto updateProductGroup(Long id, ProductGroupDto body) throws OTException;

	ProductGroupDto deleteProductGroup(Long id) throws OTException;
	
	PaginationDto fetchAllProductsInCost (String search, Pageable pagingParams);

}
