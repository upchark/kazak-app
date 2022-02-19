package com.otkaz.srv.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.otkaz.srv.entity.OCPStockProduct;
import com.otkaz.srv.projection.OCPStockProductView;

@Repository
public interface OCPStockProductRepository extends PagingAndSortingRepository<OCPStockProduct, Long> , JpaRepository<OCPStockProduct, Long>{

	@Query(value = "select p.id, p.D_PRODUCT productId, p.PROD_SIMPLIFIED code, p.PRODUCT_2 name, p.PRODUCT_SORT productOrder"
			+ " from TB_OCP_STOCK_MB_PRODUCT_DEV p "
			+ "	where (?1 is null or p.PRODUCT_2 like cast(?1 as varchar2(255 CHAR))) order by p.PRODUCT_SORT", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_STOCK_MB_PRODUCT_DEV p "
					+ "	where (?1 is null or p.PRODUCT_2 like cast(?1 as varchar2(255 CHAR))) ",
			nativeQuery = true)
	Page<OCPStockProductView> fetchAllProducts(String search, Pageable pagingParams);

}
