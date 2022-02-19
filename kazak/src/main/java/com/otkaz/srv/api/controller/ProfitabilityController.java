/**
 * 
 */
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
import com.otkaz.srv.api.service.ProfitabilityService;
import com.otkaz.srv.enums.CCSortType;
import com.otkaz.srv.enums.Periodicities;
import com.otkaz.srv.exception.OTException;

/**
 * @author sheen
 *
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}/secure/pf")
public class ProfitabilityController {

	@Autowired
	private ProfitabilityService profitabilityService;

	@RequestMapping(value = "/regions", method = RequestMethod.GET)
	@APIResult(message = "#sales.regions.fetch.success", error_message = "#sales.regions.fetch.failed")
	public Object fetchRegions() throws OTException {
		return profitabilityService.fetchRegions();
	}

	
	@RequestMapping(value = "/customer", method = RequestMethod.GET)
	@APIResult(message = "#sales.customer.fetch.success", error_message = "#sales.customer.fetch.failed")
	public Object fetchCustomers() throws OTException {
		return profitabilityService.fetchCustomers();
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/products/pivot")
	@APIResult(message = "#sales.by.product.fetch.success", error_message = "#sales.by.product.fetch.failed")
	public Object fetchProfitabilityByProductsPivot(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "product") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "year") Integer year, @RequestParam(value = "region", required = false) String region)
			throws OTException {
		try {
			Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
			return profitabilityService.fetchProfitabilityByProductsPivot(periodicity, periodLevel, year, region, customer, pagingParams);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.product.fetch.failed", 400);
		}
	}

	@RequestMapping(method = RequestMethod.GET, path = "/products")
	@APIResult(message = "#sales.by.product.fetch.success", error_message = "#sales.by.product.fetch.failed")
	public Object fetchProfitabilityByProducts(@RequestParam(required = false) String[] bills,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "level", required = false, defaultValue = "1") Integer level,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			return profitabilityService.fetchProfitabilityByProducts(bills, periodicity, periodLevel, level, year, region, customer);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.product.fetch.failed", 400);
		}
	}

	@RequestMapping(method = RequestMethod.GET, path = "/products/total")
	@APIResult(message = "#sales.by.product.total.fetch.success", error_message = "#sales.by.product.total.fetch.failed")
	public Object fetchProfitabilityByProductsTotal(
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "year") Integer year, @RequestParam(value = "region", required = false) String region)
			throws OTException {
		try {
			return profitabilityService.fetchProfitabilityByProductsTotal(periodicity, periodLevel, year, region, customer);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.product.total.fetch.failed", 400);
		}
	}

	@RequestMapping(method = RequestMethod.GET, path = "/countries/pivot")
	@APIResult(message = "#sales.by.country.fetch.success", error_message = "#sales.by.country.fetch.failed")
	public Object fetchProfitabilityByCountriesPivot(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "product") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "year") Integer year, @RequestParam(value = "region", required = false) String region)
			throws OTException {
		try {
			Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
			return profitabilityService.fetchProfitabilityByCountriesPivot(periodicity, periodLevel, year, region, customer, pagingParams);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.product.fetch.failed", 400);
		}
	}

	@RequestMapping(method = RequestMethod.GET, path = "/countries")
	@APIResult(message = "#sales.by.country.fetch.success", error_message = "#sales.by.country.fetch.failed")
	public Object fetchProfitabilityByCountries(@RequestParam(required = false) String[] bills,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "level", required = false, defaultValue = "1") Integer level,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			return profitabilityService.fetchProfitabilityByCountries(bills, periodicity, periodLevel, level, year, region, customer);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.fetch.failed", 400);
		}
	}

	@RequestMapping(method = RequestMethod.GET, path = "/countries/total")
	@APIResult(message = "#sales.by.country.total.fetch.success", error_message = "#sales.by.country.total.fetch.failed")
	public Object fetchProfitabilityByCountriesTotal(
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "year") Integer year, @RequestParam(value = "region", required = false) String region)
			throws OTException {
		try {
			return profitabilityService.fetchProfitabilityByCountriesTotal(periodicity, periodLevel, year, region, customer);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.total.fetch.failed", 400);
		}
	}

	@RequestMapping(method = RequestMethod.GET, path = "/customers/pivot")
	@APIResult(message = "#sales.by.country.total.fetch.success", error_message = "#sales.by.country.total.fetch.failed")
	public Object fetchProfitabilityByCustomersPivot(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "product") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "ngtvEBITDA", required = false, defaultValue = "0") int filterNegativeEBITDA,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
			return profitabilityService.fetchProfitabilityByCustomersPivot(periodicity, periodLevel, year, region, customer, filterNegativeEBITDA, pagingParams);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.total.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/customers")
	@APIResult(message = "#profitability.by.customer.total.fetch.success", error_message = "#profitability.by.customer.total.fetch.failed")
	public Object fetchProfitabilityByCustomers(@RequestParam(required = false) String[] bills ,
			@RequestParam(value = "ngtvEBITDA", required = false, defaultValue = "0") int filterNegativeEBITDA,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "level", required = false, defaultValue = "1") Integer level,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			return profitabilityService.fetchProfitabilityByCustomers(bills, periodicity, periodLevel, level, year, region, customer, filterNegativeEBITDA);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#profitability.by.customer.total.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/customers/total")
	@APIResult(message = "#profitability.by.customer.total.fetch.success", error_message = "#profitability.by.customer.total.fetch.failed")
	public Object fetchProfitabilityByCustomersTotal(@RequestParam(value = "ngtvEBITDA", required = false, defaultValue = "0") int filterNegativeEBITDA,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			return profitabilityService.fetchProfitabilityByCustomersTotal(periodicity, periodLevel, year, region,customer, filterNegativeEBITDA);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#profitability.by.customer.total.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/region/pivot")
	@APIResult(message = "#sales.by.country.total.fetch.success", error_message = "#sales.by.country.total.fetch.failed")
	public Object fetchProfitabilityByRegionPivot(@RequestParam("offset") @Min(0) int offset,
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
			return profitabilityService.fetchProfitabilityByRegionPivot(periodicity, periodLevel, year, region, customer, pagingParams);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.total.fetch.failed", 400);
		}
	}

	@RequestMapping(method = RequestMethod.GET, path = "/region")
	@APIResult(message = "#sales.by.country.fetch.success", error_message = "#sales.by.country.fetch.failed")
	public Object fetchProfitabilityByRegion(@RequestParam(required = false) String[] bills ,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "level", required = false, defaultValue = "1") Integer level,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			return profitabilityService.fetchProfitabilityByRegion(bills, periodicity, periodLevel, level, year, region, customer);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.fetch.failed", 400);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, path = "/region/total")
	@APIResult(message = "#sales.by.country.total.fetch.success", error_message = "#sales.by.country.total.fetch.failed")
	public Object fetchProfitabilityByRegionTotal(@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer" , required = false) String customer,
			@RequestParam(value = "region", required = false) String region) throws OTException {
		try {
			System.out.println("-------------------------------inside customers total");
			return profitabilityService.fetchProfitabilityByRegionTotal(periodicity, periodLevel, year, region, customer);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#sales.by.country.total.fetch.failed", 400);
		}
	}
	
	////////////// TOP 10 CUSTOMERS //////////////////
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
	@APIResult(message = "#profitability.by.customer.fetch.success", error_message = "#profitability.by.customer.fetch.failed")
	public Object fetchProfitabilityByTopCustomers(
			@NotNull @PathVariable("ccSortType") CCSortType ccSortType,
			@RequestParam(value = "topBy", required = false, defaultValue = "net_volume") String topBy,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year, @RequestParam(value = "region", required = false) String region)
			throws OTException {
		return profitabilityService.fetchProfitabilityByTopCustomers(periodicity, periodLevel, year, region,
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
	@APIResult(message = "#profitability.by.customer.fetch.success", error_message = "#profitability.by.customer.fetch.failed")
	public Object fetchTotalProfitabilityByTopCustomers(
			@NotNull @PathVariable("ccSortType") CCSortType ccSortType,
			@RequestParam(value = "topBy", required = false, defaultValue = "net_volume") String topBy,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year, @RequestParam(value = "region", required = false) String region)
			throws OTException {
		return profitabilityService.fetchTotalProfitabilityByTopCustomers(periodicity, periodLevel, year, region,
				topBy, ccSortType);
	}
	
}
