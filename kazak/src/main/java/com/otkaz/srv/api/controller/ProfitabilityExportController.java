package com.otkaz.srv.api.controller;

import javax.servlet.http.HttpServletResponse;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.otkaz.srv.annotation.APIResult;
import com.otkaz.srv.api.exportation.enums.CCReportType;
import com.otkaz.srv.api.exportation.service.ProfitabilityExportService;
import com.otkaz.srv.enums.CCSortType;
import com.otkaz.srv.enums.Periodicities;
import com.otkaz.srv.exception.OTException;

/**
 * Excel export for Commercial Controlling Profitability.
 * 
 * @Author Anish
 * @Date 01-Sep-2021
 *
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}/secure/xprt/pf")
public class ProfitabilityExportController {

	@Autowired
	private ProfitabilityExportService profitabilityExportService;

	@RequestMapping(method = RequestMethod.GET, value = "/{ccReportType}")
	@APIResult(message = "#report.xls.success", error_message = "#report.xls.failed")
	public void exportProfitabilityByType(@NotNull @PathVariable("ccReportType") CCReportType ccReportType,
			@RequestParam(value = "grp", required = false, defaultValue = "0") boolean groupLevels,
			@RequestParam(value = "sortBy", required = false, defaultValue = "PRODUCT") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year,
			@RequestParam(value = "customer", required = false) String customer,
			@RequestParam(value = "region", required = false) String region,
			@RequestParam(value = "ngtvEBITDA", required = false, defaultValue = "0") int filterNegativeEBITDA,
			HttpServletResponse response) throws OTException {
		try {
			profitabilityExportService.exportProfitabilityData(ccReportType, periodicity, periodLevel, year, region,
					customer, sortBy, descending, groupLevels, filterNegativeEBITDA, response);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#report.xls.failed", 400);
		}
	}

	/**
	 * Export list of top 10 customers with respect to the topBy column
	 * 
	 * @param ccSortType
	 * @param topBy
	 * @param periodicity
	 * @param periodLevel
	 * @param year
	 * @param region
	 * @param response
	 * @throws OTException
	 */
	@RequestMapping(method = RequestMethod.GET, value = "/customers/top/{ccSortType}")
	@APIResult(message = "#report.xls.success", error_message = "#report.xls.failed")
	public void exportTopCustomers(@NotNull @PathVariable("ccSortType") CCSortType ccSortType,
			@RequestParam(value = "topBy", required = false, defaultValue = "net_volume") String topBy,
			@RequestParam(value = "periodicity", required = false, defaultValue = "MONTHLY") Periodicities periodicity,
			@RequestParam(value = "periodLevel", required = false, defaultValue = "1") Integer periodLevel,
			@RequestParam(value = "year") Integer year, @RequestParam(value = "region", required = false) String region,
			HttpServletResponse response) throws OTException {
		try {
			profitabilityExportService.exportTopCustomers(periodicity, periodLevel, year, region, topBy, ccSortType,
					response);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#report.xls.failed", 400);
		}
	}

}
