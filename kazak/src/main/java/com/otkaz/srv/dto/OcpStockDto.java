package com.otkaz.srv.dto;

import java.util.ArrayList;
import java.util.List;

import com.otkaz.srv.entity.OCPStock;

public class OcpStockDto extends BaseDto{
	
	private List<OCPStock> bpmData = new ArrayList<>();
	
	private List<OCPStock> mrfData = new ArrayList<>();;
	
	private List<OCPStock> indexData = new ArrayList<>();;

	public List<OCPStock> getBpmData() {
		return bpmData;
	}

	public void setBpmData(List<OCPStock> bpmData) {
		this.bpmData = bpmData;
	}

	public List<OCPStock> getMrfData() {
		return mrfData;
	}

	public void setMrfData(List<OCPStock> mrfData) {
		this.mrfData = mrfData;
	}

	public List<OCPStock> getIndexData() {
		return indexData;
	}

	public void setIndexData(List<OCPStock> indexData) {
		this.indexData = indexData;
	}
	
}
