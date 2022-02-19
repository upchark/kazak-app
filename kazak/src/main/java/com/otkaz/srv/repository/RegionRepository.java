/**
 * 
 */
package com.otkaz.srv.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.otkaz.srv.entity.Product;
import com.otkaz.srv.projection.RegionCountryView;
import com.otkaz.srv.projection.RegionMasterView;

/**
 * @author sheen
 *
 */
public interface RegionRepository extends PagingAndSortingRepository<Product, Long>, JpaRepository<Product, Long> {

	
	
	@Query(value = "select p.id, p.name, p.rank "
			+ " from TB_OCP_REGIONS_MASTER p ", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_REGIONS_MASTER p ",
			nativeQuery = true)
	public List<RegionMasterView> fetchAllRegions(); 
	
	@Query(value = "select p.id, p.name, p.rank "
			+ " from TB_OCP_REGIONS_MASTER p "
			+ "	where (?1 is null or p.name like cast(?1 as varchar2(255 CHAR))) ", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_REGIONS_MASTER p "
					+ "	where (?1 is null or p.name like cast(?1 as varchar2(255 CHAR))) ",
			nativeQuery = true)
	public Page<RegionMasterView> fetchAllRegions(String search, Pageable pagingParams); 

	@Query(value = "select p.id, p.country, p.name, p.rank, p.country_rank "
			+ " from TB_OCP_REGIONS p "
			+ "	where (?1 is null or p.country like cast(?1 as varchar2(255 CHAR))) ", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_REGIONS p "
					+ "	where (?1 is null or p.country like cast(?1 as varchar2(255 CHAR))) ",
			nativeQuery = true)
	public Page<RegionCountryView> fetchAllCountry(String search, Pageable pagingParams); 

	
	@Query(value = "select p.rank "
			+ " from TB_OCP_REGIONS_MASTER p "
			+ "	where p.name = ?1 "
			+ "	order by rank desc FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public RegionMasterView findLatestRank(String name); 
	
	@Query(value = "select p.rank "
			+ " from TB_OCP_REGIONS_MASTER p "
			+ "	where p.name = ?1 "
			+ "	order by rank desc FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public RegionMasterView findLatestRankfromRegion(String name); 
	
	@Query(value = "select  p.id, p.name, p.rank "
			+ " from TB_OCP_REGIONS_MASTER p "
			+ "	order by id desc FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public RegionMasterView fetchLatestRegion(); 
	
	
	@Query(value = "select  p.id,p.country, p.name, p.rank "
			+ " from TB_OCP_REGIONS p "
			+ "	order by id desc FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public RegionCountryView fetchLatestCountry(); 
		
	@Query(value = "select p.id, p.name, p.rank "
			+ " from TB_OCP_REGIONS_MASTER p "
			+ "	where p.id = ?1 ", nativeQuery = true)
	public RegionMasterView fetchOneRegion(Long id); 
	
	@Query(value = "select p.id, p.country, p.name, p.rank "
			+ " from TB_OCP_REGIONS p "
			+ "	where p.id = ?1 ", nativeQuery = true)
	public RegionCountryView fetchOneCountry(Long id);
}
