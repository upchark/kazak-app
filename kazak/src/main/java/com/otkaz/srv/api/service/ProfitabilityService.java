/**
 * 
 */
package com.otkaz.srv.api.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.CustomerDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.ProfitabilityDto;
import com.otkaz.srv.dto.ProfitabilityItemDto;
import com.otkaz.srv.dto.RegionDto;
import com.otkaz.srv.enums.CCSortType;
import com.otkaz.srv.enums.Periodicities;

/**
 * @author sheen
 *
 */
public interface ProfitabilityService extends CommercialControllingServiceBase{

	List<RegionDto> fetchRegions();
	
	List<CustomerDto> fetchCustomers();

	PaginationDto fetchProfitabilityByProductsPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer, Pageable pagingParams);
	
	ProfitabilityDto fetchProfitabilityByProducts(String[] bills, Periodicities periodicity, Integer periodLevel, Integer level, Integer year, String region, String customer) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException;
	
	ProfitabilityItemDto fetchProfitabilityByProductsTotal(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer);

	PaginationDto fetchProfitabilityByCountriesPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer, Pageable pagingParams);
	
	ProfitabilityDto fetchProfitabilityByCountries(String[] bills, Periodicities periodicity, Integer periodLevel, Integer level, Integer year, String region, String customer) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException;

	ProfitabilityItemDto fetchProfitabilityByCountriesTotal(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer);

	PaginationDto fetchProfitabilityByCustomersPivot(Periodicities periodicity, Integer periodLevel, Integer year,
			String region, String customer, Integer filterNegativeEBITDA, Pageable pagingParams);
	
	ProfitabilityDto fetchProfitabilityByCustomers(String[] bills, Periodicities periodicity, Integer periodLevel, Integer level, Integer year, String region, String customer, Integer filterNegativeEBITDA) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException;
	
	ProfitabilityItemDto fetchProfitabilityByCustomersTotal(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer, Integer filterNegativeEBITDA);

	PaginationDto fetchProfitabilityByRegionPivot(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer,
			Pageable pagingParams);

	ProfitabilityDto fetchProfitabilityByRegion(String[] bills, Periodicities periodicity, Integer periodLevel, Integer level,
			Integer year, String region, String customer) throws IllegalArgumentException, IllegalAccessException, NoSuchFieldException, SecurityException;

	ProfitabilityItemDto fetchProfitabilityByRegionTotal(Periodicities periodicity, Integer periodLevel, Integer year, String region, String customer);

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
	List<BaseDto> fetchProfitabilityByTopCustomers(Periodicities periodicity, Integer periodLevel,
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
	BaseDto fetchTotalProfitabilityByTopCustomers(Periodicities periodicity, Integer periodLevel,
			Integer year, String region, String topBy, CCSortType ccSortType);

}
