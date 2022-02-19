/**
 * 
 */
package com.otkaz.srv.api.service;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.dto.CreateRegionDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.RegionMasterDto;
import com.otkaz.srv.exception.OTException;

/**
 * @author sheen
 *
 */
@Service
public interface RegionService {

	PaginationDto fetchAllRegions(String search,  Pageable pagingParams);

	RegionMasterDto createRegion(CreateRegionDto body) throws OTException;

	RegionMasterDto updateRegion(Long id, RegionMasterDto body) throws OTException;

	RegionMasterDto fetchOneRegion(Long id) throws OTException;

	RegionMasterDto deleteRegion(Long id) throws OTException;

}
