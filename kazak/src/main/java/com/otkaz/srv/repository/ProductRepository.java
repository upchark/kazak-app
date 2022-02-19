package com.otkaz.srv.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.otkaz.srv.entity.Product;
import com.otkaz.srv.projection.ProductCostGroupView;
import com.otkaz.srv.projection.ProductGroupView;
import com.otkaz.srv.projection.ProductInvView;
import com.otkaz.srv.projection.ProductView;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long>, JpaRepository<Product, Long>  {

	
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
	
	
	@Query(value = "select p.id,p.maktx, p.name, p.rank "
			+ " from TB_OCP_PRODUCTS_INV p "
			+ "	where ((?1 is null or p.maktx like cast(?1 as varchar2(255 CHAR))) "
			+ "and (?1 is null or p.name like cast(?1 as varchar2(255 CHAR)))) and (?2 is null or p.name = ?2)", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_PRODUCTS_INV p "
					+ "	where ((?1 is null or p.name like cast(?1 as varchar2(255 CHAR))) and (?1 is null or p.maktx like cast(?1 as varchar2(255 CHAR))))  and (?2 is null or p.name = ?2)",
			nativeQuery = true)
	public Page<ProductGroupView> fetchAllProductsInv(String search, String product, Pageable pagingParams); 

	

	@Query(value = "select p.id, p.name, p.type, p.rank "
			+ " from TB_OCP_PRODUCTS p "
			+ "	where p.id = ?1 ", nativeQuery = true)
	public ProductView fetchOneProduct(Long id); 
	
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
	
	@Query(value = "select  p.id, p.maktx, p.name,  p.rank "
			+ " from TB_OCP_PRODUCTS_INV p "
			+ "	order by id desc FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public ProductInvView fetchLatestProductInv(); 
	
	@Query(value = "select  min(p.id) id, p.name name "
			+ " from TB_OCP_PRODUCTS_INV p group by p.name"
			+ "	order by name desc ", nativeQuery = true)
	public Page<ProductCostGroupView> getProductInvList(Pageable pagingParams);
	


}
