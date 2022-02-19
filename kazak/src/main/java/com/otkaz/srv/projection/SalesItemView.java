package com.otkaz.srv.projection;

import java.math.BigDecimal;

public interface SalesItemView {
	
	String getName();
	
	BigDecimal getNetVolume();
	
	BigDecimal getExwUsdPerTon();
	
	BigDecimal getExwAmountInMillion();
	
	BigDecimal getContributionUsdPerTon();
	
	BigDecimal getContributionAmountInMillion();
	
	BigDecimal getVatAmountInMillion();
	
	BigDecimal getGrossNetOfVat();
}
