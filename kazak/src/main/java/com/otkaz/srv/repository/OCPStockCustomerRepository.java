package com.otkaz.srv.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.otkaz.srv.entity.OCPStockMarket;
import com.otkaz.srv.projection.OCPStockMarketView;

@Repository
public interface OCPStockCustomerRepository extends PagingAndSortingRepository<OCPStockMarket, Long> , JpaRepository<OCPStockMarket, Long>{

	@Query(value = "select p.id, p.D_CUSTOMER customerId, p.EN_NAME enName, p.RU_NAME ruName, p.EXTRA_1 extra"
			+ " from TB_OCP_STOCK_MB_CUSTOMER p "
			+ "	where (?1 is null or p.D_CUSTOMER like cast(?1 as varchar2(255 CHAR))) order by p.D_CUSTOMER", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_STOCK_MB_CUSTOMER p "
					+ "	where (?1 is null or p.D_CUSTOMER like cast(?1 as varchar2(255 CHAR))) ",
			nativeQuery = true)
	Page<OCPStockMarketView> fetchAll(String search, Pageable pagingParams);

}
