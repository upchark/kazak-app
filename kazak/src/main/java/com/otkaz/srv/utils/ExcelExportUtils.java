package com.otkaz.srv.utils;

import java.io.OutputStream;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFFont;

import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvBindByPosition;
import com.otkaz.srv.annotation.ExcelBindByPosition;
import com.otkaz.srv.dto.excel.SummaryExcelDto;
import com.otkaz.srv.exception.OTException;

public class ExcelExportUtils {

	private static final int FIXED_COLUMN_WIDTH = 15;

	private static final String SHEET_NAME_1 = "Summary";

	private static final String SHEET_NAME_2 = "Data";
	
	private static final String FORMAT_STR = "#,##0";

	public static <T> void getExcelStream(OutputStream outStream, List<T> data, Class<?> dataClazz, Class<?> summaryClazz, 
			SummaryExcelDto summarySheet) throws OTException {
		
		List<String> headers = getHeadersInOrder(dataClazz);
		List<String> methods = getMethodNamesInOrder(dataClazz);
		
		List<String> firstSheetHeaders = getHeadersInOrder(summaryClazz);
		List<String> firstSheetMethod = getMethodNamesInOrder(summaryClazz);
		
		if (headers.size() != methods.size())
			throw new OTException("#report.xls.failed");
		try (Workbook workbook = new HSSFWorkbook();) {
			
			// For sheet data
			Sheet sheet = createSheet(workbook);
			insertHeaders(sheet, getHeaderCellStyle(workbook), headers);
			DataFormat format = workbook.createDataFormat();
			int rowIndex = 1;
			CellStyle valueCellStyle = getValueCellStyle(workbook);
			CellStyle amountValueCellStyle = getAmountValueCellStyle(workbook);
			CellStyle totalCellStyle = getTotalValueCellStyle(workbook);
			CellStyle totalAmountCellStyle = getTotalAmountCellStyle(workbook);
			amountValueCellStyle.setDataFormat(format.getFormat(FORMAT_STR));
			
			final int methodCount = methods.size();
			NumberFormat nf = getUSNumberFormat();
			boolean isTotal  = false;
			for (T rowData : data) { //row
				Row row = sheet.createRow(rowIndex++);	
				isTotal  = false;
				for (int cellNum = 0; cellNum < methodCount; cellNum++) {//column
					Method method = rowData.getClass().getMethod(methods.get(cellNum));
					Object value = method.invoke(rowData);
					
					Cell cell = row.createCell(cellNum);	
					if (method.getReturnType() == BigDecimal.class) {
						cell.setCellValue(Double.valueOf(value ==null? "0" : value.toString()));
						if(isTotal) {
							cell.setCellStyle(totalAmountCellStyle);
						}else {
							cell.setCellStyle(amountValueCellStyle);
						}
					} else {
						cell.setCellValue((value != null) ? value.toString() : "");
						if(value.toString().contains("TOTAL")) {
							cell.setCellStyle(totalCellStyle);
							isTotal = true;
						}else {
							cell.setCellStyle(valueCellStyle);
						}
					}
				}
			}

			// For sheet Summary
			Sheet firstSheet = createFirstSheet(workbook);
			final int fs_methodCount = firstSheetMethod.size();
			CellStyle fs_column_valueCellStyle = null;
			CellStyle fs_valueCellStyle = getValueCellStyle(workbook);
			firstSheet.setColumnWidth(0, 25 * 256);
			for (int cellNum = 0; cellNum < fs_methodCount; cellNum++) {
				firstSheet.autoSizeColumn(cellNum);
				Row fs_row = firstSheet.createRow(cellNum);
				String valueFirstCell = firstSheetHeaders.get(cellNum);
				Method method = null;
				Object value = null;

				if (summarySheet != null) {
					method = summarySheet.getClass().getMethod(firstSheetMethod.get(cellNum));
					value = method.invoke(summarySheet);
				}

				fs_column_valueCellStyle = getValueCellStyleCustom(workbook, cellNum);
				Cell cell_zero = fs_row.createCell(0);
				Cell cell = fs_row.createCell(1);

				if (value != null) {
					cell_zero.setCellValue((valueFirstCell != null) ? valueFirstCell.toString() : "");
					cell_zero.setCellStyle(fs_column_valueCellStyle);

					cell.setCellValue((value != null) ? value.toString() : "");
					cell.setCellStyle(fs_valueCellStyle);
				}
			}
			workbook.write(outStream);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#report.xls.failed");
		}
	}

	private static NumberFormat getUSNumberFormat() {
		NumberFormat nf = NumberFormat.getNumberInstance(new Locale("en", "US"));
		nf.setMinimumFractionDigits(2);
		nf.setMaximumFractionDigits(2);
		return nf;
	}

	private static List<String> getHeadersInOrder(Class<?> clazz) {
		return Arrays.stream(clazz.getDeclaredFields())
				.filter(f -> f.getAnnotation(CsvBindByPosition.class) != null
						&& f.getAnnotation(CsvBindByName.class) != null)
				.sorted(Comparator.comparing(f -> f.getAnnotation(CsvBindByPosition.class).position()))
				.map(f -> f.getAnnotation(CsvBindByName.class).column()).collect(Collectors.toList());
	}

