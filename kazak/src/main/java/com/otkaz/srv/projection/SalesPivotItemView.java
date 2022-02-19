package com.otkaz.srv.projection;

import java.math.BigDecimal;

public interface SalesPivotItemView {
	
	String getLevel1();
	
	String getLevel2();
	
	String getLevel3();
	
	String getLevel4();
	
	String getLevel5();
	
	BigDecimal getNetVolume();
	
	BigDecimal getExwUsdPerTon();
	
	BigDecimal getExwAmountInMillion();
	
	BigDecimal getContributionUsdPerTon();
	
	BigDecimal getContributionAmountInMillion();
	
	BigDecimal getVatAmountInMillion();
	
	BigDecimal getGrossNetOfVat();
}
