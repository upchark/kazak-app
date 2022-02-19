package com.otkaz.srv.api.controller;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.domain.JpaSort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.otkaz.srv.annotation.APIResult;
import com.otkaz.srv.api.service.ProductGroupService;
import com.otkaz.srv.api.service.WipService;
import com.otkaz.srv.dto.CreateProductGroupDto;
import com.otkaz.srv.dto.CreateProductInvDto;
import com.otkaz.srv.dto.CreateWipDto;
import com.otkaz.srv.dto.ProductGroupDto;
import com.otkaz.srv.dto.ProductInvDto;
import com.otkaz.srv.dto.WipMasterDto;
import com.otkaz.srv.exception.OTException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}/secure/wip")
public class WipController {

	@Autowired
	private WipService wipService;
	
	@RequestMapping(method = RequestMethod.GET, path = "/list")
	@APIResult(message = "#products.fetch.success", error_message = "#products.fetch.failed")
	public Object fetchAllProducts(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "product", required = false) String product,
			@RequestParam(value = "search", required = false) String search) throws OTException {
		try {
			Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
			return wipService.fetchAllProducts(search != null ? "%" + search + "%" : null, product,  pagingParams);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}
	
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	@APIResult(message = "#product.create.success", error_message = "#product.create.failed")
	public Object createProduct(@Valid @RequestBody CreateWipDto createProductGroupDto) throws OTException {
		try {
			System.out.println("We inside");
			return wipService.createProductGroup(createProductGroupDto);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}	
	
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@APIResult(message = "#product.remove.success", error_message = "#product.remove.failed")
	public Object deleteProduct(@PathVariable("id") Long id) throws OTException {
		try {
			return wipService.deleteProductGroup(id);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}
	
	
	@RequestMapping(method = RequestMethod.GET, path = "/productlist")
	@APIResult(message = "#products.fetch.success", error_message = "#products.fetch.failed")
	public Object fetchAllInvProducts(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "search", required = false) String search) throws OTException {
		try {
//			Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
			Pageable pagingParams = PageRequest.of(offset, numResults);
			
			return wipService.fetchAllInvProducts(search != null ? "%" + search + "%" : null,  pagingParams);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@APIResult(message = "#product.fetch.success", error_message = "#product.fetch.failed")
	public Object fetchOneProduct(@PathVariable("id") Long id) throws OTException {
		try {
			return wipService.fetchOneProduct(id);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@APIResult(message = "#product.update.success", error_message = "#product.update.failed")
	public Object updateProduct(@PathVariable("id") Long id,
			@Valid @RequestBody WipMasterDto productGroupDto) throws OTException {
		try {
			return wipService.updateProductGroup(id, productGroupDto);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	
}
