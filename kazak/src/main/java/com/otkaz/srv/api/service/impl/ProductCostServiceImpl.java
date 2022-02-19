package com.otkaz.srv.api.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.ProductCostService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.ProductCostDto;
import com.otkaz.srv.dto.ProductCostGroupDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.ProductCostGroupView;
import com.otkaz.srv.projection.ProductCostView;
import com.otkaz.srv.projection.ProductInvView;
import com.otkaz.srv.projection.ProductView;
import com.otkaz.srv.repository.ProductCostRepository;
import com.otkaz.srv.repository.ProductRepository;
import com.otkaz.srv.utils.RawQueryExec;
import com.otkaz.srv.utils.Utils;

@Service(value = "productCostService")
public class ProductCostServiceImpl implements ProductCostService {
	
	@Autowired
	private ProductCostRepository productCostRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private RawQueryExec rawQueryExec;

	@Override
	public PaginationDto fetchAllProductCosts(String search, Integer year, Integer month, Long productId, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		Page<ProductCostView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			if(productId != null) {
			responseList = this.productCostRepository.fetchAllProductCosts(search, year, month, productId, pagingParams);
			}else {
				responseList = this.productCostRepository.fetchAllProductCosts(search, year, month,  pagingParams);
			}
		} else {
			if(productId != null) {
			responseList = this.productCostRepository.fetchAllProductCosts(search, year, month, productId, pagingParams);
			}else {
				responseList = this.productCostRepository.fetchAllProductCosts(search, year, month, pagingParams);
			}
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				ProductCostDto productCostDto = new ProductCostDto(item);
				baseDto.add(productCostDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}

	@Override
	public ProductCostDto createProductCost(ProductCostDto body) throws OTException {
		ProductInvView productView = this.productRepository.fetchOneProductInv(body.getProductId());
		if(productView == null) {
			throw new OTException("#product.invalid", 400);
		}
		if(body.getYear() == null) 
			throw new OTException("#product.cost.invalid.year", 400);
		if(null == body.getMonth() || Integer.parseInt(body.getMonth()) < 1 || Integer.parseInt(body.getMonth()) > 12)
			throw new OTException("#product.cost.invalid.month", 400);
		ProductCostView productCostView = this.productCostRepository.validateProductCost(body.getProductName(), 
				body.getYear(), body.getMonth());
		if(productCostView != null)
			throw new OTException("#product.cost.exists", 400);
		
		String queryStr = "INSERT INTO TB_OCP_INVOICE_PROD_FC_VC (product, year, month, fixed_cost, variable_cost) "
				+ "	VALUES (?1, ?2, ?3, ?4, ?5) ";
		 
		rawQueryExec.execute(queryStr, body.getProductName(), body.getYear(), 
				body.getMonth(), body.getFixedCost(), body.getVariableCost());
		return new ProductCostDto(this.productCostRepository.fetchLatestProductCost());
	}

	@Override
	public ProductCostDto fetchOneProductCost(Long id) throws OTException {
		ProductCostView productCostView = this.productCostRepository.fetchOneProductCost(id);
		if(productCostView == null) {
			throw new OTException("#product.cost.invalid", 400);
		}
		return new ProductCostDto(productCostView);
	}

	@Override
	public ProductCostDto updateProductCost(Long id, ProductCostDto body) throws OTException {
		ProductCostView productCostView = this.productCostRepository.fetchOneProductCost(id);
		if(productCostView == null) {
			throw new OTException("#product.cost.invalid", 400);
		}		
		String queryStr = "UPDATE TB_OCP_INVOICE_PROD_FC_VC "
				+ " SET fixed_cost = ?2, variable_cost = ?3 "
				+ "	WHERE id = ?1 ";
		rawQueryExec.execute(queryStr, id, body.getFixedCost(), body.getVariableCost());
		productCostView = this.productCostRepository.fetchOneProductCost(id);
		return new ProductCostDto(productCostView);
	}

	@Override
	public ProductCostDto deleteProductCost(Long id) throws OTException {
		ProductCostView productCostView = this.productCostRepository.fetchOneProductCost(id);
		if(productCostView == null) {
			throw new OTException("#product.cost.invalid", 400);
		}	
		String queryStr = "DELETE from TB_OCP_INVOICE_PROD_FC_VC "
				+ "	WHERE id = ?1 ";
		rawQueryExec.execute(queryStr, id);
//		this.productCostRepository.deleteById(id);
		return new ProductCostDto(productCostView);
	}
	
	@Override
	public PaginationDto fetchAllProductsInCost(String search, Pageable pagingParams) {
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		Page<ProductCostGroupView> responseList = this.productCostRepository.getProductCostGroupList(pagingParams); 
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				ProductCostGroupDto productCostDto = new ProductCostGroupDto(item);
				baseDto.add(productCostDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}

}
