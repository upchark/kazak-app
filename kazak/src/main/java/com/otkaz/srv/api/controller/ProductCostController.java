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
import com.otkaz.srv.api.service.ProductCostService;
import com.otkaz.srv.dto.ProductCostDto;
import com.otkaz.srv.exception.OTException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}/secure/productCosts")
public class ProductCostController {

	@Autowired
	private ProductCostService productCostService;
	
	@RequestMapping(method = RequestMethod.GET, path = "/list")
	@APIResult(message = "#product.costs.fetch.success", error_message = "#product.costs.fetch.failed")
	public Object fetchAllProductCosts(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "year", required = false) Integer year,
			@RequestParam(value = "month", required = false) Integer month,
			@RequestParam(value = "productId", required = false) Long productId,
			@RequestParam(value = "search", required = false) String search) throws OTException {
		try {
			Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
			return productCostService.fetchAllProductCosts(search != null ? "%" + search + "%" : null, year, month, productId, pagingParams);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	
	
	@RequestMapping(method = RequestMethod.GET, path = "/productlist")
	@APIResult(message = "#products.fetch.success", error_message = "#products.fetch.failed")
	public Object fetchAllProductsInCost(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "search", required = false) String search) throws OTException {
		try {
			Pageable pagingParams = PageRequest.of(offset, numResults);
			return productCostService.fetchAllProductsInCost(search != null ? "%" + search + "%" : null,  pagingParams);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	} 
	
	
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	@APIResult(message = "#product.cost.create.success", error_message = "#product.cost.create.failed")
	public Object createProductCost(@Valid @RequestBody ProductCostDto productCostDto) throws OTException {
		try {
			return productCostService.createProductCost(productCostDto);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@APIResult(message = "#product.cost.fetch.success", error_message = "#product.cost.fetch.failed")
	public Object fetchOneProductCost(@PathVariable("id") Long id) throws OTException {
		try {
			return productCostService.fetchOneProductCost(id);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@APIResult(message = "#product.cost.update.success", error_message = "#product.cost.update.failed")
	public Object updateProductCost(@PathVariable("id") Long id,
			@Valid @RequestBody ProductCostDto productCostDto) throws OTException {
		try {
			return productCostService.updateProductCost(id, productCostDto);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@APIResult(message = "#product.cost.remove.success", error_message = "#product.cost.remove.failed")
	public Object deleteProductCost(@PathVariable("id") Long id) throws OTException {
		try {
			return productCostService.deleteProductCost(id);
		}catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

}
