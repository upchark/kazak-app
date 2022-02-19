package com.otkaz.srv.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import com.otkaz.srv.api.exportation.annotation.ExcelBindByName;
import com.otkaz.srv.projection.SPView;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SPDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int rowspan;
	
	@ExcelBindByName(methodName = "getName", position = 0)
	private String name ;
	
	@ExcelBindByName(methodName = "getProduct", position = 1)
	private String product;
	
	private String type;
	
	@ExcelBindByName(methodName = "getHsm", position = 2)
	private BigDecimal hsm;
	
	@ExcelBindByName(methodName = "getCrm2", position = 3)
	private BigDecimal crm2;
	
	@ExcelBindByName(methodName = "getCrm3", position = 4)
	private BigDecimal crm3;
	
	@ExcelBindByName(methodName = "getGalvashops", position = 5)
	private BigDecimal galvashops;
	
	@ExcelBindByName(methodName = "getRebarmill", position = 6)
	private BigDecimal rebarmill;
	
	@ExcelBindByName(methodName = "getPipemill", position = 7)
	private BigDecimal pipemill;	
	
	@ExcelBindByName(methodName = "getGrandtotal", position = 8)
	private BigDecimal grandtotal;
	
	@ExcelBindByName(methodName = "getFreeTodespatch", position = 9)
	private BigDecimal freeTodespatch;
	
	@ExcelBindByName(methodName = "getBlocked", position = 10)
	private BigDecimal blocked;
	
	@ExcelBindByName(methodName = "getPrime", position = 11)
	private BigDecimal prime;
	
	@ExcelBindByName(methodName = "getNonprime", position = 12)
	private BigDecimal nonprime;
	
	@ExcelBindByName(methodName = "getLoadonwagon", position = 13)
	private BigDecimal loadonwagon;
	
	@ExcelBindByName(methodName = "getGrandincltotal", position = 14)
	private BigDecimal grandincltotal;

	public SPDto() {
	}

	public SPDto(SPView spView) {
	   this.product = spView.getProduct();
	   this.type = spView.getProductType();
	   this.hsm = spView.getHsm();
	   this.crm2 = spView.getCrm2();
	   this.crm3 = spView.getCrm3();
	   this.galvashops = spView.getGalvashops();
	   this.rebarmill = spView.getRebarmill();
	   this.pipemill = spView.getPipemill();
	   this.grandtotal = spView.getGranttotal();
	   this.freeTodespatch = spView.getFreefordispatch();
	   this.blocked = spView.getBlocked();
	   this.prime = spView.getPrime();
	   this.nonprime = spView.getNonprime();
	   this.loadonwagon = spView.getLoadedonwagon();
	   this.grandincltotal = spView.getGandincltotal();
	}


}
