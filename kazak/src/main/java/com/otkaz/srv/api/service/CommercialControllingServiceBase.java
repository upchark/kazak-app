package com.otkaz.srv.api.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.util.StringUtils;

import com.otkaz.srv.api.exportation.Exportation;
import com.otkaz.srv.api.exportation.workers.XLSXWorker;
import com.otkaz.srv.enums.Periodicities;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.utils.DateUtils;
import com.otkaz.srv.utils.Utils;

/**
 * Base service with common implementations
 * 
 * @Author Anish
 * @Date 07-Sep-2021
 *
 */
public interface CommercialControllingServiceBase {
	
	final int TOP_CUSTOMER_LIMIT = 10;

	/**
	 * 
	 * Build select query wrt the level and class field names
	 * 
	 * @param tableName
	 * @param aggregateColumnStatement
	 * @param subQueryAggregateColumnStatement
	 * @param aggregateColumnNames
	 * @param clazz
	 * @param numberOfLevels
	 * @param whereClause
	 * @param orderBy
	 * @param descending
	 * @param groupLevels
	 * @param filterNegativeEBITDA
	 * @return
	 */
	default String buildExportDataRetrievalQuery(String tableName, String aggregateColumnStatement, String subQueryAggregateColumnStatement,
			String[] aggregateColumnNames, Class<?> clazz, int numberOfLevels, String whereClause, String orderBy,
			boolean descending, boolean groupLevels, Integer filterNegativeEBITDA) throws OTException {
		StringBuilder query = new StringBuilder();
		try {
			StringBuilder groupBy = new StringBuilder();
			StringBuilder commaSeparatedLevelAlias = new StringBuilder();
			query.append("WITH DATASET AS (SELECT ");
			// Build select columns wrt numberOfLevels for the class
			for (int i = 1; i <= Exportation.MAX_HIERARCHY_LEVELS; i++) {
				if (i <= numberOfLevels) {
					final String columnName = clazz.getField("LEVEL_" + i).get(clazz).toString();
					query.append("CASE WHEN TRIM(").append(columnName).append(") IS NULL OR ").append(columnName)
							.append(" IS NULL THEN 'UNKNOWN' ELSE ").append("CAST(TRIM(").append(columnName)
							.append(") as VARCHAR2(200)) END AS level").append(i).append("Name, ");
					groupBy.append(columnName).append(",");
				} else {
					query.append("CAST(' ' AS VARCHAR2(200)) AS level").append(i).append("Name, ");
				}
				commaSeparatedLevelAlias.append("level").append(i).append("Name, ");
			}
			// Deleting last comma char
			groupBy.deleteCharAt(groupBy.length() - 1);
			query.append(numberOfLevels).append(" AS levelIndex, 1 AS sortOrder, ").append(aggregateColumnStatement)
					.append(" FROM ").append(tableName).append(whereClause).append(" GROUP BY ").append(groupBy)
					.append((filterNegativeEBITDA == 1)? " HAVING SUM(NVL(EBITDA_AMT, 0)) < 0 " : "")
					.append(") SELECT ").append(commaSeparatedLevelAlias).append("levelIndex, sortOrder, ")
					.append(Arrays.stream(aggregateColumnNames).collect(Collectors.joining(", ")))
					.append(" FROM DATASET ");
			// Building union statements if any
			if (groupLevels) {
				for (int i = 1; i < numberOfLevels; i++) {
					query.append(" UNION ALL SELECT ");
					StringBuilder levelGroupBy = new StringBuilder();
					for (int j = 1; j <= i; j++) {
						query.append("level").append(j).append("Name, ");
						levelGroupBy.append("level").append(j).append("Name,");
					}
					levelGroupBy.deleteCharAt(levelGroupBy.length() - 1);
					for (int j = (i + 1); j <= Exportation.MAX_HIERARCHY_LEVELS; j++) {
						// Add null value columns
						query.append("CAST(' ' AS VARCHAR2(200)) AS level").append(j).append("Name, ");
					}
					query.append(i).append(" AS levelIndex, 0 AS sortOrder, ").append(subQueryAggregateColumnStatement);
//					for (String name : aggregateColumnNames) {
//						query.append("SUM(").append(name).append(") AS ").append(name).append(",");
//					}
//					query.deleteCharAt(query.length() - 1);
					query.append(" FROM DATASET GROUP BY ").append(levelGroupBy);
				}
				query.append(" ORDER BY ").append(commaSeparatedLevelAlias).append(" sortOrder ASC");
			} else {
				// Replace sort field name wrt the alias used on the constructed query
				for (int i = 1; i <= numberOfLevels; i++) {
					final String columnName = clazz.getField("LEVEL_" + i).get(clazz).toString();
					if (columnName.equalsIgnoreCase(orderBy)) {
						orderBy = "level" + i + "Name";
						break;
					}
				}
				query.append(" ORDER BY ").append(orderBy).append(descending ? " DESC" : " ASC");
			}
		} catch (Exception e) {
			throw new OTException(e.getMessage());
		}
		return query.toString();
	};
	
