package com.otkaz.srv.api.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.RegionService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.CreateRegionDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.RegionMasterDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.RegionMasterView;
import com.otkaz.srv.repository.RegionRepository;
import com.otkaz.srv.utils.RawQueryExec;
import com.otkaz.srv.utils.Utils;

@Service(value = "RegionService")
public class RegionServiceImpl implements RegionService {
	
	@Autowired
	private RegionRepository regionRepository;
	
	@Autowired
	private RawQueryExec rawQueryExec;

	@Override
	public PaginationDto fetchAllRegions(String search, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		Page<RegionMasterView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.regionRepository.fetchAllRegions(search,  pagingParams);
		} else {
			responseList = this.regionRepository.fetchAllRegions(search, pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				RegionMasterDto productDto = new RegionMasterDto(item);
				baseDto.add(productDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}

	@Override
	public RegionMasterDto createRegion(CreateRegionDto body) throws OTException {
		if(body.getName() == null || body.getName().isEmpty()) 
			throw new OTException("#product.invalid.name", 400);
		
		
		Long rank = 1l;
		RegionMasterView productView = this.regionRepository.findLatestRank(body.getName());
		if(productView != null)
			rank = productView.getRank() + 1;
		
		String queryStr = "INSERT INTO TB_OCP_REGIONS_MASTER (name,  rank) "
				+ "	VALUES (?1, ?2) ";
		
		rawQueryExec.execute(queryStr, body.getName(),  rank);
		return new RegionMasterDto(this.regionRepository.fetchLatestRegion());
	}

	@Override
	public RegionMasterDto fetchOneRegion(Long id) throws OTException {
		RegionMasterView regionView = this.regionRepository.fetchOneRegion(id);
		if(regionView == null) {
			throw new OTException("#product.invalid", 400);
		}
		return new RegionMasterDto(regionView);
	}

	@Override
	public RegionMasterDto updateRegion(Long id, RegionMasterDto body) throws OTException {
		RegionMasterView regionMasterView = this.regionRepository.fetchOneRegion(id);
		if(regionMasterView == null) {
			throw new OTException("#product.invalid", 400);
		}		
		String queryStr = "UPDATE TB_OCP_REGIONS_MASTER "
				+ " SET name = ?2 "
				+ "	WHERE id = ?1 ";
		rawQueryExec.execute(queryStr, id, body.getName());
		regionMasterView = this.regionRepository.fetchOneRegion(id);
		return new RegionMasterDto(regionMasterView);
	}

	@Override
	public RegionMasterDto deleteRegion(Long id) throws OTException {
		RegionMasterView regionMasterView = this.regionRepository.fetchOneRegion(id);
		if(regionMasterView == null) {
			throw new OTException("#product.invalid", 400);
		}		
		this.regionRepository.deleteById(id);
		return new RegionMasterDto(regionMasterView);
	}

}
