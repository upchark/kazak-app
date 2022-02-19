package com.otkaz.srv.api.controller;

import javax.validation.ConstraintViolationException;
import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.domain.JpaSort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.otkaz.srv.annotation.APIResult;
import com.otkaz.srv.api.service.UserService;
import com.otkaz.srv.dto.UserDto;
import com.otkaz.srv.exception.OTException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}/secure/user")
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(method = RequestMethod.GET, path = "/list")
	@APIResult(message = "#user.list.data.collected", error_message = "#user.list.data.collection.failed")
	public Object getAllUsersByPagination(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "active", required = false) Boolean active,
			@RequestParam(value = "search", required = false) String search) throws OTException {
		try {
			Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
			return userService.fetchUsers(search, active, pagingParams);
		}catch (Exception e) {
			throw e;
		}
	}

	@RequestMapping(value = "/roles", method = RequestMethod.GET)
	@APIResult(message = "#user.roles.fetch.success", error_message = "#user.roles.fetch.failed")
	public Object fetchRoles() throws OTException {
		return userService.fetchRoles();
	}

	@RequestMapping(value = "/employees", method = RequestMethod.GET)
	@APIResult(message = "#user.employees.fetch.success", error_message = "#user.employees.fetch.failed")
	public Object fetchEmployees(@RequestParam("offset") @Min(0) int offset,
			@Min(1) @Max(50) @RequestParam(value = "numResults") int numResults,
			@RequestParam(value = "sortBy", required = false, defaultValue = "name") String sortBy,
			@RequestParam(value = "desc", required = false, defaultValue = "0") boolean descending,
			@RequestParam(value = "search", required = false) String search) throws OTException {
		Pageable pagingParams = PageRequest.of(offset, numResults, JpaSort.unsafe(descending ? Direction.DESC : Direction.ASC, "(" + sortBy + ")"));
		return userService.fetchEmployees(search, pagingParams);
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/create")
	@APIResult(message = "#user.create.success", error_message = "#user.create.failed")
	public Object save(@Valid @RequestBody UserDto userDto) throws OTException {
		try {
			return userService.createUser(userDto);
		} catch (Exception e) {
			if (e instanceof ConstraintViolationException || e instanceof DataIntegrityViolationException) {
				throw new OTException("#user.email.exists", 400);
			}
			throw e;
		}
	}	

}