	private static List<String> getMethodNamesInOrder(Class<?> clazz) {
		return Arrays.stream(clazz.getDeclaredMethods()).filter(f -> f.getAnnotation(ExcelBindByPosition.class) != null)
				.sorted(Comparator.comparing(f -> f.getAnnotation(ExcelBindByPosition.class).position()))
				.map(f -> f.getName()).collect(Collectors.toList());
	}

	private static Sheet createFirstSheet(Workbook workbook) {
		Sheet sheet = workbook.createSheet(SHEET_NAME_1);
		IntStream.range(0, 2).forEach(i -> sheet.autoSizeColumn(i));
		return sheet;
	}

	private static Sheet createSheet(Workbook workbook) {
		Sheet sheet = workbook.createSheet(SHEET_NAME_2);
		sheet.setDefaultColumnWidth(FIXED_COLUMN_WIDTH);
		return sheet;
	}

	private static void insertHeaders(Sheet sheet, CellStyle headerCellStyle, List<String> headers) {
		Row headerRow = sheet.createRow(0);
		for (int cellNum = 0; cellNum < headers.size(); cellNum++) {
			Cell cell = headerRow.createCell(cellNum);
			cell.setCellValue(headers.get(cellNum));
			cell.setCellStyle(headerCellStyle);
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
		headerFont.setFontHeightInPoints((short) 10);
		headerFont.setBold(true);
		headerFont.setColor(IndexedColors.WHITE.getIndex());
		return headerFont;
	}

	private static CellStyle getAmountValueCellStyle(Workbook workbook) {
		CellStyle valueCellStyle = workbook.createCellStyle();
		valueCellStyle.setFont(getValueFont(workbook));
		valueCellStyle.setAlignment(HorizontalAlignment.RIGHT);
		return valueCellStyle;
	}
	
	private static CellStyle getTotalValueCellStyle(Workbook workbook) {
		CellStyle valueCellStyle = workbook.createCellStyle();
		
		    Font defaultFont=  workbook.createFont();
		    defaultFont.setFontHeightInPoints((short)10);
		    defaultFont.setFontName("Arial");
		    defaultFont.setColor(IndexedColors.BLACK.getIndex());
		    defaultFont.setBold(false);
		    defaultFont.setItalic(false);

		    Font font= workbook.createFont();
		    font.setFontHeightInPoints((short)10);
		    font.setFontName("Arial");
		    font.setColor(IndexedColors.BLACK.getIndex());
		    font.setBold(true);
		    font.setItalic(false);
			valueCellStyle.setAlignment(HorizontalAlignment.LEFT);
			valueCellStyle.setFillForegroundColor(IndexedColors.SKY_BLUE.index);
			  // and solid fill pattern produces solid grey cell fill
			valueCellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
		valueCellStyle.setFont(font);

		return valueCellStyle;
	}

	private static CellStyle getTotalAmountCellStyle(Workbook workbook) {
		CellStyle valueCellStyle = workbook.createCellStyle();
		
		    Font defaultFont=  workbook.createFont();
		    defaultFont.setFontHeightInPoints((short)10);
		    defaultFont.setFontName("Arial");
		    defaultFont.setColor(IndexedColors.BLACK.getIndex());
		    defaultFont.setBold(false);
		    defaultFont.setItalic(false);

		    Font font= workbook.createFont();
		    font.setFontHeightInPoints((short)10);
		    font.setFontName("Arial");
		    font.setColor(IndexedColors.BLACK.getIndex());
		    font.setBold(true);
		    font.setItalic(false);
		valueCellStyle.setFont(font);
		valueCellStyle.setAlignment(HorizontalAlignment.LEFT);
		valueCellStyle.setFillForegroundColor(IndexedColors.SKY_BLUE.index);
		  // and solid fill pattern produces solid grey cell fill
		valueCellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
		valueCellStyle.setAlignment(HorizontalAlignment.RIGHT);
		return valueCellStyle;
	}

	
	private static CellStyle getValueCellStyle(Workbook workbook) {
		CellStyle valueCellStyle = workbook.createCellStyle();
		valueCellStyle.setFont(getValueFont(workbook));
		return valueCellStyle;
	}

	private static Font getValueFont(Workbook workbook) {
		Font valueFont = workbook.createFont();
		valueFont.setFontHeightInPoints((short) 10);
		return valueFont;
	}

	private static CellStyle getValueCellStyleCustom(Workbook workbook, int cellValue) {
		CellStyle valueCellStyle = workbook.createCellStyle();
		valueCellStyle.setFont(getValueFontCustom(workbook, cellValue));
		return valueCellStyle;
	}

	private static Font getValueFontCustom(Workbook workbook, int cellValue) {
		Font valueFont = workbook.createFont();
		valueFont.setFontHeightInPoints((short) 10);
		Boolean value = cellValue > 4 ? false : true;
		valueFont.setBold(value);
		return valueFont;
	}

}
