package com.otkaz.srv.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.otkaz.srv.annotation.ExcelColumn;
import com.otkaz.srv.utils.Constants;

@Entity
@Table(name = Constants.TB_OCP_STOCK_MB_BPM_DEV)
//@EntityListeners(EntityListeners.class)
public class OCPStockBPM extends OCPStock {

	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	//@SequenceGenerator(name = "ISEQ$$_110701", sequenceName = "ISEQ$$_110701")
	@Column(name = "ID")
	private Long id;

	@ExcelColumn(name = "D_CA", position = 0)
	@Column(name = "D_CA")
	private String dCa;

	@ExcelColumn(name = "D_DP", position = 1)
	@Column(name = "D_DP")
	private java.util.Date dDp;

	@ExcelColumn(name = "D_CUSTOMER", position = 2)
	@Column(name = "D_CUSTOMER")
	private String dCustomer;

	@ExcelColumn(name = "D_PRODUCT", position = 3)
	@Column(name = "D_PRODUCT")
	private String dProduct;

	/*
	 * @ExcelColumn(name = "PRODUCT", position = 4)
	 * 
	 * @Column(name = "PRODUCT") private String product;
	 */

	@ExcelColumn(name = "D_MARKET", position = 5)
	@Column(name = "D_MARKET")
	private String dMarket;

	/*
	 * @ExcelColumn(name = "MARKET", position = 6)
	 * 
	 * @Column(name = "MARKET") private String market;
	 */

	@ExcelColumn(name = "D_PE", position = 7)
	@Column(name = "D_PE")
	private String dPe;

	@ExcelColumn(name = "D_RU", position = 8)
	@Column(name = "D_RU")
	private String dRu;

	@ExcelColumn(name = "D_FL", position = 9)
	@Column(name = "D_FL")
	private String dFl;

	@ExcelColumn(name = "D_AU", position = 10)
	@Column(name = "D_AU")
	private String dAu;

	@ExcelColumn(name = "D_PA", position = 0)
	@Column(name = "D_PA")
	private String dPa;

	@ExcelColumn(name = "D_CU", position = 0)
	@Column(name = "D_CU")
	private String dCu;

	@ExcelColumn(name = "D_ANALYSIS3", position = 0)
	@Column(name = "D_ANALYSIS3")
	private String dAnalysis3;

	@ExcelColumn(name = "QT7000", position = 0)
	@Column(name = "QT7000")
	private Double qt7000;

	@ExcelColumn(name = "T7000", position = 0)
	@Column(name = "T7000")
	private Double t7000;

	@ExcelColumn(name = "NRP_Calculated_filed", position = 0)
	@Column(name = "NRP")
	private Double nrp;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getdCa() {
		return dCa;
	}

	public void setdCa(String dCa) {
		this.dCa = dCa;
	}

	public Date getdDp() {
		return dDp;
	}

	public void setdDp(Date dDp) {
		this.dDp = dDp;
	}

	public String getdCustomer() {
		return dCustomer;
	}

	public void setdCustomer(String dCustomer) {
		this.dCustomer = dCustomer;
	}

	public String getdProduct() {
		return dProduct;
	}

	public void setdProduct(String dProduct) {
		this.dProduct = dProduct;
	}

	/*
	 * public String getProduct() { return product; }
	 * 
	 * public void setProduct(String product) { this.product = product; }
	 */

	public String getdMarket() {
		return dMarket;
	}

	public void setdMarket(String dMarket) {
		this.dMarket = dMarket;
	}

	/*
	 * public String getMarket() { return market; }
	 * 
	 * public void setMarket(String market) { this.market = market; }
	 */

	public String getdPe() {
		return dPe;
	}

	public void setdPe(String dPe) {
		this.dPe = dPe;
	}

	public String getdRu() {
		return dRu;
	}

	public void setdRu(String dRu) {
		this.dRu = dRu;
	}

	public String getdFl() {
		return dFl;
	}

	public void setdFl(String dFl) {
		this.dFl = dFl;
	}

	public String getdAu() {
		return dAu;
	}

	public void setdAu(String dAu) {
		this.dAu = dAu;
	}

	public String getdPa() {
		return dPa;
	}

	public void setdPa(String dPa) {
		this.dPa = dPa;
	}

	public String getdCu() {
		return dCu;
	}

	public void setdCu(String dCu) {
		this.dCu = dCu;
	}

	public String getdAnalysis3() {
		return dAnalysis3;
	}

	public void setdAnalysis3(String dAnalysis3) {
		this.dAnalysis3 = dAnalysis3;
	}

	public Double getQt7000() {
		return qt7000;
	}

	public void setQt7000(Double qt7000) {
		this.qt7000 = qt7000;
	}

	public Double getT7000() {
		return t7000;
	}

	public void setT7000(Double t7000) {
		this.t7000 = t7000;
	}

	public Double getNrp() {
		return nrp;
	}

	public void setNrp(Double nrp) {
		this.nrp = nrp;
	}

	@Override
	public String toString() {
		return "OCPStock [dCa=" + dCa + ", dDp=" + dDp + ", dCustomer=" + dCustomer + ", dProduct=" + dProduct
				+ ", dMarket=" + dMarket + ", dPe=" + dPe + ", dRu="
				+ dRu + ", dFl=" + dFl + ", dAu=" + dAu + ", dPa=" + dPa + ", dCu=" + dCu + ", dAnalysis3=" + dAnalysis3
				+ ", qt7000=" + qt7000 + ", t7000=" + t7000 + ", nrp=" + nrp + "]";
	}

}
