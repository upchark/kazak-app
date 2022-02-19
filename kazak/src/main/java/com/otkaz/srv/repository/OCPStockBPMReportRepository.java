package com.otkaz.srv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.otkaz.srv.entity.OCPStockBPM;


@Repository
public interface OCPStockBPMReportRepository extends PagingAndSortingRepository<OCPStockBPM, Long>, JpaRepository<OCPStockBPM, Long> {

	
}
