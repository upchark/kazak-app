package com.otkaz.srv.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.otkaz.srv.entity.ProductCost;
import com.otkaz.srv.projection.ProductCostGroupView;
import com.otkaz.srv.projection.ProductCostView;

@Repository
public interface ProductCostRepository extends PagingAndSortingRepository<ProductCost, Long>, JpaRepository<ProductCost, Long>  {

	@Query(value = "select pc.id, p.id productId, pc.product productName,pc.id productRank, "
			+ "	pc.month, pc.year, pc.fixed_cost fixedCost, pc.variable_cost variableCost "
			+ " from TB_OCP_INVOICE_PROD_FC_VC pc left join TB_OCP_PRODUCTS_INV p on p.name = pc.product"
			+ "	where (?1 is null or pc.product like cast(?1 as varchar2(255 CHAR))) "
			+ "	and (?2 is null or pc.year = ?2) "
			+ "	and (?3 is null or pc.month = ?3) "
			+ "	and (?4 is null or p.id = ?4) ", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_INVOICE_PROD_FC_VC pc left join TB_OCP_PRODUCTS_INV p on p.name = pc.product "
					+ "	where (?1 is null or p.name like cast(?1 as varchar2(255 CHAR))) "
					+ "	and (?2 is null or pc.year = ?2) "
					+ "	and (?3 is null or pc.month = ?3) "
					+ "	and (?4 is null or p.id = ?4) ",
			nativeQuery = true)
	public Page<ProductCostView> fetchAllProductCosts(String search, Integer year, Integer month, Long productId, Pageable pagingParams); 

	@Query(value = "select pc.id, pc.id productId, pc.product productName,  pc.id productRank, "
			+ "	pc.month, pc.year, pc.fixed_cost fixedCost, pc.variable_cost variableCost "
			+ " from TB_OCP_INVOICE_PROD_FC_VC pc "
			+ "	where (?1 is null or pc.product like cast(?1 as varchar2(255 CHAR))) "
			+ "	and (?2 is null or pc.year = ?2) "
			+ "	and (?3 is null or pc.month = ?3) ", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_INVOICE_PROD_FC_VC pc " 
					+ "	where (?1 is null or pc.product like cast(?1 as varchar2(255 CHAR))) "
					+ "	and (?2 is null or pc.year = ?2) "
					+ "	and (?3 is null or pc.month = ?3) ",
			nativeQuery = true)
	public Page<ProductCostView> fetchAllProductCosts(String search, Integer year, Integer month,  Pageable pagingParams); 

	
	@Query(value = "select pc.id, pc.id productId, pc.product productName,  pc.id productRank, "
			+ "	pc.month, pc.year, pc.fixed_cost fixedCost, pc.variable_cost variableCost "
			+ " from TB_OCP_INVOICE_PROD_FC_VC pc "
			+ "	where pc.id = ?1 ", nativeQuery = true)
	public ProductCostView fetchOneProductCost(Long id); 

	@Query(value = "select pc.product "
			+ " from TB_OCP_INVOICE_PROD_FC_VC pc "
			+ "	where pc.product = ?1 "  
			+ "	and pc.year = ?2 "
			+ "	and pc.month = ?3 FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public ProductCostView validateProductCost(String productName, Integer year, String month); 

	@Query(value = "select pc.id, p.id productId, p.name productName,  p.rank productRank, "
			+ "	pc.month, pc.year, pc.fixed_cost fixedCost, pc.variable_cost variableCost "
			+ " from TB_OCP_INVOICE_PROD_FC_VC pc "
			+ "	JOIN TB_OCP_PRODUCTS_INV p on pc.product = p.name "  
			+ "	order by pc.id desc FETCH FIRST 1 ROWS ONLY ", nativeQuery = true)
	public ProductCostView fetchLatestProductCost(); 

	
	@Query(value = "select  min(p.id) id, p.name name "
			+ " from TB_OCP_PRODUCTS_INV p group by p.name"
			+ "	order by name desc ", nativeQuery = true)
	public Page<ProductCostGroupView> getProductCostGroupList(Pageable pagingParams);
	
}