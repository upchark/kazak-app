package com.otkaz.srv.entity.validator;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.otkaz.srv.annotation.ValidateEnum;


public class EnumValidator implements ConstraintValidator<ValidateEnum, String> {

	private List<String> valueList;

	@Override
	public void initialize(ValidateEnum constraintAnnotation) {
		valueList = new ArrayList<String>();
		Class<? extends Enum<?>> enumClass = constraintAnnotation.enumClass();

		@SuppressWarnings("rawtypes")
		Enum[] enumValArr = enumClass.getEnumConstants();

		for (@SuppressWarnings("rawtypes")
		Enum enumVal : enumValArr) {
			valueList.add(enumVal.toString().toUpperCase());
		}

	}

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		if (!valueList.contains(value.toUpperCase())) {
			return false;
		}
		return true;
	}

}
