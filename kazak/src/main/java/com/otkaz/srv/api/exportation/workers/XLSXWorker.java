package com.otkaz.srv.api.exportation.workers;

import java.io.OutputStream;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.otkaz.srv.api.exportation.annotation.ExcelBindByName;
import com.otkaz.srv.api.exportation.pojo.ExportData;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.utils.Constants;

/**
 * @Author Anish
 * @Date 31-Aug-2021
 *
 */
public class XLSXWorker {

	private static final int COLUMN_CHAR_SIZE = 20;

	private static final short FONT_SIZE = 10;

	private static final String FORMAT_STR = "#,##0";
	
	public final static String EXCEL_DATE_FORMAT_STR = "dd MMM yyyy";

	private enum FontStyle {
		BOLD_WHITE, BOLD_BLACK, NORMAL_WHITE, NORMAL_BLACK
	}

	public static <T> void writeExcelToStream(OutputStream outStream, List<T> data, T dataTotal, Class<?> dataClazz,
			List<String> headerNames, int numberOfLevels, boolean groupLevels, String[] dateFilter, String sheetName) throws OTException {

		headerNames.addAll(getHeaderNamesInOrder(dataClazz));

		List<String> methodNames = getMethodNamesInOrder(dataClazz, numberOfLevels, groupLevels);

		final int columnSize = headerNames.size();
		try (XSSFWorkbook workbook = new XSSFWorkbook()) {
			XSSFSheet sheet = createSheet(workbook, sheetName, numberOfLevels, groupLevels);
			
			if(data == null || data.isEmpty()) {
				workbook.write(outStream);
				return;
			}
			insertHeaders(sheet, getHeaderCellStyle(workbook), headerNames, getFilterDatePrettyFormated(dateFilter));

			CellStyle amountValueCellStyle = getAmountValueCellStyle(workbook, FontStyle.NORMAL_BLACK);
			CellStyle amountValueCellStyleBold = getAmountValueCellStyle(workbook, FontStyle.BOLD_BLACK);
			CellStyle valueCellStyleForTotalBold = getCellStyle(workbook, FontStyle.BOLD_BLACK, HorizontalAlignment.LEFT,
					(short) 0);
			List<CellStyle> valueCellStyleForLevels = new ArrayList<CellStyle>();
			valueCellStyleForLevels.add(getCellStyle(workbook, FontStyle.NORMAL_BLACK, HorizontalAlignment.LEFT,
					(short) 0));
			valueCellStyleForLevels.add(getCellStyle(workbook, FontStyle.NORMAL_BLACK, HorizontalAlignment.LEFT,
					(short) 2));
			valueCellStyleForLevels.add(getCellStyle(workbook, FontStyle.NORMAL_BLACK, HorizontalAlignment.LEFT,
					(short) 4));
			valueCellStyleForLevels.add(getCellStyle(workbook, FontStyle.NORMAL_BLACK, HorizontalAlignment.LEFT,
					(short) 6));

			
			int rowIndex = 2;
			for (T rowData : data) { // row
				Row row = sheet.createRow(rowIndex++);
				insertCellsToRow(row, rowData, methodNames, groupLevels, valueCellStyleForLevels, amountValueCellStyle, null);
			}

			//Adding total
			if (dataTotal != null) {
				Row totalRow = sheet.createRow(rowIndex++);
				insertCellsToRow(totalRow, dataTotal, methodNames, groupLevels, valueCellStyleForLevels,
						amountValueCellStyleBold, valueCellStyleForTotalBold);
				if (!groupLevels) {
					// Merge header columns to show TOTAL text in this
					sheet.addMergedRegion(new CellRangeAddress(rowIndex - 1, rowIndex - 1, 0, numberOfLevels - 1));
				}
			}

			for (int cellNum = groupLevels ? 1 : numberOfLevels; cellNum <= columnSize; cellNum++) {
				sheet.setColumnWidth(cellNum, COLUMN_CHAR_SIZE * 256);
			}
			if (groupLevels) {
				// Group hierarchy rows
				final int totalRows = data.size();
				int dataRowIndex = 2;
				for (int i = 0; i < totalRows; i++) {
					dataRowIndex++; // Incrementing sheet row index, as only need to group its child
					ExportData levelInfoData = (ExportData) data.get(i);
					long count = 0;
					switch (levelInfoData.getLevelIndex()) { // Excel 1208, АКЦИОНЕРНОЕ ОБЩЕСТВО
					case 1:
						count = data.stream().map(item -> (ExportData) item)
								.filter(item -> (item.getLevel1Name() == null && levelInfoData.getLevel1Name() == null)
										|| (item.getLevel1Name() != null
												&& item.getLevel1Name().equals(levelInfoData.getLevel1Name())))
								.count() - 1;
						break;
					case 2:

						count = data.stream().map(item -> (ExportData) item)
								.filter(item -> ((item.getLevel1Name() == null && levelInfoData.getLevel1Name() == null)
										|| (item.getLevel1Name() != null
												&& item.getLevel1Name().equals(levelInfoData.getLevel1Name())))
										&& ((item.getLevel2Name() == null && levelInfoData.getLevel2Name() == null)
												|| (item.getLevel2Name() != null && item.getLevel2Name()
														.equals(levelInfoData.getLevel2Name()))))
						.count() - 1;
						break;
					case 3:
						count = data.stream().map(item -> (ExportData) item)
								.filter(item -> ((item.getLevel1Name() == null && levelInfoData.getLevel1Name() == null)
										|| (item.getLevel1Name() != null
												&& item.getLevel1Name().equals(levelInfoData.getLevel1Name())))
										&& ((item.getLevel2Name() == null && levelInfoData.getLevel2Name() == null)
												|| (item.getLevel2Name() != null
														&& item.getLevel2Name().equals(levelInfoData.getLevel2Name())))
										&& ((item.getLevel3Name() == null && levelInfoData.getLevel3Name() == null)
												|| (item.getLevel3Name() != null
														&& item.getLevel3Name().equals(levelInfoData.getLevel3Name()))))
								.count() - 1;
						break;
					default:
						break;
					}
					if (count > 0) {
						sheet.getRow(dataRowIndex).getCTRow().setCollapsed(true); // Fix to apache poi collapse issue
						sheet.groupRow(dataRowIndex, (dataRowIndex + (int) count) - 1);
						sheet.setRowGroupCollapsed(dataRowIndex, true);
					}
				}
			}
			workbook.write(outStream);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#report.xls.failed");
		}
	}
	
