package com.otkaz.srv.security.utils;

import java.io.Serializable;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.otkaz.srv.dto.UserDto;
import com.otkaz.srv.utils.Constants;

import ch.qos.logback.core.encoder.ByteArrayUtil;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

@Component
public class PasswordResetTokenUtil implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 137797093442491350L;
	
	@Value("${redis.instance.key}")
	private String instanceKey;

	@Autowired
	private JedisPool jedisPool;
	
	public String generateToken(UserDto user) {
		Jedis jedis = null;
		try {
			jedis = jedisPool.getResource();
			String token = generateToken();
			jedis.setex(getRedisKey(token), Constants.FORGOT_PASSWORD_TOKEN_VALIDITY_SECONDS, user.getEmail());
			return token;
		} finally {
			if (jedis != null) {
				jedis.close();
			}
		}
	}
	
	private String generateToken() {
		final byte[] tokenArray = new byte[16];
		ThreadLocalRandom.current().nextBytes(tokenArray);
		return ByteArrayUtil.toHexString(tokenArray);
	}
	
	public void deleteToken(String token) {
		Jedis jedis = null;
		try {
			jedis = jedisPool.getResource();
			jedis.del(getRedisKey(token));
		} finally {
			if (jedis != null) {
				jedis.close();
			}
		}
	}

	public String getUserEmailForToken(String token) {
		if(!StringUtils.hasText(token)) {
			return null;
		}
		Jedis jedis = null;
		try {
			jedis = jedisPool.getResource();
			String key = getRedisKey(token);
			return jedis.get(key);
		} finally {
			if (jedis != null) {
				jedis.close();
			}
		}
	}

	private String getRedisKey(String token) {
		return instanceKey + "-oft-pwd-token-" + token;
	}
}
