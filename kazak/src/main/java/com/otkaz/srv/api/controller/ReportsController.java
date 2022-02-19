package com.otkaz.srv.api.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.otkaz.srv.annotation.APIResult;
import com.otkaz.srv.api.service.ReportsService;
import com.otkaz.srv.exception.OTException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}/secure/reports")
public class ReportsController {

	@Autowired
	private ReportsService reportsService;

	@RequestMapping(method = RequestMethod.GET, path = "/orderbook/products")
	@APIResult(message = "#report.xls.success", error_message = "#report.xls.failed")
	public void exportOrderbookProducts(@RequestParam(value = "region", required = false) String region,@RequestParam(value = "plants", required = false) String[] plants,
			@RequestParam(value = "fromDate") String fromDate,
			@RequestParam(value = "toDate") String toDate,
			HttpServletResponse response,@RequestParam(value = "usersts", required = false) String[] userStatus) throws OTException {
		try {
			reportsService.exportOrderbookProducts(region,plants,userStatus, fromDate, toDate, response);
		}catch (Exception e) {
			e.printStackTrace(); 
			throw e;
		}
	}

	@RequestMapping(method = RequestMethod.GET, path = "/zayvkas/products")
	@APIResult(message = "#report.xls.success", error_message = "#report.xls.failed")
	public void exportZayvkasProducts(@RequestParam(value = "plants", required = false) String[] plants,
			@RequestParam(value = "fromDate") String fromDate,
			@RequestParam(value = "toDate") String toDate,
			HttpServletResponse response, @RequestParam(value = "usersts", required = false) String[] userStatus) throws OTException {
		try {
			reportsService.exportZayvkasProducts(plants, userStatus, fromDate, toDate, response);
		}catch (Exception e) {
			throw e;
		}
	}

}
