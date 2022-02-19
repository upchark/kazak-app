package com.otkaz.srv.api.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.otkaz.srv.annotation.APIResult;
import com.otkaz.srv.api.service.UserService;
import com.otkaz.srv.dto.LoginDto;
import com.otkaz.srv.dto.PasswordForgotDto;
import com.otkaz.srv.dto.PasswordResetDto;
import com.otkaz.srv.dto.ResendActivationDto;
import com.otkaz.srv.dto.UserActivationDto;
import com.otkaz.srv.exception.InvalidFpTokenException;
import com.otkaz.srv.exception.OTException;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("${spring.data.rest.base-path}")
public class AuthController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@APIResult(message = "#user.auth.success", error_message = "#user.auth.fail", message_code = 5)
	public Object login(@RequestBody LoginDto loginDto, HttpServletRequest request) throws OTException {
		try {
			return userService.login(loginDto);
		} catch (BadCredentialsException e) {
			throw new OTException("#user.auth.fail", 400);
		}
	}
	
	@RequestMapping(value = "/resendActivation", method = RequestMethod.POST)
	@APIResult(message = "#user.resendActivation.success", error_message = "#user.resendActivation.failed")
	public Object resendActivation(@RequestBody ResendActivationDto resendActivationDto) throws OTException {
		return userService.resendActivation(resendActivationDto);
	}

	@RequestMapping(value = "/verify/{token}", method = RequestMethod.GET)
	@APIResult(message = "#user.token.valid", error_message = "#user.token.invalid")
	public Object verifyToken(@PathVariable("token") String token) throws InvalidFpTokenException {
		return userService.verifyToken(token);
	}

	@RequestMapping(value = "/activateUser", method = RequestMethod.POST)
	@APIResult(message = "#user.activation.success", error_message = "#user.activation.failed")
	public Object activateUser(@RequestBody UserActivationDto userActivationDto) throws OTException {
		return userService.activateUser(userActivationDto);
	}
	
	@RequestMapping(value = "/forgotPassword", method = RequestMethod.POST)
	@APIResult(message = "#user.forgotpassword.success", error_message = "#user.forgotpassword.failed")
	public Object forgotPassword(@RequestBody PasswordForgotDto forgotPasswordDto) throws OTException {
		return userService.forgotPassword(forgotPasswordDto);
	}

	@RequestMapping(value = "/verify/fp/{token}", method = RequestMethod.GET)
	@APIResult(message = "#user.token.valid", error_message = "#user.token.invalid")
	public Object verifyFpToken(@PathVariable("token") String token) throws InvalidFpTokenException {
		return userService.verifyFpToken(token);
	}

	@RequestMapping(value = "/resetPassword", method = RequestMethod.POST)
	@APIResult(message = "#user.resetpassword.success", error_message = "#user.resetpassword.failed")
	public Object resetPassword(@RequestBody PasswordResetDto passwordResetDto) throws OTException {
		return userService.resetPassword(passwordResetDto);
	}

}
