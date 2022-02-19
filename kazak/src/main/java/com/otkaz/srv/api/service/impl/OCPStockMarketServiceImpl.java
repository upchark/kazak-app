package com.otkaz.srv.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.OCPStockMarketService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.OCPStockMarketDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.entity.OCPStockMarket;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.OCPStockMarketView;
import com.otkaz.srv.repository.OCPStockMarketRepository;
import com.otkaz.srv.utils.Utils;

@Service(value = "ocpStockMarketService")
public class OCPStockMarketServiceImpl implements OCPStockMarketService {
	
	@Autowired
	private OCPStockMarketRepository ocpStockMarketRepository;

	@Override
	public PaginationDto fetchAllMarket(String search, Pageable pagingParams) {
		//SubjectDto subjectDto = Utils.getCurrentUserDetails();
		Page<OCPStockMarketView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		//if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
		if(false) {
			responseList = this.ocpStockMarketRepository.fetchAll(search, pagingParams);
		} else {
			responseList = this.ocpStockMarketRepository.fetchAll(search, pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				OCPStockMarketDto productDto = new OCPStockMarketDto(item);
				baseDto.add(productDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}

	@Override
	public OCPStockMarketDto createMarket(OCPStockMarketDto dto) throws OTException {
		OCPStockMarket newStockProduct = new OCPStockMarket(dto);
		OCPStockMarket stockProduct = this.ocpStockMarketRepository.save(newStockProduct);
		return new OCPStockMarketDto(stockProduct);
	}

	@Override
	public OCPStockMarketDto fetchOne(Long id) throws OTException {
		Optional<OCPStockMarket> entity = this.ocpStockMarketRepository.findById(id);
		if(!entity.isPresent()) {
			throw new OTException("#markets.invalid", 400);
		}
		return new OCPStockMarketDto(entity.get());
	}

	@Override
	public OCPStockMarketDto updateMarket(Long id, OCPStockMarketDto body) throws OTException {
		Optional<OCPStockMarket> entity = this.ocpStockMarketRepository.findById(id);
		if(!entity.isPresent()) {
			throw new OTException("#markets.invalid", 400);
		}
		OCPStockMarket product = new OCPStockMarket(body);
		OCPStockMarket stockProduct = this.ocpStockMarketRepository.save(product);
		return new OCPStockMarketDto(stockProduct);
	}

	@Override
	public OCPStockMarketDto deleteMarket(Long id) throws OTException {
		Optional<OCPStockMarket> entity = this.ocpStockMarketRepository.findById(id);
		if(!entity.isPresent()) {
			throw new OTException("#markets.invalid", 400);
		}	
		this.ocpStockMarketRepository.delete(entity.get());
		return new OCPStockMarketDto(entity.get());
	}

}
