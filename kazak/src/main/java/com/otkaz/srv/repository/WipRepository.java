package com.otkaz.srv.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.otkaz.srv.entity.Wip;
import com.otkaz.srv.projection.WipMasterView;
import com.otkaz.srv.projection.ProductGroupView;
import com.otkaz.srv.projection.ProductInvView;
import com.otkaz.srv.projection.ProductView;

@Repository
public interface WipRepository extends PagingAndSortingRepository<Wip, Long>, JpaRepository<Wip, Long>  {

	
	/*
	@Query(value = "select p.id, p.name, p.type, p.rank "
			+ " from TB_OCP_PRODUCTS p ", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_PRODUCTS p ",
			nativeQuery = true)
	public List<ProductView> fetchAllProducts(); 
	
	
	@Query(value = "select  p.rank , p.type"
			+ " from TB_OCP_PRODUCTS p "
			+ "	where p.name = ?1 "
			+ "	order by rank desc FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public ProductView findLatestRankFromProduct(String productGroup);
	
	@Query(value = "select p.id, p.name, p.type, p.rank "
			+ " from TB_OCP_PRODUCTS p "
			+ "	where (?1 is null or p.name like cast(?1 as varchar2(255 CHAR))) "
			+ "	and (?2 is null or p.type = ?2) ", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_PRODUCTS p "
					+ "	where (?1 is null or p.name like cast(?1 as varchar2(255 CHAR))) "
					+ "	and (?2 is null or p.type = ?2) ",
			nativeQuery = true)
	public Page<ProductView> fetchAllProducts(String search, String type, Pageable pagingParams); 
	
	@Query(value = "select p.id,p.maktx, p.name, p.type, p.rank "
			+ " from TB_OCP_PRODUCTSGROUP p "
			+ "	where (?1 is null or p.maktx like cast(?1 as varchar2(255 CHAR))) and (?1 is null or p.name like cast(?1 as varchar2(255 CHAR)))"
			+ "	and (?2 is null or p.name = ?2) ", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_PRODUCTSGROUP p "
					+ "	where (?1 is null or p.name like cast(?1 as varchar2(255 CHAR))) and (?1 is null or p.maktx like cast(?1 as varchar2(255 CHAR)))"
					+ "	and (?2 is null or p.name = ?2) ",
			nativeQuery = true)
	public Page<ProductGroupView> fetchAllProductsGroup(String search, String product, Pageable pagingParams);
	*/
	
	@Query(value = "select p.id,p.product, p.product_type, p.quantity, (p.entry_date + 1) as entry_date "
			+ " from TB_OCP_STOCK_ENTRY p "
			+ "	where ((?1 is null or p.product like cast(?1 as varchar2(255 CHAR))) "
			+ "and (?1 is null or p.product like cast(?1 as varchar2(255 CHAR)))) and (?2 is null or p.product = ?2)", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_STOCK_ENTRY p "
					+ "	where ((?1 is null or p.product like cast(?1 as varchar2(255 CHAR))) and (?1 is null or p.product like cast(?1 as varchar2(255 CHAR))))  and (?2 is null or p.product = ?2)",
			nativeQuery = true)
	public Page<WipMasterView> fetchAllProductsInv(String search, String product, Pageable pagingParams); 	
	
	@Query(value = "select  p.id, p.product_type, p.product,  p.quantity, p.entry_date "
			+ " from TB_OCP_STOCK_ENTRY p "
			+ "	order by id desc FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public WipMasterView fetchLatestProductInv(); 

	@Query(value = "select count(p.id) as total "
			+ " from TB_OCP_STOCK_ENTRY p where p.product= ?1 AND to_char(p.entry_date, 'DD-MM-YYYY') = ?2 ", nativeQuery = true)
	public Integer checkDuplicate(String product, Date entry_date);
	
	@Query(value = "select count(p.id) as total "
			+ " from TB_OCP_STOCK_ENTRY p where p.product= ?1 AND to_char(p.entry_date, 'DD-MM-YYYY') = ?2 ", nativeQuery = true)
	public Integer checkDuplicate1(String product, String entry_date);
	 
	
	@Query(value = "select p.id, p.product_type, p.product,  p.quantity, p.entry_date "
			+ " from TB_OCP_STOCK_ENTRY p "
			+ "	where p.id = ?1 ", nativeQuery = true)
	public WipMasterView fetchOneProductInv(Long id); 
	
	@Query(value = "select  min(p.id) id, p.product name "
			+ " from TB_OCP_STOCK_ENTRY p group by p.product"
			+ "	order by product desc ", nativeQuery = true)
	public Page<WipMasterView> getProductInvList(Pageable pagingParams);
	
	/*
	@Query(value = "select p.id, p.maktx, p.name, p.type, p.rank "
			+ " from TB_OCP_PRODUCTSGROUP p "
			+ "	where p.id = ?1 ", nativeQuery = true)
	public ProductGroupView fetchOneProductGroup(Long id); 
	
	
	@Query(value = "select p.id, p.maktx, p.name,  p.rank "
			+ " from TB_OCP_PRODUCTS_Inv p "
			+ "	where p.id = ?1 ", nativeQuery = true)
	public ProductInvView fetchOneProductInv(Long id); 

	@Query(value = "select p.rank "
			+ " from TB_OCP_PRODUCTS p "
			+ "	where p.type = ?1 "
			+ "	order by rank desc FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public ProductView findLatestRank(String type); 

	@Query(value = "select p.id, p.name, p.type, p.rank "
			+ " from TB_OCP_PRODUCTS p "
			+ "	order by id desc FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public ProductView fetchLatestProduct(); 
	
	@Query(value = "select  p.id, p.maktx, p.name, p.type, p.rank "
			+ " from TB_OCP_PRODUCTSGROUP p "
			+ "	order by id desc FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public ProductGroupView fetchLatestProductGroup(); 	
	
	
	
*/

}
