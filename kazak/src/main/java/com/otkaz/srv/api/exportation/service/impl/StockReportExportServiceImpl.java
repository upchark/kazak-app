package com.otkaz.srv.api.exportation.service.impl;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.exportation.service.StockReportExportService;
import com.otkaz.srv.api.exportation.workers.XLSXWorkerStockReport;
import com.otkaz.srv.api.service.StockReportService;
import com.otkaz.srv.dto.StockReportDto;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.utils.Utils;

/**
 * @Author Anish
 * @Date 15-Sep-2021
 *
 */
@Service(value = "stockReportExportService")
public class StockReportExportServiceImpl implements StockReportExportService {

	@Autowired
	private StockReportService stockReportService;

	@Override
	public void exportStockReportProductData(HttpServletResponse response) throws OTException {
		try {
			StockReportDto stockReportDto = stockReportService.fetchStockByProducts();
			writeToResponse(response, stockReportDto);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException(e.getMessage());
		}
	}

	/**
	 * Create excel and write to {@link HttpServletResponse}
	 * 
	 * @param response
	 * @param stockReportDto
	 * @throws OTException
	 */
	private void writeToResponse(HttpServletResponse response, StockReportDto stockReportDto) throws OTException {
		try (ServletOutputStream outStream = response.getOutputStream()) {
			response.setContentType(Utils.getMediaType("XLS"));
			String fileName = Utils.fileNameWithCurrentDateAndTime("Stock_Report_", ".xlsx");
			response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName);
			XLSXWorkerStockReport.writeExcelToStream(outStream, stockReportDto, "Stock_Report");
		} catch (Exception e) {
			throw new OTException("#report.xls.failed");
		}
	}

}
