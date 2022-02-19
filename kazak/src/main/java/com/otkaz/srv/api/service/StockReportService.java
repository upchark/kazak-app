/**
 * 
 */
package com.otkaz.srv.api.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.otkaz.srv.dto.OcpStockDto;
import com.otkaz.srv.dto.SPDto;
import com.otkaz.srv.dto.StockReportDto;
import com.otkaz.srv.enums.StockTypes;

/**
 * @author sheen
 *
 */
@Service
public interface StockReportService {
	
	StockReportDto fetchStockReport();

	List<SPDto> fetchStockProduct(StockTypes stockType);

	StockReportDto fetchStockByProducts();

	void uploadOCPStockData(MultipartFile file1, MultipartFile file2, MultipartFile file3);

	OcpStockDto getOcpStockData();

}
