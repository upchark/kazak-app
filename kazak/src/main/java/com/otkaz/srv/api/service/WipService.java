/**
 * 
 */
package com.otkaz.srv.api.service;

import java.util.List;


import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.dto.CreateProductInvDto;
import com.otkaz.srv.dto.CreateWipDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.ProductDto;
import com.otkaz.srv.dto.ProductGroupDto;
import com.otkaz.srv.dto.ProductInvDto;
import com.otkaz.srv.dto.WipMasterDto;
import com.otkaz.srv.exception.OTException;

/**
 * 
 *
 */
@Service
public interface WipService {

	PaginationDto fetchAllProducts(String search, String product, Pageable pagingParams);
	
	WipMasterDto createProductGroup(CreateWipDto body) throws OTException;
	
	WipMasterDto deleteProductGroup(Long id) throws OTException;
	
	PaginationDto fetchAllInvProducts(String search, Pageable pagingParams);
	
	WipMasterDto fetchOneProduct(Long id) throws OTException;

	WipMasterDto updateProductGroup(Long id, WipMasterDto body) throws OTException;
	
	
	/*

	

	List<ProductDto> fetchAllProductGroup();

	
	
	
	
	
	*/
	

}
