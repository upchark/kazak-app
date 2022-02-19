package com.otkaz.srv.dto;

import java.io.Serializable;
import java.util.List;

public class OrderReportDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private List<OPDto> rolledProducts;

	private List<OPDto> semisProducts;
	
	private List<OPDto> consignmentProducts;

	private OPDto totalRolled;

	private OPDto totalSemis;
	
	private OPDto totalPigiron;
	
	private OPDto totalConsignment;

	private OPDto total;

	public OrderReportDto() {
	}

	public OrderReportDto(List<OPDto> rolledProducts, List<OPDto> semisProducts,List<OPDto> consignmentProducts , OPDto totalRolled, OPDto totalSemis, OPDto totalPigIron, OPDto totalConsignment, OPDto total) {
		this.rolledProducts = rolledProducts;
		this.semisProducts = semisProducts;
		this.consignmentProducts = consignmentProducts;
		this.totalRolled = totalRolled;
		this.totalSemis = totalSemis;
		this.totalPigiron = totalPigIron;
		this.totalConsignment = totalConsignment;
		this.total = total;
	}

	
	/**
	 * @return the totalConsignment
	 */
	public OPDto getTotalConsignment() {
		return totalConsignment;
	}

	/**
	 * @param totalConsignment the totalConsignment to set
	 */
	public void setTotalConsignment(OPDto totalConsignment) {
		this.totalConsignment = totalConsignment;
	}

	/**
	 * @return the consignmentProducts
	 */
	public List<OPDto> getConsignmentProducts() {
		return consignmentProducts;
	}

	/**
	 * @param consignmentProducts the consignmentProducts to set
	 */
	public void setConsignmentProducts(List<OPDto> consignmentProducts) {
		this.consignmentProducts = consignmentProducts;
	}

	public List<OPDto> getRolledProducts() {
		return rolledProducts;
	}

	public void setRolledProducts(List<OPDto> rolledProducts) {
		this.rolledProducts = rolledProducts;
	}

	public List<OPDto> getSemisProducts() {
		return semisProducts;
	}

	public void setSemisProducts(List<OPDto> semisProducts) {
		this.semisProducts = semisProducts;
	}

	public OPDto getTotalRolled() {
		return totalRolled;
	}

	public void setTotalRolled(OPDto totalRolled) {
		this.totalRolled = totalRolled;
	}

	public OPDto getTotalSemis() {
		return totalSemis;
	}

	public void setTotalSemis(OPDto totalSemis) {
		this.totalSemis = totalSemis;
	}

	public OPDto getTotal() {
		return total;
	}

	public void setTotal(OPDto total) {
		this.total = total;
	}

	/**
	 * @return the totalPigiron
	 */
	public OPDto getTotalPigiron() {
		return totalPigiron;
	}

	/**
	 * @param totalPigiron the totalPigiron to set
	 */
	public void setTotalPigiron(OPDto totalPigiron) {
		this.totalPigiron = totalPigiron;
	}
	
	
}
