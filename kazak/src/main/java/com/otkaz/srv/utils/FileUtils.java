package com.otkaz.srv.utils;

import java.io.File;
import java.io.FileNotFoundException;

public class FileUtils {
	
	public static File getFile(ClassLoader classLoader, String path) throws FileNotFoundException { 
        File file = new File(classLoader.getResource(path).getFile());
        return file;
	}

}
