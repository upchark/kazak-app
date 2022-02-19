package com.otkaz.srv.utils;

import java.io.IOException;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Row.MissingCellPolicy;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.web.multipart.MultipartFile;

import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvBindByPosition;
import com.otkaz.srv.annotation.ExcelColumn;
import com.otkaz.srv.entity.OCPStock;
import com.otkaz.srv.entity.OCPStockBPM;
import com.otkaz.srv.entity.OCPStockMBIndex;
import com.otkaz.srv.entity.OCPStockMRF;

public class ExcelImportUtils {

	private ExcelImportUtils() {
	}
	
	static List<Field> fields;
	static Map<String, Class<?>> sheetNameMap;
	static {
		Map<String, Class<?>> map = new HashMap<>();
		map.put("BPM", OCPStockBPM.class);
		map.put("MRF", OCPStockMRF.class);
		map.put("MB INDEX", OCPStockMBIndex.class);
		sheetNameMap = Collections.unmodifiableMap(map);
	}

	public static Map<Class<?>, List<OCPStock>> prepareStockData(MultipartFile file, Class<?> clazz2) {
		Map<Class<?>, List<OCPStock>> map = new HashMap<>();
		try (Workbook workBook = WorkbookFactory.create(file.getInputStream())) {
			int totalSheets = workBook.getNumberOfSheets();
			for (int s = 0; s < totalSheets; s++) {
				Sheet sheet = workBook.getSheetAt(s);
				int totalRows = sheet.getPhysicalNumberOfRows();
				// validateHeaders();

				String sheetName = sheet.getSheetName().toUpperCase();
				
				
				if(sheetNameMap.containsKey(sheetName)) {
					int headerRowIndex = 0;
					List<String> headers = getHeaders(sheet.getRow(headerRowIndex));
					System.out.println(sheetName+":"+headers);
					Class<?> clazz = sheetNameMap.get(sheetName);
					fields = getClassFields(clazz);
					List<OCPStock> data = new ArrayList<>();
					for (int r = 1+headerRowIndex; r < totalRows; r++) {
						OCPStock ocpStock = mapExcelRowToEntity(sheet.getRow(r), headers, clazz);
						
						data.add(ocpStock);
					}
					System.out.println("data:"+data.size());
					map.put(clazz, data);
				}
				
				
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("map:"+map.size());
		return map;
	}

	private static List<Field> getClassFields(Class<?> clazz) {
		return Arrays.stream(clazz.getDeclaredFields())
				.filter(f -> f.getAnnotation(ExcelColumn.class) != null).collect(Collectors.toList());
		
	}

	private static OCPStock mapExcelRowToEntity(Row row, List<String> headers, Class<?> clazz) {
		
		OCPStock ocpStock = getObjectByClass(clazz);
		for(int h=0; h<headers.size();h++) {	
			mapCellValues(headers.get(h), ocpStock, row.getCell(h, MissingCellPolicy.CREATE_NULL_AS_BLANK));
			
		}
		return ocpStock;
	}

	private static OCPStock getObjectByClass(Class<?> clazz) {
		if(clazz.getSimpleName().equalsIgnoreCase("OCPStockBPM")) {
			return new OCPStockBPM();
		}else if(clazz.getSimpleName().equalsIgnoreCase("OCPStockMRF")) {
			return new OCPStockMRF();
		}else if(clazz.getSimpleName().equalsIgnoreCase("OCPStockMBIndex")) {
			return new OCPStockMBIndex();
		}
		return null;
	}

	private static void mapCellValues(String header, OCPStock ocpStock, Cell cell) {
		
		for (Field field : fields) {
			Object cellValue = null;
			try {
				if (field.getAnnotation(ExcelColumn.class).name().toUpperCase().equals(header)) {
					
					Field f = ocpStock.getClass().getDeclaredField(field.getName());
					cellValue = getCellValue(cell);
					f.setAccessible(true);
					if(f.getType().getSimpleName().equalsIgnoreCase("Integer")) {
						if(cellValue instanceof Double) {
							Double dcv = (Double) cellValue;
							cellValue = dcv.intValue();
						}
						if(null == cellValue || "".equals(cellValue)) {
							cellValue = 0;
						}
					} else if(f.getType().getSimpleName().equalsIgnoreCase("Double")) {
						if(null == cellValue || "".equals(cellValue)) {
							cellValue = 0.0;
						}
					}
					f.set(ocpStock, cellValue);	
					
					break;
				}
			} catch (IllegalArgumentException | IllegalAccessException | NoSuchFieldException | SecurityException e) {
				System.out.println(e.getMessage()+":"+cell.getCellType()+":"+cellValue);
			}
		}
		
	}

	private static Object getCellValue(Cell cell) {
		Object cellValue = "";
		switch (cell.getCellType()) {
		case BOOLEAN:
			cellValue = cell.getBooleanCellValue();
			break;
		case STRING:
			cellValue = cell.getRichStringCellValue().toString();
			//System.out.println("String:"+cellValue+"<>");
			break;
		case NUMERIC:
			if (DateUtil.isCellDateFormatted(cell)) {
                cellValue = cell.getDateCellValue();
            } else {
            	cellValue = cell.getNumericCellValue();
            }
			//System.out.println("NUmbric:"+cellValue);
			break;
		case FORMULA:
			// if the cell contains formula, this case will be executed.
			cellValue = cell.getStringCellValue();
			break;
		case BLANK:
			cellValue = "";
			break;
		case _NONE:
			cellValue = "";
			break;
		case ERROR:
			throw new RuntimeException("There is no support for this type of cell");
		default:
			cellValue = "";
		}
		return cellValue;
	}

	private static List<String> getHeaders(Row row) {
		List<String> headers = new ArrayList<>();
		int totalCells = row.getPhysicalNumberOfCells();
		for (int c = 0; c < totalCells; c++) {
			Cell cell = row.getCell(c);
			String header = cell.getStringCellValue() != null ? cell.getStringCellValue().toUpperCase()
					: cell.getStringCellValue();
			headers.add(header);
		}
		return headers;
	}

	private static List<String> getHeadersInOrder(Class<?> clazz) {
		return Arrays.stream(clazz.getDeclaredFields())
				.filter(f -> f.getAnnotation(CsvBindByPosition.class) != null
						&& f.getAnnotation(CsvBindByName.class) != null)
				.sorted(Comparator.comparing(f -> f.getAnnotation(CsvBindByPosition.class).position()))
				.map(f -> f.getAnnotation(CsvBindByName.class).column()).collect(Collectors.toList());
	}

}
