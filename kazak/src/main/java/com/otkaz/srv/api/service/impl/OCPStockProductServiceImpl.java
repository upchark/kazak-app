package com.otkaz.srv.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.OCPStockProductService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.OCPStockProductDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.entity.OCPStockProduct;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.OCPStockProductView;
import com.otkaz.srv.repository.OCPStockProductRepository;
import com.otkaz.srv.utils.Utils;

@Service(value = "ocpStockProductService")
public class OCPStockProductServiceImpl implements OCPStockProductService {
	
	@Autowired
	private OCPStockProductRepository ocpStockProductRepository;

	@Override
	public PaginationDto fetchAllProducts(String search, Pageable pagingParams) {
		//SubjectDto subjectDto = Utils.getCurrentUserDetails();
		Page<OCPStockProductView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		//if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
		if(false) {
			responseList = this.ocpStockProductRepository.fetchAllProducts(search, pagingParams);
		} else {
			responseList = this.ocpStockProductRepository.fetchAllProducts(search, pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				OCPStockProductDto productDto = new OCPStockProductDto(item);
				baseDto.add(productDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}

	@Override
	public OCPStockProductDto createProduct(OCPStockProductDto dto) throws OTException {
		OCPStockProduct newStockProduct = new OCPStockProduct(dto);
		OCPStockProduct stockProduct = this.ocpStockProductRepository.save(newStockProduct);
		return new OCPStockProductDto(stockProduct);
	}

	@Override
	public OCPStockProductDto fetchOneProduct(Long id) throws OTException {
		Optional<OCPStockProduct> entity = this.ocpStockProductRepository.findById(id);
		if(!entity.isPresent()) {
			throw new OTException("#product.invalid", 400);
		}
		return new OCPStockProductDto(entity.get());
	}

	@Override
	public OCPStockProductDto updateProduct(Long id, OCPStockProductDto body) throws OTException {
		Optional<OCPStockProduct> entity = this.ocpStockProductRepository.findById(id);
		if(!entity.isPresent()) {
			throw new OTException("#product.invalid", 400);
		}
		OCPStockProduct product = new OCPStockProduct(body);
		OCPStockProduct stockProduct = this.ocpStockProductRepository.save(product);
		return new OCPStockProductDto(stockProduct);
	}

	@Override
	public OCPStockProductDto deleteProduct(Long id) throws OTException {
		Optional<OCPStockProduct> entity = this.ocpStockProductRepository.findById(id);
		if(!entity.isPresent()) {
			throw new OTException("#product.invalid", 400);
		}	
		this.ocpStockProductRepository.delete(entity.get());
		return new OCPStockProductDto(entity.get());
	}

}
