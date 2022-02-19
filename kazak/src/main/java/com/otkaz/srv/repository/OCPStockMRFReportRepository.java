package com.otkaz.srv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.otkaz.srv.entity.OCPStockMRF;


@Repository
public interface OCPStockMRFReportRepository extends PagingAndSortingRepository<OCPStockMRF, Long>, JpaRepository<OCPStockMRF, Long> {

	
}
