package com.otkaz.srv.utils;

public class Constants {
	
	public final static String DEFAULT_DATE_FORMAT_STR = "dd/MM/yyyy";
	
	public static final long ACCESS_TOKEN_VALIDITY_SECONDS = 7200; // 2 Hours
	
	public static final int TWO_FACTOR_CODE_VALIDITY_SECONDS = 300; // 5 min
	
	public static final int USER_ACTIVATION_TOKEN_VALIDITY_SECONDS = 3600*24*7; // 7 days
	
	public static final int FORGOT_PASSWORD_TOKEN_VALIDITY_SECONDS = 300; // 5 min
	
	public static final String DEFAULT_USER_PASSWORD = "v1r2a3m@l#e_o8";
	
	public static final String SIGNING_KEY = "v1r2a3m@l#e_o8";
    
	public static final String TOKEN_PREFIX = "Bearer ";
    
	public static final String AUTH_HEADER_KEY = "Authorization";
	
	public static final String JWT_ISSUER = "https://arcelormittal.com";

	public static final String DEFAULT_ENCODING = "utf-8";
	
	public static final int VENDOR_LOCK_VALIDITY_SECONDS = 1800; // 30 min
	
	public static final String DEFAULT_TIME_ZONE = "Canada/Eastern";
	
	public static final String DEV_TIME_ZONE = "Asia/Kolkata";
	
	public static final String TB_OCP_STOCK_MB_MRF_DEV = "TB_OCP_STOCK_MB_MRF_DEV";
	
	public static final String TB_OCP_STOCK_MB_BPM_DEV = "TB_OCP_STOCK_MB_BPM_DEV";
	
	public static final String TB_OCP_STOCK_MB_INDEX_DEV = "TB_OCP_STOCK_MB_INDEX_DEV";
	
}
