package com.otkaz.srv.api.exportation.workers;

import java.awt.Color;
import java.io.OutputStream;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
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
import org.apache.poi.xssf.usermodel.XSSFColor;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.otkaz.srv.api.exportation.annotation.ExcelBindByName;
import com.otkaz.srv.dto.SPDto;
import com.otkaz.srv.dto.StockReportDto;
import com.otkaz.srv.exception.OTException;

/**
 * @Author Anish
 * @Date 15-Sep-2021
 *
 */
public class XLSXWorkerStockReport {

	private static final short FONT_SIZE = 10;

	private enum FontStyle {
		BOLD_WHITE, BOLD_BLACK, NORMAL_WHITE, NORMAL_BLACK
	}

	private enum HeaderSpec {

		ROW1_COLUMN1("Product", 1, 1, 10, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN2("", 0, 0, 20, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN3("", 5, 0, 10, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN4("", 0, 0, 10, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN5("", 0, 0, 10, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN6("", 0, 0, 15, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN7("", 0, 0, 15, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN8("", 0, 0, 15, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN9("Grand Total", 0, 1, 15, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN10("Grand Total", 1, 0, 20, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN11("", 0, 0, 20, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN12("Grand Total", 1, 0, 15, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN13("", 0, 0, 15, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN14("Loaded On Wagons", 0, 1, 20, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW1_COLUMN15("Grand Total (Incl. loaded on wagons)", 0, 1, 30, new Color(255, 196, 201)), // #FFC4C9 Light Red

		ROW2_COLUMN1("", 0, 0, 0, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW2_COLUMN2("", 0, 0, 0, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW2_COLUMN3("HSM", 0, 0, 0, new Color(232, 240, 242)), // #E8F0F2 Light Blue Header
		ROW2_COLUMN4("CRM2", 0, 0, 0, new Color(232, 240, 242)), // #E8F0F2 Light Blue Header
		ROW2_COLUMN5("CRM3", 0, 0, 0, new Color(232, 240, 242)), // #E8F0F2 Light Blue Header
		ROW2_COLUMN6("Galva Shops", 0, 0, 0, new Color(232, 240, 242)), // #E8F0F2 Light Blue Header
		ROW2_COLUMN7("Rebar Mill", 0, 0, 0, new Color(232, 240, 242)), // #E8F0F2 Light Blue Header
		ROW2_COLUMN8("Pipe Mill", 0, 0, 0, new Color(232, 240, 242)), // #E8F0F2 Light Blue Header
		ROW2_COLUMN9("", 0, 0, 0, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW2_COLUMN10("Free For Dispatch", 0, 0, 0, new Color(232, 240, 242)), // #E8F0F2 Light Blue Header
		ROW2_COLUMN11("Blocked", 0, 0, 0, new Color(232, 240, 242)), // #E8F0F2 Light Blue Header
		ROW2_COLUMN12("Prime", 0, 0, 0, new Color(232, 240, 242)), // #E8F0F2 Light Blue Header
		ROW2_COLUMN13("Non Prime", 0, 0, 0, new Color(232, 240, 242)), // #E8F0F2 Light Blue Header
		ROW2_COLUMN14("", 0, 0, 0, new Color(159, 196, 214)), // #9FC4D6 Dark Blue
		ROW2_COLUMN15("", 0, 0, 0, new Color(255, 196, 201)); // #FFC4C9 Light Red

		private String name;

		private int mergeNextNColumnCells;

		private int mergeNextNRowCells;

		private int columnCharSize; // To Adjust column width

		private Color fillColor;

		HeaderSpec(String name, int mergeNextNColumnCells, int mergeNextNRowCells, int columnCharSize,
				Color fillColor) {
			this.name = name;
			this.mergeNextNColumnCells = mergeNextNColumnCells;
			this.mergeNextNRowCells = mergeNextNRowCells;
			this.fillColor = fillColor;
		}
	}

	private static final Color COLOR_TOTAL_ROW = new Color(228, 234, 236); // #E4EAEC
	private static final Color COLOR_MAIN_TOTAL_ROW = new Color(202, 220, 226); // #CADCE2
	private static final Color COLOR_GRAND_TOTAL_ROW = new Color(255, 196, 201); // #FFC4C9

	// WIP, SEMIS , FG , TOTAL , FREE , TOTAL_ALL
	public static <T> void writeExcelToStream(OutputStream outStream, StockReportDto stockReportDto, String sheetName)
			throws OTException {
		List<HeaderSpec> row1Headers = Arrays.asList(HeaderSpec.values()).stream()
				.filter(item -> item.toString().startsWith("ROW1_")).collect(Collectors.toList());
		List<HeaderSpec> row2Headers = Arrays.asList(HeaderSpec.values()).stream()
				.filter(item -> item.toString().startsWith("ROW2_")).collect(Collectors.toList());
		final int columnSize = row2Headers.size();
		try (XSSFWorkbook workbook = new XSSFWorkbook()) {
			XSSFSheet sheet = createSheet(workbook, sheetName);
			sheet.createFreezePane(2, 2);
			if (stockReportDto == null) {
				workbook.write(outStream);
				return;
			}
			insertHeaders(workbook, sheet, row1Headers, row2Headers);

			CellStyle valueCellStyle = getCellStyle(workbook, FontStyle.NORMAL_BLACK, HorizontalAlignment.CENTER);
			CellStyle totalRowCellStyleBold = getCellStyle(workbook, FontStyle.BOLD_BLACK, HorizontalAlignment.CENTER,
					COLOR_TOTAL_ROW);
			CellStyle mainTotalRowCellStyleBold = getCellStyle(workbook, FontStyle.BOLD_BLACK,
					HorizontalAlignment.CENTER, COLOR_MAIN_TOTAL_ROW);
			CellStyle grandTotalRowCellStyleBold = getCellStyle(workbook, FontStyle.BOLD_BLACK,
					HorizontalAlignment.CENTER, COLOR_GRAND_TOTAL_ROW);
			
			int rowIndex = 2;
			List<String> methodNames = getMethodNamesInOrder(SPDto.class);
			// WIP
			rowIndex = insertRows(sheet, rowIndex, methodNames, stockReportDto.getWipProducts(),
					stockReportDto.getTotalWIP(), valueCellStyle, totalRowCellStyleBold, false);
			// SEMIS
			rowIndex = insertRows(sheet, rowIndex, methodNames, stockReportDto.getSemisProducts(),
					stockReportDto.getTotalSemis(), valueCellStyle, totalRowCellStyleBold, false);
			// FG
			rowIndex = insertRows(sheet, rowIndex, methodNames, stockReportDto.getFgProducts(),
					stockReportDto.getTotalFG(), valueCellStyle, totalRowCellStyleBold, false);
			// Total
			if (stockReportDto.getTotal() != null) {
				Row row = sheet.createRow(rowIndex++);
				insertCellsToRow(row, stockReportDto.getTotal(), methodNames, mainTotalRowCellStyleBold, true);
			}
			
			// FG AT CS
			rowIndex = insertRows(sheet, rowIndex, methodNames, stockReportDto.getFgatcsProducts(),
					stockReportDto.getTotalFgatcs(), valueCellStyle, totalRowCellStyleBold, false);
			
			// FG AT PORT
			rowIndex = insertRows(sheet, rowIndex, methodNames, stockReportDto.getFgatportProducts(),
					stockReportDto.getTotalFgatport(), valueCellStyle, totalRowCellStyleBold, false);
			
			// FREE
//			rowIndex = insertRows(sheet, rowIndex, methodNames, stockReportDto.getFreeProducts(),
//					stockReportDto.getTotalfree(), valueCellStyle, mainTotalRowCellStyleBold, true);
			
			if (stockReportDto.getTotalAll() != null) {
				Row row = sheet.createRow(rowIndex++);
				insertCellsToRow(row, stockReportDto.getTotalfree(), methodNames, mainTotalRowCellStyleBold, true);
			}
			
			// TOTAL_ALL
			if (stockReportDto.getTotalAll() != null) {
				Row row = sheet.createRow(rowIndex++);
				insertCellsToRow(row, stockReportDto.getTotalAll(), methodNames, grandTotalRowCellStyleBold, true);
			}
			
			for (int cellNum = 0; cellNum <= columnSize; cellNum++) {
				sheet.setColumnWidth(cellNum, 18 * 256);
			}
			
			workbook.write(outStream);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OTException("#report.xls.failed");
		}
	}

	private static int insertRows(Sheet sheet, int rowIndex, List<String> methodNames, List<SPDto> productData,
			SPDto total, CellStyle cellStyle, CellStyle cellStyleTotal, boolean firstCellEmpty) throws Exception {
		if (productData != null && !productData.isEmpty()) {
			final int startRowIndex = rowIndex;
			for (SPDto spDto : productData) {
				Row row = sheet.createRow(rowIndex++);
				insertCellsToRow(row, spDto, methodNames, cellStyle, firstCellEmpty);
			}
			sheet.addMergedRegion(new CellRangeAddress(startRowIndex, startRowIndex + productData.size() - 1, 0, 0));
			if (total != null) {
				Row row = sheet.createRow(rowIndex++);
				insertCellsToRow(row, total, methodNames, cellStyleTotal, true);
			}
		}
		return rowIndex;
	}

	private static <T> void insertCellsToRow(Row row, T rowData, List<String> methodNames, CellStyle cellStyle,
			boolean firstCellEmpty) throws Exception {
		final int methodCount = methodNames.size();
		for (int cellNum = 0; cellNum < methodCount; cellNum++) {// column
			Method method = rowData.getClass().getMethod(methodNames.get(cellNum));
			Object value = (firstCellEmpty && cellNum == 0) ? "" : method.invoke(rowData);
			Cell cell = row.createCell(cellNum);
			if (method.getReturnType() == BigDecimal.class) {
				cell.setCellStyle(cellStyle);
				if (value == null || ((BigDecimal) value).compareTo(BigDecimal.ZERO) == 0) {
					// Add hyphen
					cell.setCellValue("-");
				} else {
					BigDecimal valueBD = ((BigDecimal) value).setScale(0, RoundingMode.HALF_UP);
					cell.setCellValue(Double.valueOf(valueBD.toPlainString()));
				}
			} else {
				cell.setCellValue((value != null) ? value.toString() : "");
				cell.setCellStyle(cellStyle);
			}
		}
	}

	private static XSSFCellStyle getCellStyle(XSSFWorkbook workbook, FontStyle fontStyle, HorizontalAlignment hAlign) {
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
		cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
		cellStyle.setWrapText(true); //Set wordwrap
		return cellStyle;
	}

	/**
	 * Returns list contains method names wrt the {@link ExcelBindByName} field
	 * annotation applied over the field definition.
	 * 
	 * @param clazz
	 * @return
	 */
	private static List<String> getMethodNamesInOrder(Class<?> clazz) {
		List<String> methodNames = new ArrayList<String>();
		methodNames.addAll(
				Arrays.stream(clazz.getDeclaredFields()).filter(f -> f.getAnnotation(ExcelBindByName.class) != null)
						.sorted(Comparator.comparing(f -> f.getAnnotation(ExcelBindByName.class).position()))
						.map(f -> f.getAnnotation(ExcelBindByName.class).methodName()).collect(Collectors.toList()));
		return methodNames;
	}

	private static XSSFSheet createSheet(XSSFWorkbook workbook, String sheetName) {
		XSSFSheet sheet = workbook.createSheet(sheetName);
		return sheet;
	}

	private static CellStyle getCellStyle(XSSFWorkbook workbook, FontStyle fontStyle, HorizontalAlignment hAlign,
			Color color) {
		XSSFCellStyle cellStyle = getCellStyle(workbook, fontStyle, hAlign);
		cellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
		cellStyle.setFillForegroundColor(new XSSFColor(color));
		return cellStyle;
	}

	private static void insertHeaders(XSSFWorkbook workbook, Sheet sheet, List<HeaderSpec> row1Headers,
			List<HeaderSpec> row2Headers) {
		Row row1 = sheet.createRow(0);
		Row row2 = sheet.createRow(1);
		int size = row1Headers.size();
		List<CellRangeAddress> mergeList = new ArrayList<CellRangeAddress>();
		for (int cellNum = 0; cellNum < size; cellNum++) {
			HeaderSpec spec = row1Headers.get(cellNum);
			Cell cell = row1.createCell(cellNum);
			cell.setCellValue(spec.name);
			cell.setCellStyle(getCellStyle(workbook, FontStyle.BOLD_BLACK, HorizontalAlignment.CENTER, spec.fillColor));
			if (spec.mergeNextNColumnCells > 0) {
				// Column merging present
				if (spec.mergeNextNRowCells > 0) // Row merging present
					mergeList.add(new CellRangeAddress(0, spec.mergeNextNRowCells, cellNum,
							cellNum + spec.mergeNextNColumnCells));
				else
					mergeList.add(new CellRangeAddress(0, 0, cellNum, cellNum + spec.mergeNextNColumnCells));
			} else if (spec.mergeNextNRowCells > 0) {
				// Row merging present
				mergeList.add(new CellRangeAddress(0, spec.mergeNextNRowCells, cellNum, cellNum));
			}
		}
		size = row2Headers.size();
		for (int cellNum = 0; cellNum < size; cellNum++) {
			HeaderSpec spec = row2Headers.get(cellNum);
			Cell cell = row2.createCell(cellNum);
			cell.setCellValue(spec.name);
			cell.setCellStyle(getCellStyle(workbook, FontStyle.BOLD_BLACK, HorizontalAlignment.CENTER, spec.fillColor));
		}
		for (CellRangeAddress cellRangeAddress : mergeList) {
			sheet.addMergedRegion(cellRangeAddress);
		}
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
