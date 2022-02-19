package com.otkaz.srv.projection;

import java.math.BigDecimal;

/**
 * Stock Report View projection file for getting data from repository
 * @author 
 *
 */
public interface SPView {

	String getProduct();
	
	String getProductType();

	BigDecimal getHsm();

	BigDecimal getCrm2();

	BigDecimal getCrm3();

	BigDecimal getGalvashops();

	BigDecimal getPipemill();

	BigDecimal getRebarmill();

	BigDecimal getGranttotal();

	BigDecimal getFreefordispatch();

	BigDecimal getBlocked();

	BigDecimal getPrime();

	BigDecimal getNonprime();

	BigDecimal getLoadedonwagon();

	BigDecimal getGandincltotal();
}
