package com.otkaz.srv.api.exportation.service;

import javax.servlet.http.HttpServletResponse;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Service;

import com.otkaz.srv.api.exportation.enums.CCReportType;
import com.otkaz.srv.api.service.CommercialControllingServiceBase;
import com.otkaz.srv.enums.CCSortType;
import com.otkaz.srv.enums.Periodicities;
import com.otkaz.srv.exception.OTException;

/**
 * @Author Anish
 * @Date 26-Aug-2021
 *
 */
@Service
public interface SalesExportService extends CommercialControllingServiceBase {

	/**
	 * 
	 * Export sales data
	 * 
	 * @param ccReportType
	 * @param periodicity
	 * @param periodLevel
	 * @param year
	 * @param region
	 * @param customer
	 * @param sortBy
	 * @param descending
	 * @param groupLevels
	 * @param response
	 * @throws OTException
	 */

	void exportSalesData(CCReportType ccReportType, Periodicities periodicity, Integer periodLevel, Integer year,
			String region, String customer, String sortBy, boolean descending, boolean groupLevels,
			HttpServletResponse response) throws OTException;

	/**
	 * Export top customers
	 * 
	 * @param periodicity
	 * @param periodLevel
	 * @param year
	 * @param region
	 * @param topBy
	 * @param ccSortType
	 * @param response
	 * @throws OTException
	 */
	void exportTopCustomers(Periodicities periodicity, Integer periodLevel, Integer year, String region, String topBy,
			@NotNull CCSortType ccSortType, HttpServletResponse response) throws OTException;

}
