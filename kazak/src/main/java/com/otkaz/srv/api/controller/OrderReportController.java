package com.otkaz.srv.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.otkaz.srv.annotation.APIResult;
import com.otkaz.srv.api.service.OrderReportService;
import com.otkaz.srv.exception.OTException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}/secure/orderReport")
public class OrderReportController {

	@Autowired
	private OrderReportService orderReportService;

	@RequestMapping(value = "/regions", method = RequestMethod.GET)
	@APIResult(message = "#order.regions.fetch.success", error_message = "#order.regions.fetch.failed")
	public Object fetchRegions() throws OTException {
		return orderReportService.fetchRegions();
	}

	@RequestMapping(value = "/plants", method = RequestMethod.GET)
	@APIResult(message = "#order.regions.fetch.success", error_message = "#order.regions.fetch.failed")
	public Object fetchPlants() throws OTException {
		return orderReportService.fetchPlants();
	}
	

	
	@RequestMapping(method = RequestMethod.GET, path = "/products")
	@APIResult(message = "#order.report.product.fetch.success", error_message = "#order.report.product.fetch.failed")
	public Object fetchOrdersByProducts(@RequestParam(value = "region", required = false) String region,@RequestParam(value = "plants", required = false) String[] plants,
			@RequestParam(value = "fromDate") String fromDate,
			@RequestParam(value = "toDate") String toDate) throws OTException {
		try {
			return orderReportService.fetchOrdersByProducts(region, plants, fromDate, toDate);
		}catch (Exception e) {
			throw e;
		}
	}

	@RequestMapping(method = RequestMethod.GET, path = "/zayvkas/products")
	@APIResult(message = "#zayvkas.report.product.fetch.success", error_message = "#zayvkas.report.product.fetch.failed")
	public Object fetchOrdersByZayvkasProducts(@RequestParam(value = "plants", required = false) String[] plants,
			@RequestParam(value = "fromDate") String fromDate,
			@RequestParam(value = "toDate") String toDate, @RequestParam(value = "usersts", required = false) String[] userStatus) throws OTException {
		try {
			return orderReportService.fetchOrdersByZayvkasProducts(plants, fromDate, toDate, userStatus);
		}catch (Exception e) {
			throw e;
		}
	}
	
	@RequestMapping(value = "/zayvkas/plants", method = RequestMethod.GET)
	@APIResult(message = "#order.regions.fetch.success", error_message = "#order.regions.fetch.failed")
	public Object fetchZayvkasPlants() throws OTException {
		return orderReportService.fetchZayvkasPlants();
	}
	
	@RequestMapping(value = "/zayvkas/usersts", method = RequestMethod.GET)
	@APIResult(message = "#order.regions.fetch.success", error_message = "#order.regions.fetch.failed")
	public Object fetchUserStatus() throws OTException {
		return orderReportService.fetchUserStatus();
	}
	
}
