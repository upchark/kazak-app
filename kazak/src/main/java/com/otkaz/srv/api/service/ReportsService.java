package com.otkaz.srv.api.service;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Service;

import com.otkaz.srv.exception.OTException;

@Service
public interface ReportsService {
	
	
	void exportZayvkasProducts(String[] plants, String[] userStatus, String fromDate, String toDate,
			HttpServletResponse response) throws OTException;

	void exportOrderbookProducts(String region, String[] plants, String[] userStatus, String fromDate, String toDate,
			HttpServletResponse response) throws OTException;

}
