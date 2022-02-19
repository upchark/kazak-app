package com.otkaz.srv.dto;

import java.io.Serializable;
import java.util.List;

public class OrderReportZayvkasDto extends BaseDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private List<OPZayvkasDto> rolledProducts;

	private List<OPZayvkasDto> semisProducts;
	
	private List<OPZayvkasDto> consignmentProducts;

	private OPZayvkasDto totalRolled;

	private OPZayvkasDto totalSemis;
	
	private OPZayvkasDto totalPigiron;

	private OPZayvkasDto total;
	
	private OPZayvkasDto totalConsignment;

	public OrderReportZayvkasDto() {
	}

	public OrderReportZayvkasDto(List<OPZayvkasDto> rolledProducts, List<OPZayvkasDto> semisProducts, List<OPZayvkasDto> consignmentProducts, OPZayvkasDto totalRolled, OPZayvkasDto totalSemis, OPZayvkasDto totalPigiron, OPZayvkasDto total, OPZayvkasDto totalConsignment) {
		this.rolledProducts = rolledProducts;
		this.semisProducts = semisProducts;
		this.consignmentProducts = consignmentProducts;
		this.totalRolled = totalRolled;
		this.totalSemis = totalSemis;
		this.totalPigiron = totalPigiron;
		this.total = total;
		this.totalConsignment = totalConsignment;
	}

	public List<OPZayvkasDto> getRolledProducts() {
		return rolledProducts;
	}

	public void setRolledProducts(List<OPZayvkasDto> rolledProducts) {
		this.rolledProducts = rolledProducts;
	}

	public List<OPZayvkasDto> getSemisProducts() {
		return semisProducts;
	}

	public void setSemisProducts(List<OPZayvkasDto> semisProducts) {
		this.semisProducts = semisProducts;
	}

	public OPZayvkasDto getTotalRolled() {
		return totalRolled;
	}

	public void setTotalRolled(OPZayvkasDto totalRolled) {
		this.totalRolled = totalRolled;
	}

	public OPZayvkasDto getTotalSemis() {
		return totalSemis;
	}

	public void setTotalSemis(OPZayvkasDto totalSemis) {
		this.totalSemis = totalSemis;
	}

	public OPZayvkasDto getTotal() {
		return total;
	}

	public void setTotal(OPZayvkasDto total) {
		this.total = total;
	}

	/**
	 * @return the consignmentProducts
	 */
	public List<OPZayvkasDto> getConsignmentProducts() {
		return consignmentProducts;
	}

	/**
	 * @param consignmentProducts the consignmentProducts to set
	 */
	public void setConsignmentProducts(List<OPZayvkasDto> consignmentProducts) {
		this.consignmentProducts = consignmentProducts;
	}

	/**
	 * @return the totalConsignment
	 */
	public OPZayvkasDto getTotalConsignment() {
		return totalConsignment;
	}

	/**
	 * @param totalConsignment the totalConsignment to set
	 */
	public void setTotalConsignment(OPZayvkasDto totalConsignment) {
		this.totalConsignment = totalConsignment;
	}

	/**
	 * @return the totalPigIron
	 */
	public OPZayvkasDto getTotalPigiron() {
		return totalPigiron;
	}

	/**
	 * @param totalPigIron the totalPigIron to set
	 */
	public void setTotalPigiron(OPZayvkasDto totalPigiron) {
		this.totalPigiron = totalPigiron;
	}
	
	
}
