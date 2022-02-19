/**
 * 
 */
package com.otkaz.srv.api.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.dto.CreateCountryDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.RegionCountryDto;
import com.otkaz.srv.dto.RegionMasterDto;
import com.otkaz.srv.exception.OTException;

/**
 * @author sheen
 *
 */
@Service
public interface RegionCountryService {

	List<RegionMasterDto> fetchAllRegion();

	PaginationDto fetchAllCountry(String search, Pageable pagingParams);


	RegionCountryDto fetchOneCountry(Long id) throws OTException;


	RegionCountryDto updateCountry(Long id, RegionCountryDto body) throws OTException;

	RegionCountryDto createCountry(CreateCountryDto body) throws OTException;

	RegionCountryDto deleteCountry(Long id) throws OTException;
	

}
