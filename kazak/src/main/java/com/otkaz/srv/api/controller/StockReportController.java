package com.otkaz.srv.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.otkaz.srv.annotation.APIResult;
import com.otkaz.srv.api.service.StockReportService;
import com.otkaz.srv.exception.OTException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}/secure/stockReport")
public class StockReportController {

	@Autowired
	private StockReportService stockReportService;

	
	@RequestMapping(method = RequestMethod.GET, path = "/products")
	@APIResult(message = "#order.report.product.fetch.success", error_message = "#order.report.product.fetch.failed")
	public Object fetchOrdersByProducts() throws OTException {
		try {
			return stockReportService.fetchStockByProducts();
		}catch (Exception e) {
			throw e;
		}
	}
	
	@RequestMapping(path = "/uploadStockData", method = RequestMethod.POST)
	@APIResult(message = "Data uploaded successfully", error_message = "Failed to upload data")
	public Object uploadOCPStockData(@RequestPart(name = "file") MultipartFile file) {
		stockReportService.uploadOCPStockData(file, null, null);
		return "Data uploaded successfully";
	}
	
	@RequestMapping(path = "/getOcpStockData", method = RequestMethod.GET)
	@APIResult(message = "Data collected successfully", error_message = "Failed to collect data")
	public Object getOCPStockData() {
		return stockReportService.getOcpStockData();
	}
	
}
