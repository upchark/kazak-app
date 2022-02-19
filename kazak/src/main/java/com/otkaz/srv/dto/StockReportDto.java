package com.otkaz.srv.dto;

import java.io.Serializable;
import java.util.List;

/**
 * DTO for getting total for the Stockreport
 * @author 
 *
 */
public class StockReportDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private List<SPDto> fgProducts;

	private List<SPDto> semisProducts;
	
	private List<SPDto> wipProducts;
	
	private List<SPDto> fgatcsProducts;
	
	private List<SPDto> fgatportProducts;
	
	private List<SPDto> freeProducts;

	private SPDto totalFG;

	private SPDto totalSemis;
	
	private SPDto totalWIP;
	
	private SPDto total;
	
	private SPDto totalFgatcs;
	
	private SPDto totalFgatport;

	private SPDto totalfree;
	
	private SPDto totalAll;

	public StockReportDto() {
	}

	public StockReportDto(List<SPDto> fgProducts, List<SPDto> semisProducts,List<SPDto> wipProducts, List<SPDto> fgatcsProducts, List<SPDto> fgatportProducts, List<SPDto> freeProducts , SPDto totalFG, SPDto totalSemis, SPDto totalWIP, SPDto totalProduct, SPDto totalFgatcs,SPDto totalFgatport, SPDto totalfree, SPDto totalAll) {
		this.fgProducts = fgProducts;
		this.semisProducts = semisProducts;
		this.wipProducts = wipProducts;
		this.freeProducts = freeProducts;
		this.fgatcsProducts = fgatcsProducts;
		this.fgatportProducts = fgatportProducts;
		this.totalFG = totalFG;
		this.totalSemis = totalSemis;
		this.totalWIP = totalWIP;
		this.totalFgatcs = totalFgatcs;
		this.totalFgatport = totalFgatport;
		this.total = totalProduct;
		this.totalfree = totalfree;
		this.totalAll = totalAll;
	}

	/**
	 * @return the fgProducts
	 */
	public List<SPDto> getFgProducts() {
		return fgProducts;
	}

	/**
	 * @param fgProducts the fgProducts to set
	 */
	public void setFgProducts(List<SPDto> fgProducts) {
		this.fgProducts = fgProducts;
	}

	/**
	 * @return the semisProducts
	 */
	public List<SPDto> getSemisProducts() {
		return semisProducts;
	}

	/**
	 * @param semisProducts the semisProducts to set
	 */
	public void setSemisProducts(List<SPDto> semisProducts) {
		this.semisProducts = semisProducts;
	}

	/**
	 * @return the wipProducts
	 */
	public List<SPDto> getWipProducts() {
		return wipProducts;
	}

	/**
	 * @param wipProducts the wipProducts to set
	 */
	public void setWipProducts(List<SPDto> wipProducts) {
		this.wipProducts = wipProducts;
	}

	/**
	 * @return the freeProducts
	 */
	public List<SPDto> getFreeProducts() {
		return freeProducts;
	}

	/**
	 * @param freeProducts the freeProducts to set
	 */
	public void setFreeProducts(List<SPDto> freeProducts) {
		this.freeProducts = freeProducts;
	}

	/**
	 * @return the totalFG
	 */
	public SPDto getTotalFG() {
		return totalFG;
	}

	/**
	 * @param totalFG the totalFG to set
	 */
	public void setTotalFG(SPDto totalFG) {
		this.totalFG = totalFG;
	}

	/**
	 * @return the totalSemis
	 */
	public SPDto getTotalSemis() {
		return totalSemis;
	}

	/**
	 * @param totalSemis the totalSemis to set
	 */
	public void setTotalSemis(SPDto totalSemis) {
		this.totalSemis = totalSemis;
	}

	/**
	 * @return the totalWIP
	 */
	public SPDto getTotalWIP() {
		return totalWIP;
	}

	/**
	 * @param totalWIP the totalWIP to set
	 */
	public void setTotalWIP(SPDto totalWIP) {
		this.totalWIP = totalWIP;
	}

	/**
	 * @return the totalProduct
	 */
	public SPDto getTotal() {
		return total;
	}

	/**
	 * @param totalProduct the totalProduct to set
	 */
	public void setTotal(SPDto total) {
		this.total = total;
	}

	/**
	 * @return the totalfree
	 */
	public SPDto getTotalfree() {
		return totalfree;
	}

	/**
	 * @param totalfree the totalfree to set
	 */
	public void setTotalfree(SPDto totalfree) {
		this.totalfree = totalfree;
	}

	/**
	 * @return the totalAll
	 */
	public SPDto getTotalAll() {
		return totalAll;
	}

	/**
	 * @param totalAll the totalAll to set
	 */
	public void setTotalAll(SPDto totalAll) {
		this.totalAll = totalAll;
	}

	/**
	 * @return the fgatcsProducts
	 */
	public List<SPDto> getFgatcsProducts() {
		return fgatcsProducts;
	}

	/**
	 * @param fgatcsProducts the fgatcsProducts to set
	 */
	public void setFgatcsProducts(List<SPDto> fgatcsProducts) {
		this.fgatcsProducts = fgatcsProducts;
	}

	/**
	 * @return the fgatportProducts
	 */
	public List<SPDto> getFgatportProducts() {
		return fgatportProducts;
	}

	/**
	 * @param fgatportProducts the fgatportProducts to set
	 */
	public void setFgatportProducts(List<SPDto> fgatportProducts) {
		this.fgatportProducts = fgatportProducts;
	}

	/**
	 * @return the totalFgatcs
	 */
	public SPDto getTotalFgatcs() {
		return totalFgatcs;
	}

	/**
	 * @param totalFgatcs the totalFgatcs to set
	 */
	public void setTotalFgatcs(SPDto totalFgatcs) {
		this.totalFgatcs = totalFgatcs;
	}

	/**
	 * @return the totalFgatport
	 */
	public SPDto getTotalFgatport() {
		return totalFgatport;
	}

	/**
	 * @param totalFgatport the totalFgatport to set
	 */
	public void setTotalFgatport(SPDto totalFgatport) {
		this.totalFgatport = totalFgatport;
	}

	
	
}
