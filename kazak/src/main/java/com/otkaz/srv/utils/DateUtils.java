package com.otkaz.srv.utils;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

public class DateUtils {
	
	public static String getDailyDate(Integer year, Integer day) {
		SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
//		System.out.println("");
//		System.out.println("");
//		System.out.println("Fetching Daily From Date, Year: " + year + ", Day: " + day);
//		System.out.println("");
//		System.out.println("");
		Calendar cal = Calendar.getInstance(Locale.CANADA);
//		System.out.println("Current: " + sdf.format(cal.getTime()));
		cal.set(Calendar.YEAR, year);
//		System.out.println("Year Set: " + sdf.format(cal.getTime()));       
		cal.set(Calendar.DAY_OF_YEAR, day); 
//		System.out.println("Final Date: " + sdf.format(cal.getTime()));  
//		System.out.println("");
//		System.out.println("");
		return sdf.format(cal.getTime()); 
    }
	
	public static String getWeeklyFromDate(Integer year, Integer week) {
		SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
//		System.out.println("");
//		System.out.println("");
//		System.out.println("Fetching Weekly From Date, Year: " + year + ", Week: " + week);
//		System.out.println("");
//		System.out.println("");
		Calendar cal = Calendar.getInstance(Locale.CANADA);
//		System.out.println("Current: " + sdf.format(cal.getTime()));
		cal.set(Calendar.YEAR, year);
//		System.out.println("Year Set: " + sdf.format(cal.getTime()));       
		cal.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY); 
//		System.out.println("Day Set: " + sdf.format(cal.getTime())); 
		cal.set(Calendar.WEEK_OF_YEAR, week);  
//		System.out.println("Week Set: " + sdf.format(cal.getTime()));
		if(cal.get(Calendar.YEAR) != year) {
//			System.out.println("Setting first day of the year ");
			cal = Calendar.getInstance();
			cal.set(Calendar.YEAR, year);
			cal.set(Calendar.DAY_OF_YEAR, 1);
		}  
//		System.out.println("Final Date: " + sdf.format(cal.getTime()));  
//		System.out.println("");
//		System.out.println("");
		return sdf.format(cal.getTime()); 
    }
	
	public static String getWeeklyToDate(Integer year, Integer week) {
		SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
//		System.out.println("");
//		System.out.println("");
//		System.out.println("Fetching Weekly To Date, Year: " + year + ", Week: " + week);
//		System.out.println("");
//		System.out.println("");
		Calendar cal = Calendar.getInstance(Locale.CANADA);
//		System.out.println("Current: " + sdf.format(cal.getTime()));
		cal.set(Calendar.YEAR, year);
//		System.out.println("Year Set: " + sdf.format(cal.getTime()));        
		cal.set(Calendar.DAY_OF_WEEK, Calendar.SATURDAY); 
//		System.out.println("Day Set: " + sdf.format(cal.getTime())); 
		cal.set(Calendar.WEEK_OF_YEAR, week);  
//		System.out.println("Week Set: " + sdf.format(cal.getTime()));
		if(cal.get(Calendar.YEAR) != year) {
//			System.out.println("Setting last day of the year ");
			cal = Calendar.getInstance(Locale.CANADA);
			cal.set(Calendar.YEAR, year);
			cal.set(Calendar.DAY_OF_YEAR, cal.getActualMaximum(Calendar.DAY_OF_YEAR));
		}  
//		System.out.println("Final Date: " + sdf.format(cal.getTime()));  
//		System.out.println("");
//		System.out.println("");
		return sdf.format(cal.getTime());
    }
	
	public static String getMonthlyFromDate(Integer year, Integer month) {
		SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
//		System.out.println("");
//		System.out.println("");
//		System.out.println("Fetching Monthly From Date, Year: " + year + ", Month: " + month);
//		System.out.println("");
//		System.out.println("");
		Calendar cal = Calendar.getInstance(Locale.CANADA);
//		System.out.println("Current: " + sdf.format(cal.getTime()));
		cal.set(Calendar.YEAR, year);
//		System.out.println("Year Set: " + sdf.format(cal.getTime()));
		cal.set(Calendar.MONTH, month - 1);   
//		System.out.println("Month Set: " + sdf.format(cal.getTime()));     
		cal.set(Calendar.DAY_OF_MONTH, 1); 
//		System.out.println("Final Date: " + sdf.format(cal.getTime()));  
//		System.out.println("");
//		System.out.println("");
		return sdf.format(cal.getTime()); 
    }

	public static String getMonthlyToDate(Integer year, Integer month) {
		SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
//		System.out.println("");
//		System.out.println("");
//		System.out.println("Fetching Monthly To Date, Year: " + year + ", Month: " + month);
//		System.out.println("");
//		System.out.println("");
        Calendar cal = Calendar.getInstance(Locale.CANADA);
//		System.out.println("Current: " + sdf.format(cal.getTime()));
	    cal.set(Calendar.YEAR, year);
//		System.out.println("Year Set: " + sdf.format(cal.getTime()));
    	cal.set(Calendar.MONTH, month - 1);
//		System.out.println("Month Set: " + sdf.format(cal.getTime())); 
        cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
//		System.out.println("Final Date: " + sdf.format(cal.getTime()));  
//		System.out.println("");
//		System.out.println("");
		return sdf.format(cal.getTime());
    }

	public static String getQuarterlyFromDate(Integer year, Integer quarter) {
		SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
//		System.out.println("");
//		System.out.println("");
//		System.out.println("Fetching Quarterly From Date, Year: " + year + ", Quarter: " + quarter);
//		System.out.println("");
//		System.out.println("");
		Calendar cal = Calendar.getInstance(Locale.CANADA);
//		System.out.println("Current: " + sdf.format(cal.getTime()));
		cal.set(Calendar.YEAR, year);
//		System.out.println("Year Set: " + sdf.format(cal.getTime()));
		cal.set(Calendar.MONTH, (quarter - 1) * 3);   
//		System.out.println("Month Set: " + sdf.format(cal.getTime()));     
		cal.set(Calendar.DAY_OF_MONTH, 1); 
//		System.out.println("Final Date: " + sdf.format(cal.getTime()));  
//		System.out.println("");
//		System.out.println("");
		return sdf.format(cal.getTime()); 
    }

	public static String getQuarterlyToDate(Integer year, Integer quarter) {
		SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
//		System.out.println("");
//		System.out.println("");
//		System.out.println("Fetching Quarterly To Date, Year: " + year + ", Quarter: " + quarter);
//		System.out.println("");
//		System.out.println("");
        Calendar cal = Calendar.getInstance(Locale.CANADA);
//		System.out.println("Current: " + sdf.format(cal.getTime()));
	    cal.set(Calendar.YEAR, year);
//		System.out.println("Year Set: " + sdf.format(cal.getTime()));
    	cal.set(Calendar.MONTH, (quarter * 3) - 1);
//		System.out.println("Month Set: " + sdf.format(cal.getTime())); 
        cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
//		System.out.println("Final Date: " + sdf.format(cal.getTime())); 
//		System.out.println("");
//		System.out.println("");
		return sdf.format(cal.getTime());
    }

	public static String getHalfYearlyFromDate(Integer year, Integer half) {
		SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
//		System.out.println("");
//		System.out.println("");
//		System.out.println("Fetching Half Yearly From Date, Year: " + year + ", Half: " + half);
//		System.out.println("");
//		System.out.println("");
		Calendar cal = Calendar.getInstance(Locale.CANADA);
//		System.out.println("Current: " + sdf.format(cal.getTime()));
		cal.set(Calendar.YEAR, year);
//		System.out.println("Year Set: " + sdf.format(cal.getTime()));
		cal.set(Calendar.MONTH, (half - 1) * 6);   
//		System.out.println("Month Set: " + sdf.format(cal.getTime()));     
		cal.set(Calendar.DAY_OF_MONTH, 1); 
//		System.out.println("Final Date: " + sdf.format(cal.getTime()));  
//		System.out.println("");
//		System.out.println("");
		return sdf.format(cal.getTime()); 
    }

	public static String getHalfYearlyToDate(Integer year, Integer half) {
		SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
//		System.out.println("");
//		System.out.println("");
//		System.out.println("Fetching Half Yearly To Date, Year: " + year + ", Half: " + half);
//		System.out.println("");
//		System.out.println("");
        Calendar cal = Calendar.getInstance(Locale.CANADA);
//		System.out.println("Current: " + sdf.format(cal.getTime()));
	    cal.set(Calendar.YEAR, year);
//		System.out.println("Year Set: " + sdf.format(cal.getTime()));
    	cal.set(Calendar.MONTH, (half * 6) - 1);
//		System.out.println("Month Set: " + sdf.format(cal.getTime())); 
        cal.set(Calendar.DAY_OF_MONTH, cal.getActualMaximum(Calendar.DAY_OF_MONTH));
//		System.out.println("Final Date: " + sdf.format(cal.getTime())); 
//		System.out.println("");
//		System.out.println("");
		return sdf.format(cal.getTime());
    }

	public static String getYearlyFromDate(Integer year) {
		SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
//		System.out.println("");
//		System.out.println("");
//		System.out.println("Fetching Yearly From Date, Year: " + year);
//		System.out.println("");
//		System.out.println("");
		Calendar cal = Calendar.getInstance(Locale.CANADA);
//		System.out.println("Current: " + sdf.format(cal.getTime()));
		cal.set(Calendar.YEAR, year);       
//		System.out.println("Year Set: " + sdf.format(cal.getTime()));
		cal.set(Calendar.DAY_OF_YEAR, 1);
//		System.out.println("Final Date: " + sdf.format(cal.getTime()));
//		System.out.println("");
//		System.out.println("");
		return sdf.format(cal.getTime()); 
    }

	public static String getYearlyToDate(Integer year) {
		SimpleDateFormat sdf = new SimpleDateFormat(Constants.DEFAULT_DATE_FORMAT_STR);
//		System.out.println("");
//		System.out.println("");
//		System.out.println("Fetching Yearly To Date, Year: " + year);
//		System.out.println("");
//		System.out.println("");
		Calendar cal = Calendar.getInstance(Locale.CANADA);
//		System.out.println("Current: " + sdf.format(cal.getTime()));
		cal.set(Calendar.YEAR, year); 
//		System.out.println("Year Set: " + sdf.format(cal.getTime()));
		cal.set(Calendar.DAY_OF_YEAR, cal.getActualMaximum(Calendar.DAY_OF_YEAR));
//		System.out.println("Final Date: " + sdf.format(cal.getTime()));
//		System.out.println("");
//		System.out.println("");
		return sdf.format(cal.getTime()); 
    }
}
