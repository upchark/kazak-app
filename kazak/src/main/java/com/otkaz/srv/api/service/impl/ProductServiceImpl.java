package com.otkaz.srv.api.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.EnumUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.ProductService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.CreateProductDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.ProductDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.enums.ProductTypes;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.ProductView;
import com.otkaz.srv.repository.ProductRepository;
import com.otkaz.srv.utils.RawQueryExec;
import com.otkaz.srv.utils.Utils;

@Service(value = "productService")
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private RawQueryExec rawQueryExec;

	@Override
	public PaginationDto fetchAllProducts(String search, String type, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		Page<ProductView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.productRepository.fetchAllProducts(search, type, pagingParams);
		} else {
			responseList = this.productRepository.fetchAllProducts(search, type, pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				ProductDto productDto = new ProductDto(item);
				baseDto.add(productDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}

	@Override
	public ProductDto createProduct(CreateProductDto body) throws OTException {
		if(body.getName() == null || body.getName().isEmpty()) 
			throw new OTException("#product.invalid.name", 400);
		if(body.getType() == null || body.getType().isEmpty() 
				|| !EnumUtils.isValidEnum(ProductTypes.class, body.getType()))
			throw new OTException("#product.invalid.type", 400);
		
		Long rank = 1l;
		ProductView productView = this.productRepository.findLatestRank(body.getType());
		if(productView != null)
			rank = productView.getRank() + 1;
		
		String queryStr = "INSERT INTO TB_OCP_PRODUCTS (name, type, rank) "
				+ "	VALUES (?1, ?2, ?3) ";
		
		rawQueryExec.execute(queryStr, body.getName(), body.getType(), rank);
		return new ProductDto(this.productRepository.fetchLatestProduct());
	}

	@Override
	public ProductDto fetchOneProduct(Long id) throws OTException {
		ProductView productView = this.productRepository.fetchOneProduct(id);
		if(productView == null) {
			throw new OTException("#product.invalid", 400);
		}
		return new ProductDto(productView);
	}

	@Override
	public ProductDto updateProduct(Long id, ProductDto body) throws OTException {
		ProductView productView = this.productRepository.fetchOneProduct(id);
		if(productView == null) {
			throw new OTException("#product.invalid", 400);
		}		
		String queryStr = "UPDATE TB_OCP_PRODUCTS "
				+ " SET name = ?2 "
				+ "	WHERE id = ?1 ";
		rawQueryExec.execute(queryStr, id, body.getName());
		productView = this.productRepository.fetchOneProduct(id);
		return new ProductDto(productView);
	}

	@Override
	public ProductDto deleteProduct(Long id) throws OTException {
		ProductView productView = this.productRepository.fetchOneProduct(id);
		if(productView == null) {
			throw new OTException("#product.invalid", 400);
		}		
//		this.productRepository.deleteById(id);
		String queryStr = "DELETE from TB_OCP_PRODUCTS "
				+ "	WHERE id = ?1 ";
		rawQueryExec.execute(queryStr, id);
		return new ProductDto(productView);
	}

}
