package com.otkaz.srv.api.exportation.annotation;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @Author Anish
 * @Date 30-Aug-2021
 *
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface ExcelBindByName {

	/**
	 * The column header name in the input that is used to fill the annotated
	 * field's header name.
	 * 
	 * @return The name of the column in the XLS file.
	 */
	String name() default ""; 

	/**
	 * The method name to be invoked for getting value the value for the field.
	 * 
	 * @return The name of the column in the XLS file.
	 */
	String methodName() default "";

	/**
	 * The column position in the input that is used to fill the annotated field.
	 *
	 * @return The position of the column in the XLS file. This column number is
	 *         zero-based.
	 */
	int position();

}