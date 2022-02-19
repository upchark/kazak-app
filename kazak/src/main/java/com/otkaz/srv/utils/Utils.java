package com.otkaz.srv.utils;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;

import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.exception.OTException;

import ch.qos.logback.core.encoder.ByteArrayUtil;

public class Utils {

	public static String generatePurgeString(String input) {
		final byte[] uniqueTokenBytes = new byte[16];
		ThreadLocalRandom.current().nextBytes(uniqueTokenBytes);
		return new StringBuilder().append(input).append("_purge:").append(new Date().getTime())
				.append(ByteArrayUtil.toHexString(uniqueTokenBytes)).toString();
	}

	public static long getCurrentUserId() {
		SubjectDto subjectDto = (SubjectDto) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return subjectDto.getId();
	}

	public static SubjectDto getCurrentUserDetails() {
		SubjectDto subjectDto = (SubjectDto) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return subjectDto;
	}

	/**
	 * @param password
	 * chekc the password is valid 
	 * at least 1 upper case, 1 lower case
	 * 1 numeric, 1 special character and 
	 * Length from 8 to 16
	 * @return true or false
	 */
	public static boolean isValidPassword(String password) {
		//String regex = "^(?=.*[0-9])" + "(?=.*[a-z])(?=.*[A-Z])" + "(?=.*[@#$%^&+=])" + "(?=\\S+$).{8,16}$";
		String regex = "^(?=.*[0-9])" + "(?=.*[a-z])(?=.*[A-Z])" + "(?=.*[!@#$%^&+=-_.~,':?])" + "(?=\\S+$).{8,16}$";
		Pattern pattern = Pattern.compile(regex);

		if (password == null)
			return false;

		Matcher matcher = pattern.matcher(password);
		return matcher.matches();
	}

	/**
	 * @param email
	 * check the email is validate one
	 * @return false or true
	 */
	public static boolean isValid(String email) {
		String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\." + "[a-zA-Z0-9_+&*-]+)*@" + "(?:[a-zA-Z0-9-]+\\.)+[a-z"
				+ "A-Z]{2,7}$";

		Pattern pattern = Pattern.compile(emailRegex);
		if (email == null)
			return false;
		return pattern.matcher(email).matches();
	}
	
	/**
	 * @param value
	 * clean the deleted indicator from email feild
	 * @return
	 */
	public static String cleanValue(String value) {
		String separator ="_purge";
		int sepPos = value.lastIndexOf(separator);
		return sepPos == -1 ? value : value.substring(0,sepPos);
	}
	
	/**
	 * Validate amount
	 * 
	 * @param amount
	 * @return
	 * @throws APException
	 */
	public static BigDecimal parseAmount(String amount) throws OTException {
		try {
			return new BigDecimal(amount);
		} catch (NumberFormatException e) {
			throw new OTException("#amount.validation.failed");
		}
	}
	
	/**
	 * Get media type for file extension
	 * 
	 * @param extension
	 * @return
	 */
	public static String getMediaType(String extension) {
		if (StringUtils.hasText(extension)) {
			extension = extension.toUpperCase();
			switch (extension) {
			case "XLS":
				return "application/vnd.ms-excel";
			case "XLSX":
				return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
			case "CSV":
				return MediaType.APPLICATION_OCTET_STREAM.toString();
			case "PDF":
				return MediaType.APPLICATION_PDF.toString();
			default:
				return MediaType.APPLICATION_OCTET_STREAM.toString();
			}
		}
		return MediaType.APPLICATION_OCTET_STREAM.toString();
	}
	
	public static String fileNameWithCurrentDateAndTime(String name, String extension) {
		SimpleDateFormat formatter = new SimpleDateFormat("dd_MM_yyyy_HH_mm_ss");  
	    Date date = new Date();
	    return name+formatter.format(date)+extension;
	}
	
	public static String currentDateAndTimeInString() {
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");  
	    Date date = new Date();
	    return formatter.format(date);
	}
	
	public static String signName(String code) {
		String name = null;
		switch (code) {
			case "EQ": name =  " = "; break;
			case "LE": name =  " < "; break;
			case "GR": name =  " > "; break;
			default: name = null; break;
		}
		return name;
	}
	
	public static String removeFirstAndLast(String search) {
		return search != null ? search.substring(1, search.length() - 1) : null;
	}
	
	public static boolean manageColumnNameForExportToExcel(String columnName, String columnNameFromDto) {
		return columnName.equalsIgnoreCase(columnNameFromDto) ? true : false;
	}
	
	public static List<Integer> getIndexByCompare(List<String> firstList, List<String> secondList){
		List<Integer> indexList = new ArrayList<Integer>();
		for(String method: firstList) {
			secondList.forEach(item->{
				if(method.replaceAll("get", "").equalsIgnoreCase(item)) {
					indexList.add(firstList.indexOf(method));
				}
			});
		}
		return indexList.size() > 0 ? indexList:null;
	}
}
