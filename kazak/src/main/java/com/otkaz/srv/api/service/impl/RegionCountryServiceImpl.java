package com.otkaz.srv.api.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.RegionCountryService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.CreateCountryDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.RegionCountryDto;
import com.otkaz.srv.dto.RegionMasterDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.RegionCountryView;
import com.otkaz.srv.projection.RegionMasterView;
import com.otkaz.srv.repository.RegionRepository;
import com.otkaz.srv.utils.RawQueryExec;
import com.otkaz.srv.utils.Utils;
import com.otkaz.srv.repository.RegionCountryRepository;

@Service(value = "regionCountryService")
public class RegionCountryServiceImpl implements RegionCountryService {
	
	@Autowired
	private RegionRepository regionRepository;
	@Autowired
	/* Changes via @pappu 24-10-2021 */
	private RegionCountryRepository regionCountryRepository;
	@Autowired
	private RawQueryExec rawQueryExec;

	@Override
	public List<RegionMasterDto> fetchAllRegion() {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		List<RegionMasterView> responseList;
		List<RegionMasterDto> baseDto = new ArrayList<RegionMasterDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.regionRepository.fetchAllRegions( );
		} else {
			responseList = this.regionRepository.fetchAllRegions( );
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				RegionMasterDto productDto = new RegionMasterDto(item);
				baseDto.add(productDto);
			});
		}
		return baseDto;
	}
	
	@Override
	public PaginationDto fetchAllCountry(String search,  Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		Page<RegionCountryView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.regionRepository.fetchAllCountry(search, pagingParams);
		} else {
			responseList = this.regionRepository.fetchAllCountry(search,  pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				RegionCountryDto countryDto = new RegionCountryDto(item);
				baseDto.add(countryDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}

	@Override
	public RegionCountryDto createCountry(CreateCountryDto body) throws OTException {
		if(body.getName() == null || body.getName().isEmpty()) 
			throw new OTException("#product.invalid.name", 400);
		if(body.getRegion() == null || body.getRegion().isEmpty() )
			throw new OTException("#product.invalid.type", 400);
		
		Long rank = 1l;
		Long country_rank = null;
		String type = "Kazak";
		System.out.print(body.getRegion());
		RegionMasterView regionView = this.regionRepository.findLatestRankfromRegion(body.getRegion());
		if(regionView != null)
		{
			rank = regionView.getRank() ;
			RegionCountryView countryRankView = this.regionCountryRepository.fetchLatestCountryRank();
			country_rank = countryRankView.getCountry_rank()+1;
		}		
		String queryStr = "INSERT INTO TB_OCP_REGIONS (COUNTRY, NAME, RANK, COUNTRY_RANK) "
				+ "	VALUES (?1, ?2, ?3, ?4) ";
		
		rawQueryExec.execute(queryStr, body.getName(), body.getRegion(),rank,country_rank);
		return new RegionCountryDto(this.regionRepository.fetchLatestCountry());
	}

	@Override
	public RegionCountryDto fetchOneCountry(Long id) throws OTException {
		RegionCountryView regionCountryView = this.regionRepository.fetchOneCountry(id);
		if(regionCountryView == null) {
			throw new OTException("#product.invalid", 400);
		}
		return new RegionCountryDto(regionCountryView);
	}

	@Override
	public RegionCountryDto updateCountry(Long id, RegionCountryDto body) throws OTException {
		RegionCountryView regionCountryView = this.regionRepository.fetchOneCountry(id);
		if(regionCountryView == null) {
			throw new OTException("#product.invalid", 400);
		}
		Long rank = 1l;
		RegionMasterView regionView = this.regionRepository.findLatestRankfromRegion(body.getRegion());
		if(regionView != null)		
			rank = regionView.getRank() ;			
		
		String queryStr = "UPDATE TB_OCP_REGIONS "
				+ " SET COUNTRY = ?2 , NAME = ?3 , RANK = ?4"
				+ "	WHERE ID = ?1 ";		
		
		rawQueryExec.execute(queryStr, id, body.getName(), body.getRegion(), rank);
		regionCountryView = this.regionRepository.fetchOneCountry(id);
		return new RegionCountryDto(regionCountryView);
	}

	@Override
	public RegionCountryDto deleteCountry(Long id) throws OTException {
		RegionCountryView countryView = this.regionRepository.fetchOneCountry(id);
		if(countryView == null) {
			throw new OTException("#product.invalid", 400);
		}	
		System.out.print(" id is = "+id+" ");
		this.regionCountryRepository.deleteById(id);
		return new RegionCountryDto(countryView);
	}

	

}
