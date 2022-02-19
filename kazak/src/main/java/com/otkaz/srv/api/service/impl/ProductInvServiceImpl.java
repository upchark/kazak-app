package com.otkaz.srv.api.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.ProductGroupService;
import com.otkaz.srv.api.service.ProductInvService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.CreateProductGroupDto;
import com.otkaz.srv.dto.CreateProductInvDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.ProductCostGroupDto;
import com.otkaz.srv.dto.ProductDto;
import com.otkaz.srv.dto.ProductGroupDto;
import com.otkaz.srv.dto.ProductInvDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.ProductCostGroupView;
import com.otkaz.srv.projection.ProductGroupView;
import com.otkaz.srv.projection.ProductInvView;
import com.otkaz.srv.projection.ProductView;
import com.otkaz.srv.repository.ProductRepository;
import com.otkaz.srv.utils.RawQueryExec;
import com.otkaz.srv.utils.Utils;

@Service(value = "productInvService")
public class ProductInvServiceImpl implements ProductInvService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private RawQueryExec rawQueryExec;

	@Override
	public List<ProductDto> fetchAllProductGroup() {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		List<ProductView> responseList;
		List<ProductDto> baseDto = new ArrayList<ProductDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.productRepository.fetchAllProducts( );
		} else {
			responseList = this.productRepository.fetchAllProducts( );
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				ProductDto productDto = new ProductDto(item);
				baseDto.add(productDto);
			});
		}
		return baseDto;
	}
	
	@Override
	public PaginationDto fetchAllProducts(String search, String product, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		Page<ProductGroupView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.productRepository.fetchAllProductsInv(search, product, pagingParams);
		} else {
			responseList = this.productRepository.fetchAllProductsInv(search,product,  pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				ProductGroupDto productDto = new ProductGroupDto(item);
				baseDto.add(productDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}

	@Override
	public ProductInvDto createProductGroup(CreateProductInvDto body) throws OTException {
		if(body.getName() == null || body.getName().isEmpty()) 
			throw new OTException("#product.invalid.name", 400);
		if(body.getProductGroup() == null || body.getProductGroup().isEmpty() )
			throw new OTException("#product.invalid.type", 400);
		
		Long rank = 1l;
		ProductView productView = this.productRepository.findLatestRankFromProduct(body.getProductGroup());
		if(productView != null)
			rank = productView.getRank() ;
		String queryStr = "INSERT INTO TB_OCP_PRODUCTS_INV (matkx, name,  rank) "
				+ "	VALUES (?1, ?2, ?3) ";
		
		rawQueryExec.execute(queryStr, body.getName(),body.getProductGroup(),  rank);
		return new ProductInvDto(this.productRepository.fetchLatestProductInv());
	}

	@Override
	public ProductInvDto fetchOneProduct(Long id) throws OTException {
		ProductInvView productInvView = this.productRepository.fetchOneProductInv(id);
		if(productInvView == null) {
			throw new OTException("#product.invalid", 400);
		}
		return new ProductInvDto(productInvView);
	}

	@Override
	public ProductInvDto updateProductGroup(Long id, ProductInvDto body) throws OTException {
		ProductInvView productView = this.productRepository.fetchOneProductInv(id);
		if(productView == null) {
			throw new OTException("#product.invalid", 400);
		}		
		String queryStr = "UPDATE TB_OCP_PRODUCTS "
				+ " SET maktx = ?2 "
				+ "	WHERE id = ?1 ";
		rawQueryExec.execute(queryStr, id, body.getName());
		productView = this.productRepository.fetchOneProductInv(id);
		return new ProductInvDto(productView);
	}

	@Override
	public ProductInvDto deleteProductGroup(Long id) throws OTException {
		ProductInvView productView = this.productRepository.fetchOneProductInv(id);
		if(productView == null) {
			throw new OTException("#product.invalid", 400);
		}		
		this.productRepository.deleteById(id);
		return new ProductInvDto(productView);
	}

	
	@Override
	public PaginationDto fetchAllInvProducts(String search, Pageable pagingParams) {
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		Page<ProductCostGroupView> responseList = this.productRepository.getProductInvList(pagingParams); 
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				ProductCostGroupDto productCostDto = new ProductCostGroupDto(item);
				baseDto.add(productCostDto);
			}); 
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}
}