	private static String getFilterDatePrettyFormated(String[] filterDatePeriod) {
		SimpleDateFormat sdf = new SimpleDateFormat(EXCEL_DATE_FORMAT_STR);
		SimpleDateFormat sdfIn = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
		try {
			return sdf.format(sdfIn.parse(filterDatePeriod[0])) + " - " + sdf.format(sdfIn.parse(filterDatePeriod[1]));
		} catch (ParseException e) {
			return filterDatePeriod[0] + " - " + filterDatePeriod[1];
		}
	}

	private static <T> void insertCellsToRow(Row row, T rowData, List<String> methodNames, boolean groupLevels,
			List<CellStyle> valueCellStyleForLevels, CellStyle amountValueCellStyle, CellStyle cellStyle) throws Exception {
		int cellStartFrom = 0;
		if (groupLevels) {
			cellStartFrom = 1;
			ExportData exportData = (ExportData) rowData;
			Cell cellZero = row.createCell(0);
			Method method = rowData.getClass().getMethod("getLevel" + exportData.getLevelIndex() + "Name");
			Object value = method.invoke(rowData);
			cellZero.setCellValue((value != null) ? value.toString() : "");
			cellZero.setCellStyle(cellStyle != null? cellStyle: valueCellStyleForLevels.get(exportData.getLevelIndex() - 1));
		}
		final int methodCount = methodNames.size();
		for (int cellNum = 0; cellNum < methodCount; cellNum++) {// column
			Method method = rowData.getClass().getMethod(methodNames.get(cellNum));
			Object value = method.invoke(rowData);
			Cell cell = row.createCell(cellStartFrom + cellNum);
			if (method.getReturnType() == BigDecimal.class) {
				cell.setCellValue(value != null? Double.valueOf(value.toString()): 0);
				cell.setCellStyle(amountValueCellStyle);
			} else {
				cell.setCellValue((value != null) ? value.toString() : "");
				cell.setCellStyle(cellStyle != null? cellStyle: valueCellStyleForLevels.get(0));
			}
		}
	}

	private static XSSFCellStyle getCellStyle(XSSFWorkbook workbook, FontStyle fontStyle, HorizontalAlignment hAlign,
			short indent) {
		XSSFCellStyle cellStyle = workbook.createCellStyle();
		cellStyle.setBorderTop(BorderStyle.THIN);
		cellStyle.setBorderRight(BorderStyle.THIN);
		cellStyle.setBorderBottom(BorderStyle.THIN);
		cellStyle.setBorderLeft(BorderStyle.THIN);
		final short colorIndex = IndexedColors.GREY_80_PERCENT.getIndex();
		cellStyle.setTopBorderColor(colorIndex);
		cellStyle.setRightBorderColor(colorIndex);
		cellStyle.setBottomBorderColor(colorIndex);
		cellStyle.setLeftBorderColor(colorIndex);
		cellStyle.setFont(getFont(workbook, fontStyle));
		cellStyle.setAlignment(hAlign);
		if (indent > 0)
			cellStyle.setIndention(indent);
		cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
		return cellStyle;
	}

