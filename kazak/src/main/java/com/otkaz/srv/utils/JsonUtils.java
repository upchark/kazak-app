package com.otkaz.srv.utils;

import java.io.File;
import java.io.FileReader;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class JsonUtils {

	public static JSONArray parseJson(File file, String name) {
		JSONParser parser = new JSONParser();
		try {
			Object obj = parser.parse(new FileReader(file));
			JSONObject jsonObject = (JSONObject) obj;
			JSONArray jsonArray = (JSONArray) jsonObject.get(name);
			return jsonArray;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
