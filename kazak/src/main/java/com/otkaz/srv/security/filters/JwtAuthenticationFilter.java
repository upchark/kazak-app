package com.otkaz.srv.security.filters;

import static com.otkaz.srv.utils.Constants.AUTH_HEADER_KEY;
import static com.otkaz.srv.utils.Constants.TOKEN_PREFIX;

import java.io.IOException;
import java.io.Writer;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.google.gson.Gson;
import com.otkaz.srv.api.service.impl.UserServiceImpl;
import com.otkaz.srv.dto.ResultDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.security.utils.JwtTokenUtil;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Order(3)
@WebFilter(urlPatterns = "/secure/**")
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		String header = req.getHeader(AUTH_HEADER_KEY);
		String redisKey = null;
		String authToken = null;
		String url = req.getRequestURI();

		if (!url.contains("/secure/")) {
			chain.doFilter(req, res);
			return;
		}
		if (header != null && header.startsWith(TOKEN_PREFIX)) {
			authToken = header.replace(TOKEN_PREFIX, "");
			try {
				redisKey = jwtTokenUtil.extractTokenValue(authToken);
				if (redisKey != null) {
					SubjectDto subjectDto = jwtTokenUtil.getSubject(redisKey);
					if (jwtTokenUtil.validateToken(subjectDto)) {
						UserServiceImpl userService = (UserServiceImpl) userDetailsService;
						try {
							//Handle user deleted
							userService.findById(subjectDto.getId());
						} catch (EmptyResultDataAccessException e) {
							jwtTokenUtil.deleteSession(redisKey);
							throw new UnsupportedJwtException(e.getMessage());
						}
						UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
								subjectDto, null, userService.getAuthority(Roles.valueOf(subjectDto.getRole())));
						authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(req));
						SecurityContextHolder.getContext().setAuthentication(authentication);
					} else {
						sendErrorWithStatus(HttpStatus.UNAUTHORIZED.value(), "Session expired", res);
						return;
					}
				}
			} catch (IllegalArgumentException e) {
				sendErrorWithStatus(HttpStatus.FORBIDDEN.value(), "Unauthorized", res);
				return;
			} catch (ExpiredJwtException e) {
				sendErrorWithStatus(HttpStatus.UNAUTHORIZED.value(), "Session expired", res);
				return;
			} catch (SignatureException e) {
				sendErrorWithStatus(HttpStatus.FORBIDDEN.value(), "Invalid signature", res);
				return;
			} catch(UnsupportedJwtException | MalformedJwtException e) {
				sendErrorWithStatus(HttpStatus.FORBIDDEN.value(), "Unauthorized", res);
				return;
			}
		} else {
			sendErrorWithStatus(HttpStatus.FORBIDDEN.value(), "Unauthorized", res);
			return;
		}

		try {
			chain.doFilter(req, res);
		} catch (Exception e) {
			sendErrorWithStatus(HttpStatus.FORBIDDEN.value(), "Unauthorized", res);
		}
	}

	private void sendErrorWithStatus(int status, String message, HttpServletResponse res) {
		res.setStatus(status);
		try {
			Writer writer = res.getWriter();
			writer.write(new Gson().toJson(new ResultDto(false, message, null)));
			writer.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
