package com.otkaz.srv.api.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.otkaz.srv.annotation.APIResult;
import com.otkaz.srv.api.exportation.service.StockReportExportService;
import com.otkaz.srv.exception.OTException;

/**
 * Excel export for Stock Report.
 * @Author Anish
 * @Date 15-Sep-2021
 *
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}/secure/xprt/stockReport")
public class StockReportExportController {

	@Autowired
	private StockReportExportService stockReportExportService;
	
	@RequestMapping(method = RequestMethod.GET, path = "/products")
	@APIResult(message = "#report.xls.success", error_message = "#report.xls.failed")
	public void exportStockReportData(HttpServletResponse response) throws OTException {
		try {
			stockReportExportService.exportStockReportProductData(response);
		}catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#report.xls.failed", 400);
		}
	}
	
}
