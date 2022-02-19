package com.otkaz.srv.api.service.impl;

import java.util.ResourceBundle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.otkaz.srv.api.service.EmailService;

@Service(value = "emailService")
public class EmailServiceImpl implements EmailService {

	@Autowired
	private JavaMailSender javaMailSender;

	@Autowired
	private TemplateEngine templateEngine;

	@Autowired
	private ResourceBundle resourceBundle;

	@Value("${application.base.url}")
	private String baseURL;

	@Value("${spring.mail.username}")
	private String from;

	@Async
	@Override
	public void sendUserActivationLink(String toEmail, String userName, String activationLink) {
		if (toEmail == null || toEmail.isEmpty())
			return;
		MimeMessagePreparator messagePreparator = mimeMessage -> {
			MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
			messageHelper.setFrom(from);
			messageHelper.setTo(toEmail);
			messageHelper.setSubject(retrieveMessage("#user.activation.subject"));
			String content = buildEmailContentForUserActivation(toEmail, userName, baseURL + activationLink,
					baseURL + "/images/logo.png");
			messageHelper.setText(content, true);
		};
		javaMailSender.send(messagePreparator);
	}

	@Async
	@Override
	public void sendForgotPasswordMail(String toEmail, String userName, String resetPath) {
		if (toEmail == null || toEmail.isEmpty())
			return;
		MimeMessagePreparator messagePreparator = mimeMessage -> {
			MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
			messageHelper.setFrom(from);
			messageHelper.setTo(toEmail);
			messageHelper.setSubject(retrieveMessage("#email.pwdreset.subject"));
			String content = buildPasswordResetEmailContent(userName, baseURL + resetPath,
					baseURL + "/images/logo.png");
			messageHelper.setText(content, true);
		};
		javaMailSender.send(messagePreparator);
	}
	
	private String buildEmailContentForUserActivation(String email, String name, String activationUrl, String iconURL) {
		Context context = new Context();
		context.setVariable("name", name);
		context.setVariable("email", email);
		context.setVariable("activationUrl", activationUrl);
		context.setVariable("iconURL", iconURL);
		return templateEngine.process("user_activation", context);
	}

	private String buildPasswordResetEmailContent(String userName, String resetURL, String iconURL) {
		Context context = new Context();
		context.setVariable("userName", userName);
		context.setVariable("resetURL", resetURL);
		context.setVariable("iconURL", iconURL);
		return templateEngine.process("reset_password", context);
	}

	private String retrieveMessage(String key) {
		if (key != null && key.startsWith("#")) {
			return resourceBundle.getString(key.replace("#", ""));
		}
		return key;
	}
}
