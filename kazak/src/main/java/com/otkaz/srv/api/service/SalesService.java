package com.otkaz.srv.api.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.CustomerDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.RegionDto;
import com.otkaz.srv.dto.SalesDto;
import com.otkaz.srv.dto.SalesItemDto;
import com.otkaz.srv.enums.CCSortType;
import com.otkaz.srv.enums.Periodicities;

@Service
public interface SalesService extends CommercialControllingServiceBase{
	
	List<RegionDto> fetchRegions();
	
	List<CustomerDto> fetchCustomers();

	PaginationDto fetchSalesByProductsPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer, Pageable pagingParams);

	SalesDto fetchSalesByProducts(String[] bills, Periodicities periodicity, Integer periodLevel, Integer level, Integer year, String region, String customer) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException;

	SalesItemDto fetchSalesByProductsTotal(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer);

	PaginationDto fetchSalesByCountriesPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, Pageable pagingParams, String customer);

	SalesDto fetchSalesByCountries(String[] bills, Periodicities periodicity, Integer periodLevel, Integer level, Integer year, String region, String customer) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException;

	SalesItemDto fetchSalesByCountriesTotal(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer);

	PaginationDto fetchSalesByCustomersPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer, Pageable pagingParams);
	
	SalesDto fetchSalesByCustomers(String[] bills, Periodicities periodicity, Integer periodLevel, Integer level, Integer year, String region, String customer) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException;
	
	SalesItemDto fetchSalesByCustomersTotal(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer);

	SalesDto fetchSalesByRegion(String[] bills, Periodicities periodicity, Integer periodLevel, Integer level,
			Integer year, String region, String customer)throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException;

	/**
	 * Fetch the Sales total by region as pivot
	 * 
	 * @param periodicity
	 * @param periodLevel
	 * @param year
	 * @param region
	 * @return
	 */
	SalesItemDto fetchSalesByRegionTotal(Periodicities periodicity, Integer periodLevel, Integer year, String region, String ustomer);

	/**
	 * Fetch the Sales details by region as pivot
	 * 
	 * @param periodicity
	 * @param periodLevel
	 * @param year
	 * @param region
	 * @param pagingParams
	 * @return
	 */
	PaginationDto fetchSalesByRegionPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer,
			Pageable pagingParams);
	
	/**
	 * Top by the provided field value
	 * 
	 * @param periodicity
	 * @param periodLevel
	 * @param year
	 * @param region
	 * @param topBy
	 * @param ccSortType
	 * @return
	 */
	List<BaseDto> fetchSalesByTopCustomers(Periodicities periodicity, Integer periodLevel,
			Integer year, String region, String topBy, CCSortType ccSortType);

	/**
	 * Total top by the provided field value
	 * 
	 * @param periodicity
	 * @param periodLevel
	 * @param year
	 * @param region
	 * @param topBy
	 * @param ccSortType
	 * @return
	 */
	BaseDto fetchTotalSalesByTopCustomers(Periodicities periodicity, Integer periodLevel,
			Integer year, String region, String topBy, CCSortType ccSortType);

	
}
