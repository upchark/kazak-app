package com.otkaz.srv.utils;

public class QueryUtils {

	public static String formatQueryParam(String queryParam)
	{
		if(queryParam == null) {
			return null;
		}
		System.out.println(queryParam +"-----------------------------");
		String formattedQueryParam = queryParam.replaceAll("'", "''");
		System.out.println(formattedQueryParam +"-----------format------------------");
		return formattedQueryParam;
	}

}
