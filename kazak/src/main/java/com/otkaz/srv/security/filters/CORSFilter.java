package com.otkaz.srv.security.filters;

import java.io.IOException;
import java.io.Writer;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class CORSFilter implements Filter {

	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		HttpServletResponse response = (HttpServletResponse) res;
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Credentials", "true");
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
		response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

		HttpServletRequest request = (HttpServletRequest) req;
		if ("options".equals(request.getMethod().toLowerCase())) {
			response.setStatus(200);
			Writer writer = response.getWriter();
			response.getWriter().write("");
			writer.close();
			return;
		}

		// Set cache control for static assets
		if (!request.getRequestURL().toString().contains("/api/v1")
				&& request.getServletContext().getMimeType(request.getRequestURL().toString()) != "text/html") {
			response.setHeader("Cache-Control", "public, max-age=86400000");
		}
		chain.doFilter(req, res);
	}

	public void init(FilterConfig filterConfig) {
	}

	public void destroy() {
	}

}
