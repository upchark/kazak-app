/**
 * 
 */
package com.otkaz.srv.api.exportation.service;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;

import com.otkaz.srv.exception.OTException;

/**
 * @Author Anish
 * @Date 15-Sep-2021
 *
 */
@Service
public interface StockReportExportService {
	
	/**
	 * 
	 * Export Stock Report data
	 * 
	 * @param response
	 * @throws OTException
	 */
	void exportStockReportProductData(HttpServletResponse response) throws OTException;

}
