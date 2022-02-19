package com.otkaz.srv.api.controller;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.domain.JpaSort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.otkaz.srv.annotation.APIResult;
import com.otkaz.srv.api.service.SalesService;
import com.otkaz.srv.enums.CCSortType;
import com.otkaz.srv.enums.Periodicities;
import com.otkaz.srv.exception.OTException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}/secure/sales")
public class SalesController {

	@Autowired
	private SalesService salesService;

	@RequestMapping(value = "/regions", method = RequestMethod.GET)
	@APIResult(message = "#sales.regions.fetch.success", error_message = "#sales.regions.fetch.failed")
	public Object fetchRegions() throws OTException {
		return salesService.fetchRegions();
	}
	
	@RequestMapping(value = "/customer", method = RequestMethod.GET)
	@APIResult(message = "#sales.customer.fetch.success", error_message = "#sales.customer.fetch.failed")
	public Object fetchCustomers() throws OTException {
		return salesService.fetchCustomers();
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/products/pivot")
	@APIResult(message = "#sales.by.product.fetch.success", error_message = "#sales.by.product.fetch.failed")
	public Object fetchSalesByProductsPivot(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "product") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
			return salesService.fetchSalesByProductsPivot(periodicity, periodLevel, year, region, customer, pagingParams);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.product.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/products")
	@APIResult(message = "#sales.by.product.fetch.success", error_message = "#sales.by.product.fetch.failed")
	public Object fetchSalesByProducts(@RequestParam(required = false) String[] bills ,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "level", required = false, defaultValue = "1") Integer level,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			return salesService.fetchSalesByProducts(bills, periodicity, periodLevel, level, year, region, customer);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.product.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/products/total")
	@APIResult(message = "#sales.by.product.total.fetch.success", error_message = "#sales.by.product.total.fetch.failed")
	public Object fetchSalesByProductsTotal(@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			return salesService.fetchSalesByProductsTotal(periodicity, periodLevel, year, region, customer);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.product.total.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/countries/pivot")
	@APIResult(message = "#sales.by.country.total.fetch.success", error_message = "#sales.by.country.total.fetch.failed")
	public Object fetchSalesByCountriesPivot(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "product") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
			return salesService.fetchSalesByCountriesPivot(periodicity, periodLevel, year, region,  pagingParams, customer);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.total.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/countries")
	@APIResult(message = "#sales.by.country.fetch.success", error_message = "#sales.by.country.fetch.failed")
	public Object fetchSalesByCountries(@RequestParam(required = false) String[] bills ,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "level", required = false, defaultValue = "1") Integer level,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			return salesService.fetchSalesByCountries(bills, periodicity, periodLevel, level, year, region, customer);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/countries/total")
	@APIResult(message = "#sales.by.country.total.fetch.success", error_message = "#sales.by.country.total.fetch.failed")
	public Object fetchSalesByCountriesTotal(@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			return salesService.fetchSalesByCountriesTotal(periodicity, periodLevel, year, region, customer);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.total.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/customers/pivot")
	@APIResult(message = "#sales.by.country.total.fetch.success", error_message = "#sales.by.country.total.fetch.failed")
	public Object fetchSalesByCustomersPivot(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "product") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			System.out.println("-------------------------------inside customers total");
			Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
			return salesService.fetchSalesByCustomersPivot(periodicity, periodLevel, year, region, customer,pagingParams);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.total.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/customers")
	@APIResult(message = "#sales.by.country.fetch.success", error_message = "#sales.by.country.fetch.failed")
	public Object fetchSalesByCustomers(@RequestParam(required = false) String[] bills ,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "level", required = false, defaultValue = "1") Integer level,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			return salesService.fetchSalesByCustomers(bills, periodicity, periodLevel, level, year, region, customer);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/customers/total")
	@APIResult(message = "#sales.by.country.total.fetch.success", error_message = "#sales.by.country.total.fetch.failed")
	public Object fetchSalesByCustomersTotal(@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			System.out.println("-------------------------------inside customers total");
			return salesService.fetchSalesByCustomersTotal(periodicity, periodLevel, year, region, customer);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.total.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/region/pivot")
	@APIResult(message = "#sales.by.country.total.fetch.success", error_message = "#sales.by.country.total.fetch.failed")
	public Object fetchSalesByRegionPivot(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "product") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			System.out.println("-------------------------------inside customers total");
			Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
			return salesService.fetchSalesByRegionPivot(periodicity, periodLevel, year, region, customer, pagingParams);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.total.fetch.failed", 400);
		}
	}

	@RequestMapping(method = RequestMethod.GET, path = "/region")
	@APIResult(message = "#sales.by.region.fetch.success", error_message = "#sales.by.region.fetch.failed")
	public Object fetchSalesByRegion(@RequestParam(required = false) String[] bills ,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "level", required = false, defaultValue = "1") Integer level,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			return salesService.fetchSalesByRegion(bills, periodicity, periodLevel, level, year, region, customer);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/region/total")
	@APIResult(message = "#sales.by.region.total.fetch.success", error_message = "#sales.by.region.total.fetch.failed")
	public Object fetchSalesByRegionTotal(@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			System.out.println("-------------------------------inside customers total");
			return salesService.fetchSalesByRegionTotal(periodicity, periodLevel, year, region, customer);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.total.fetch.failed", 400);
		}
	}
	
	//////////////TOP 10 CUSTOMERS //////////////////
	/**
	 * List of top 10 customers wrt the topBy column
	 * 
	 * @param topBy
	 * @param periodicity
	 * @param periodLevel
	 * @param year
	 * @param region
	 * @return
	 * @throws OTException
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/customers/top/{ccSortType}")
	@APIResult(message = "#sales.by.customer.fetch.success", error_message = "#sales.by.customer.fetch.failed")
	public Object fetchSalesByTopCustomers(
			@NotNull @PathVariable("ccSortType") CCSortType ccSortType,
			@RequestParam(value = "topBy", required = false, defaultValue = "net_volume") String topBy,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year, @RequestParam(value = "region", required = false) String region)
					throws OTException {
		return salesService.fetchSalesByTopCustomers(periodicity, periodLevel, year, region,
				topBy, ccSortType);
	}

	/**
	 * Total top 10 customers wrt the topBy column
	 * 
	 * @param topBy
	 * @param periodicity
	 * @param periodLevel
	 * @param year
	 * @param region
	 * @return
	 * @throws OTException
	 */
	@RequestMapping(method = RequestMethod.GET, path = "/customers/top/total/{ccSortType}")
	@APIResult(message = "#sales.by.customer.fetch.success", error_message = "#sales.by.customer.fetch.failed")
	public Object fetchTotalSalesByTopCustomers(
			@NotNull @PathVariable("ccSortType") CCSortType ccSortType,
			@RequestParam(value = "topBy", required = false, defaultValue = "net_volume") String topBy,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year, @RequestParam(value = "region", required = false) String region)
					throws OTException {
		return salesService.fetchTotalSalesByTopCustomers(periodicity, periodLevel, year, region,
				topBy, ccSortType);
	}
}
