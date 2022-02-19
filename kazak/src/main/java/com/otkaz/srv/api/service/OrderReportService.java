package com.otkaz.srv.api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.otkaz.srv.dto.OrderPlantDto;
import com.otkaz.srv.dto.OrderReportDto;
import com.otkaz.srv.dto.OrderReportZayvkasDto;
import com.otkaz.srv.dto.RegionDto;
import com.otkaz.srv.dto.UserStatusDto;

@Service
public interface OrderReportService {
	
	List<RegionDto> fetchRegions();
	
	OrderReportDto fetchOrdersByProducts(String region,String[] plants, String fromDate, String toDate);
	
	OrderReportZayvkasDto fetchOrdersByZayvkasProducts(String[] plants, String fromDate, String toDate, String[] userStatus);

	List<OrderPlantDto> fetchPlants();

	List<UserStatusDto> fetchUserStatus();

	List<OrderPlantDto> fetchZayvkasPlants();

}
