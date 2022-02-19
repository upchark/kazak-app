package com.otkaz.srv.projection;

import java.math.BigDecimal;

public interface ProfitabilityPivotItemView {
	
	String getLevel1();
	
	String getLevel2();
	
	String getLevel3();
	
	String getLevel4();
	
	String getLevel5();
	
	BigDecimal getNetVolume();
	
	BigDecimal getNrpUsdPerTon();
	
	BigDecimal getNrpAmountInMillion();
	
	BigDecimal getContributionUsdPerTon();
	
	BigDecimal getContributionAmountInMillion();
	
	BigDecimal getEbitdaUsdPerTon();
	
	BigDecimal getEbitdaAmountInMillion();
	
	
}
