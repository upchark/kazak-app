package com.otkaz.srv.api.controller;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.otkaz.srv.annotation.APIResult;
import com.otkaz.srv.api.service.BasicService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}/secure")
public class BasicController {

	@Autowired
	private BasicService basicService;

	@RequestMapping(value = "/weeks/{year}", method = RequestMethod.GET)
	@APIResult(message = "#weeks.fetch.success", error_message = "#weeks.fetch.failed")
	public Object fetchWeeks(@NotNull @PathVariable("year") Integer year) {
		try {
			return basicService.fetchWeeks(year); 
		} catch (Exception e) {
			throw e;
		}
	}

}
