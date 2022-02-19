package com.otkaz.srv.api.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.ProductGroupService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.CreateProductGroupDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.ProductDto;
import com.otkaz.srv.dto.ProductGroupDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.ProductGroupView;
import com.otkaz.srv.projection.ProductView;
import com.otkaz.srv.repository.ProductRepository;
import com.otkaz.srv.utils.RawQueryExec;
import com.otkaz.srv.utils.Utils;

@Service(value = "productGroupService")
public class ProductGroupServiceImpl implements ProductGroupService {
	
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
			responseList = this.productRepository.fetchAllProductsGroup(search, product, pagingParams);
		} else {
			responseList = this.productRepository.fetchAllProductsGroup(search, product, pagingParams);
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
	public ProductGroupDto createProductGroup(CreateProductGroupDto body) throws OTException {
		if(body.getName() == null || body.getName().isEmpty()) 
			throw new OTException("#product.invalid.name", 400);
		if(body.getProductGroup() == null || body.getProductGroup().isEmpty() )
			throw new OTException("#product.invalid.type", 400);
		
		Long rank = 1l;
		String type = "ROLLED";
		ProductView productView = this.productRepository.findLatestRankFromProduct(body.getProductGroup());
		if(productView != null)
			rank = productView.getRank() ;
			type = productView.getType();
		String queryStr = "INSERT INTO TB_OCP_PRODUCTSGROUP (maktx, name, type, rank) "
				+ "	VALUES (?1, ?2, ?3, ?4) ";
		
		rawQueryExec.execute(queryStr, body.getName(),body.getProductGroup(), type, rank);
		return new ProductGroupDto(this.productRepository.fetchLatestProductGroup());
	}

	@Override
	public ProductGroupDto fetchOneProduct(Long id) throws OTException {
		ProductGroupView productGroupView = this.productRepository.fetchOneProductGroup(id);
		if(productGroupView == null) {
			throw new OTException("#product.invalid", 400);
		}
		return new ProductGroupDto(productGroupView);
	}

	@Override
	public ProductGroupDto updateProductGroup(Long id, ProductGroupDto body) throws OTException {
		ProductGroupView productView = this.productRepository.fetchOneProductGroup(id);
		if(productView == null) {
			throw new OTException("#product.invalid", 400);
		}		
		String queryStr = "UPDATE TB_OCP_PRODUCTSGROUP "
				+ " SET maktx = ?2 "
				+ "	WHERE id = ?1 ";
		rawQueryExec.execute(queryStr, id, body.getName());
		productView = this.productRepository.fetchOneProductGroup(id);
		return new ProductGroupDto(productView);
	}

	@Override
	public ProductGroupDto deleteProductGroup(Long id) throws OTException {
		ProductGroupView productView = this.productRepository.fetchOneProductGroup(id);
		if(productView == null) {
			throw new OTException("#product.invalid", 400);
		}		
		
		String queryStr = "DELETE from TB_OCP_PRODUCTSGROUP "
				+ "	WHERE id = ?1 ";
		rawQueryExec.execute(queryStr, id);
//		this.productRepository.deleteById(id);
		return new ProductGroupDto(productView);
	}

	@Override
	public PaginationDto fetchAllProductsInCost(String search, Pageable pagingParams) {
		// TODO Auto-generated method stub
		return null;
	}
}
