package com.otkaz.srv.api.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.BasicService;
import com.otkaz.srv.dto.WeekDto;
import com.otkaz.srv.repository.UserRepository;
import com.otkaz.srv.utils.DateUtils;

@Service(value = "basicService")
public class BasicServiceImpl implements BasicService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<WeekDto> fetchWeeks(Integer year) {
		List<WeekDto> response = new ArrayList<>();
		for(int i = 1; i <= 53; i++) {
			String fromDate = DateUtils.getWeeklyFromDate(year, i);
			String toDate = DateUtils.getWeeklyToDate(year, i);
			response.add(new WeekDto(i, fromDate, toDate));
		}
		return response;
	}

}