	/**
	 * Returns list contains header names wrt the {@link ExcelBindByName} field
	 * annotation applied over the field definition.
	 * 
	 * @param clazz
	 * @return
	 */
	private static List<String> getHeaderNamesInOrder(Class<?> clazz) {
		return Arrays.stream(clazz.getDeclaredFields()).filter(f -> f.getAnnotation(ExcelBindByName.class) != null)
				.sorted(Comparator.comparing(f -> f.getAnnotation(ExcelBindByName.class).position()))
				.map(f -> f.getAnnotation(ExcelBindByName.class).name()).collect(Collectors.toList());
	}

	/**
	 * Returns list contains method names wrt the {@link ExcelBindByName} field
	 * annotation applied over the field definition.
	 * 
	 * @param clazz
	 * @return
	 */
	private static List<String> getMethodNamesInOrder(Class<?> clazz, int numberOfLevels, boolean groupLevels) {
		List<String> methodNames = new ArrayList<String>();
		if (!groupLevels) { // In case no grouping we need get for level1Name, level2Name, ....
			for (int i = 1; i <= numberOfLevels; i++) {
				methodNames.add("getLevel" + i + "Name");
			}
		}
		methodNames.addAll(
				Arrays.stream(clazz.getDeclaredFields()).filter(f -> f.getAnnotation(ExcelBindByName.class) != null)
				.sorted(Comparator.comparing(f -> f.getAnnotation(ExcelBindByName.class).position()))
				.map(f -> f.getAnnotation(ExcelBindByName.class).methodName()).collect(Collectors.toList()));
		return methodNames;
	}

	private static XSSFSheet createSheet(XSSFWorkbook workbook, String sheetName, int numberOfLevels, boolean groupLevels) {
		XSSFSheet sheet = workbook.createSheet(sheetName);
		sheet.setColumnWidth(0, 35 * 256);
		for (int i = 1; (i < numberOfLevels && !groupLevels); i++) {
			sheet.setColumnWidth(i, 25 * 256);
		}
		sheet.setRowSumsBelow(false);
		return sheet;
	}

	private static void insertHeaders(Sheet sheet, CellStyle headerCellStyle, List<String> headers, String dateFilter) {
		Row filterRow = sheet.createRow(0);
		final int size = headers.size();
		Cell cell = filterRow.createCell(0);
		cell.setCellValue(dateFilter);
		cell.setCellStyle(headerCellStyle);
		sheet.addMergedRegion(new CellRangeAddress(0, 0, 0, size - 1));
		Row headerRow = sheet.createRow(1);
		for (int cellNum = 0; cellNum < size; cellNum++) {
			Cell headerCell = headerRow.createCell(cellNum);
			headerCell.setCellValue(headers.get(cellNum));
			headerCell.setCellStyle(headerCellStyle);
		}
	}

	private static CellStyle getHeaderCellStyle(Workbook workbook) {
		CellStyle headerCellStyle = workbook.createCellStyle();
		headerCellStyle.setFont(getHeaderFont(workbook));
		headerCellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
		headerCellStyle.setFillForegroundColor(IndexedColors.LIGHT_ORANGE.getIndex());
		headerCellStyle.setAlignment(HorizontalAlignment.CENTER);
		return headerCellStyle;
	}

	private static Font getHeaderFont(Workbook workbook) {
		Font headerFont = workbook.createFont();
		headerFont.setFontHeightInPoints(FONT_SIZE);
		headerFont.setBold(true);
		headerFont.setColor(IndexedColors.WHITE.getIndex());
		return headerFont;
	}

	private static CellStyle getAmountValueCellStyle(XSSFWorkbook workbook, FontStyle fontStyle) {
		CellStyle cellStyle = getCellStyle(workbook, fontStyle, HorizontalAlignment.RIGHT, (short) 0);
		DataFormat format = workbook.createDataFormat();
		cellStyle.setDataFormat(format.getFormat(FORMAT_STR));
		return cellStyle;
	}

	private static Font getFont(Workbook workbook, FontStyle fontStyle) {
		Font font = workbook.createFont();
		font.setFontHeightInPoints(FONT_SIZE);
		switch (fontStyle) {
		case BOLD_WHITE:
			font.setBold(true);
			font.setColor(IndexedColors.WHITE.getIndex());
			break;
		case BOLD_BLACK:
			font.setBold(true);
			break;
		case NORMAL_WHITE:
			font.setColor(IndexedColors.WHITE.getIndex());
			break;
		default:
			break;
		}
		return font;
	}

}
