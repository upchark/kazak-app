package com.otkaz.srv.api.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.otkaz.srv.api.service.WipService;
import com.otkaz.srv.dto.BaseDto;
import com.otkaz.srv.dto.CreateWipDto;
import com.otkaz.srv.dto.PaginationDto;
import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.dto.WipMasterDto;
import com.otkaz.srv.enums.Roles;
import com.otkaz.srv.exception.OTException;
import com.otkaz.srv.projection.WipMasterView;
import com.otkaz.srv.repository.WipRepository;
import com.otkaz.srv.utils.RawQueryExec;
import com.otkaz.srv.utils.Utils;

@Service(value = "wipService")
public class WipServiceImpl implements WipService {
	
	@Autowired
	private WipRepository wipRepository;
	
	@Autowired
	private RawQueryExec rawQueryExec;

	/*
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
	*/
	
	@Override
	public PaginationDto fetchAllProducts(String search, String product, Pageable pagingParams) {
		SubjectDto subjectDto = Utils.getCurrentUserDetails();
		Page<WipMasterView> responseList;
		//Page<ProductGroupView> responseList;
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		if(subjectDto.getRole().equals(Roles.SUPER_ADMIN)) {
			responseList = this.wipRepository.fetchAllProductsInv(search, product, pagingParams);
		} else {
			responseList = this.wipRepository.fetchAllProductsInv(search,product,  pagingParams);
		}
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				WipMasterDto productDto = new WipMasterDto(item);
				baseDto.add(productDto);
			});
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}
	
	@Override
	public WipMasterDto createProductGroup(CreateWipDto body) throws OTException {
		if(body.getQuantity() == null || body.getQuantity().isEmpty()) 
			throw new OTException("#product.invalid.quantity", 400);
		if(body.getProduct() == null || body.getProduct().isEmpty() )
			throw new OTException("#product.invalid.product", 400);
				
		java.sql.Date strDate1 = null;
		String strDate = null;
		try {
			String s = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS Z").format(body.getEntry_date());			
			String str1[] = s.split(" ") ;			
			String str[] = str1[0].split("-") ;
			strDate = str[2] +"-"+str[1]+"-"+str[0];			
			java.util.Date s1 = new SimpleDateFormat("dd-MM-yyyy").parse(strDate);
			strDate1 = new java.sql.Date(s1.getTime());
			System.out.print(strDate1);
		} catch (Exception e) {
			System.out.print("Exception "+e.getMessage());
			e.printStackTrace();
		}
		Integer checkDuplicateVal = this.wipRepository.checkDuplicate1(body.getProduct(), strDate);
		System.out.print("================= product view false "+checkDuplicateVal);
		if(checkDuplicateVal == 0)
		{
		String queryStr = "INSERT INTO TB_OCP_STOCK_ENTRY (product_type, product, quantity, entry_date) "
				+ "	VALUES (?1, ?2, ?3 , ?4) ";
		
		rawQueryExec.execute(queryStr, body.getProduct_type(), body.getProduct() ,body.getQuantity() , strDate1);
		return new WipMasterDto(this.wipRepository.fetchLatestProductInv());
		}
		else
		{
			//System.out.print("================= product view true"+checkDuplicateVal);
			 WipMasterDto bodyobj= new WipMasterDto();
			 bodyobj.setProduct(body.getProduct());
			 bodyobj.setProduct_type(body.getProduct_type());
			 bodyobj.setQuantity(Long.parseLong(body.getQuantity()));
			return bodyobj;
		}
		
	}
	
	
	@Override
	public WipMasterDto deleteProductGroup(Long id) throws OTException {
		WipMasterView productView = this.wipRepository.fetchOneProductInv(id);
		if(productView == null) {
			throw new OTException("#product.invalid", 400);
		}		
		this.wipRepository.deleteById(id);
		return new WipMasterDto(productView);
	}
	
	@Override
	public WipMasterDto fetchOneProduct(Long id) throws OTException {
		WipMasterView productInvView = this.wipRepository.fetchOneProductInv(id);
		if(productInvView == null) {
			throw new OTException("#product.invalid", 400);
		}
		return new WipMasterDto(productInvView);
	}
	
	

	@Override
	public WipMasterDto updateProductGroup(Long id, WipMasterDto body) throws OTException {
		WipMasterView productView = this.wipRepository.fetchOneProductInv(id);
		if(productView == null) {
			throw new OTException("#product.invalid", 400);
		}		
		String queryStr = "UPDATE TB_OCP_STOCK_ENTRY "
				+ " SET quantity = ?2 "
				+ "	WHERE id = ?1 ";
		rawQueryExec.execute(queryStr, id, body.getQuantity());
		productView = this.wipRepository.fetchOneProductInv(id);
		return new WipMasterDto(productView);
	}

		
	@Override
	public PaginationDto fetchAllInvProducts(String search, Pageable pagingParams) {
		List<BaseDto> baseDto = new ArrayList<BaseDto>();
		Page<WipMasterView> responseList = this.wipRepository.getProductInvList(pagingParams); 
		if(!responseList.isEmpty()) {
			responseList.forEach(item->{
				WipMasterDto productCostDto = new WipMasterDto(item);
				baseDto.add(productCostDto);
			}); 
		}
		return new PaginationDto(responseList.getTotalElements(), baseDto);
	}	
	
}
