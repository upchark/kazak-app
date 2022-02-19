package com.otkaz.srv.api.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.LoginDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.PasswordForgotDto;
import com.otkaz.srv.dto.PasswordResetDto;
import com.otkaz.srv.dto.ResendActivationDto;
import com.otkaz.srv.dto.RoleDto;
import com.otkaz.srv.dto.UserActivationDto;
import com.otkaz.srv.dto.UserDto;
import com.otkaz.srv.exception.InvalidFpTokenException;
import com.otkaz.srv.exception.OTException;

@Service
public interface UserService {

	UserDto login(LoginDto loginDto) throws OTException;

	UserDto findById(long id);
	
	PaginationDto fetchUsers(String search, Boolean active, Pageable pagingParams);
	
	List<RoleDto> fetchRoles();
	
	PaginationDto fetchEmployees(String search, Pageable pagingParams);

	UserDto createUser(UserDto userDto) throws OTException;

	BaseDto resendActivation(ResendActivationDto resendActivationDto) throws OTException;

	BaseDto verifyToken(String token) throws InvalidFpTokenException;

	BaseDto activateUser(UserActivationDto userActivationDto) throws OTException;

	BaseDto forgotPassword(PasswordForgotDto forgotPasswordDto) throws OTException;

	BaseDto verifyFpToken(String token) throws InvalidFpTokenException;

	BaseDto resetPassword(PasswordResetDto passwordResetDto) throws OTException;
}
