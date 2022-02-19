package com.otkaz.srv.api.service;

import org.springframework.scheduling.annotation.Async;

public interface EmailService {

	@Async
	void sendUserActivationLink(String toEmail, String userName, String activationLink);

	@Async
	void sendForgotPasswordMail(String toEmail, String userName, String resetPath);

}