	/**
	 * Get the date period from and two depending on the periodicity, level and year
	 * parameters. A string array with length 2 will be returned with 0th index with
	 * from date and 1 index with to date values
	 * 
	 * @param periodicity
	 * @param periodLevel
	 * @param year
	 * @return String[2] with From Date and To Date
	 */
	default String[] getFilterDatePeriods(Periodicities periodicity, Integer periodLevel, Integer year) {
		String[] filterDatePeriod = new String[2];
		switch (periodicity) {
		case DAILY:
			filterDatePeriod[0] = DateUtils.getDailyDate(year, periodLevel);
			filterDatePeriod[1] = DateUtils.getDailyDate(year, periodLevel);
			break;
		case WEEKLY:
			filterDatePeriod[0] = DateUtils.getWeeklyFromDate(year, periodLevel);
			filterDatePeriod[1] = DateUtils.getWeeklyToDate(year, periodLevel);
			break;
		case MONTHLY:
			filterDatePeriod[0] = DateUtils.getMonthlyFromDate(year, periodLevel);
			filterDatePeriod[1] = DateUtils.getMonthlyToDate(year, periodLevel);
			break;
		case QUARTERLY:
			filterDatePeriod[0] = DateUtils.getQuarterlyFromDate(year, periodLevel);
			filterDatePeriod[1] = DateUtils.getQuarterlyToDate(year, periodLevel);
			break;
		case HALF_YEARLY:
			filterDatePeriod[0] = DateUtils.getHalfYearlyFromDate(year, periodLevel);
			filterDatePeriod[1] = DateUtils.getHalfYearlyToDate(year, periodLevel);
			break;
		case YEARLY:
			filterDatePeriod[0] = DateUtils.getYearlyFromDate(year);
			filterDatePeriod[1] = DateUtils.getYearlyToDate(year);
			break;
		default:
			filterDatePeriod[0] = DateUtils.getYearlyFromDate(year);
			filterDatePeriod[1] = DateUtils.getYearlyToDate(year);
			break;
		}
		return filterDatePeriod;
	}
	
	/**
	 * Prepare and return where condition for the Commercial Controlling Sales and
	 * Profitability export query
	 * 
	 * @param dateFilter Expecting String[2].
	 * @param region
	 * @param clazz
	 * @param numberOfLevels
	 * @return
	 */
	default String buildWhereClauseForCommercialControlling(String[] dateFilter, String region, String customer, Class<?> clazz, int numberOfLevels) throws OTException{
		if(dateFilter == null || dateFilter.length != 2) throw new OTException("Invalid filter date duration");
		 
		StringBuilder whereClause = new StringBuilder();
		whereClause.append(" WHERE TO_DATE(BILL_DATE, 'YYYYMMDD')  BETWEEN TO_DATE('").append(dateFilter[0])
				.append("', 'DD/MM/YYYY') AND TO_DATE('").append(dateFilter[1]).append("', 'DD/MM/YYYY') ");
		if (StringUtils.hasText(region)) {
			whereClause.append("AND LOWER(REGION) = '").append(region.toLowerCase()).append("' ");
		}
		if (StringUtils.hasText(customer)) {

			whereClause.append("AND CUSTOMER_NAME = '").append(customer).append("' ");
		}
//		for (int i = 1; i <= numberOfLevels; i++) {
//			try {
//				String columnName = clazz.getField("LEVEL_" + i).get(clazz).toString();
//				whereClause.append("AND ").append(columnName).append(" IS NOT NULL ");
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		}
		return whereClause.toString();
	}

	/**
	 * Return the list of header to be appended in the query with respect to the
	 * grouping
	 * 
	 * @param groupLevels
	 * @param numberOfLevels
	 * @param clazz
	 * @return
	 */
	default List<String> buildHeaderNames(boolean groupLevels, int numberOfLevels, Class<?> clazz) {
		List<String> headerNames = new ArrayList<String>();
		for (int i = 1; i <= numberOfLevels; i++) {
			try {
				headerNames.add(clazz.getField("NAME_" + i).get(clazz).toString());
			} catch (Exception e) {
				e.printStackTrace();
			}
			// Break on first level if report is grouped as we don't writing
			// each level as separate column;
			if (groupLevels && i == 1)
				break;
		}
		return headerNames;
	}
	
	/**
	 * Method convert API sort column to query sort column
	 * 
	 * @param field
	 * @param apiFields
	 * @param queryFields
	 * @return
	 */
	default String convertToQueryField(String field, List<String> apiFields, List<String> queryFields) {
		int index = apiFields.indexOf(field);
		String converted = queryFields.get(index == -1? 0: index);
		if (!StringUtils.hasText(converted))
			converted = queryFields.get(0);
		return converted;
	}

	/**
	 * Write Excel to {@link HttpServletResponse}
	 * 
	 * @param response
	 * @param data
	 * @param total
	 * @param dataClazz
	 * @param headerNames
	 * @param numberOfLevels
	 * @param groupLevels
	 * @param filePrefix
	 * @throws OTException
	 */
	default <T> void writeToResponse(HttpServletResponse response, List<T> data, T dataTotal, Class<?> dataClazz,
			List<String> headerNames, int numberOfLevels, boolean groupLevels, String filePrefix, String sheetName, String[] dateFilter) throws OTException {
		try (ServletOutputStream outStream = response.getOutputStream()) {
			response.setContentType(Utils.getMediaType("XLS"));
			String fileName = Utils.fileNameWithCurrentDateAndTime(filePrefix, ".xlsx");
			response.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName);
			XLSXWorker.writeExcelToStream(outStream, data, dataTotal, dataClazz, headerNames, numberOfLevels, groupLevels, dateFilter, sheetName);
		} catch (Exception e) {
			throw new OTException("#report.xls.failed");
		}
	}
}
