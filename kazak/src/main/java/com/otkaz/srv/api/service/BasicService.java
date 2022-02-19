package com.otkaz.srv.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.otkaz.srv.dto.WeekDto;

@Service
public interface BasicService {
	
	List<WeekDto> fetchWeeks(Integer year);

}
