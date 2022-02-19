package com.otkaz.srv.exception;

public class InvalidFpTokenException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4508815817295148895L;

	private String message;

	private int messageCode;

	public InvalidFpTokenException(String message) {
		this.message = message;
	}

	public InvalidFpTokenException(String message, int messageCode) {
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
