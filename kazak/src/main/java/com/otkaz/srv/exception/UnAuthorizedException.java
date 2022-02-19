package com.otkaz.srv.exception;

public class UnAuthorizedException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String message;

	private int messageCode;

	public UnAuthorizedException(String message) {
		this.message = message;
	}

	public UnAuthorizedException(String message, int messageCode) {
		this.message = message;
		this.setMessageCode(messageCode);
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getMessageCode() {
		return messageCode;
	}

	public void setMessageCode(int messageCode) {
		this.messageCode = messageCode;
	}
}
