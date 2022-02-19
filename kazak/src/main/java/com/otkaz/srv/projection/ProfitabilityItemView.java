package com.otkaz.srv.projection;

import java.math.BigDecimal;

public interface ProfitabilityItemView {

	String getName();
	
	BigDecimal getNetVolume();
	
	BigDecimal getNrpUsdPerTon();
	
	BigDecimal getNrpAmountInMillion();
	
	BigDecimal getContributionUsdPerTon();
	
	BigDecimal getContributionAmountInMillion();
	
	BigDecimal getEbitdaUsdPerTon();
	
	BigDecimal getEbitdaAmountInMillion();
	
	
}
