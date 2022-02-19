/**
 * 
 */
package com.otkaz.srv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.otkaz.srv.entity.Country;
import com.otkaz.srv.entity.Product;
import com.otkaz.srv.projection.RegionCountryView;

/**
 * @author Pappu added new repository to delete from country
 *
 */
/* Changes via @pappu 24-10-2021 */
public interface RegionCountryRepository extends PagingAndSortingRepository<Country, Long>, JpaRepository<Country, Long> {

	@Query(value = "select p.country_rank "
			+ " from TB_OCP_REGIONS p "
			+ "	order by id desc FETCH FIRST 1 ROWS ONLY", nativeQuery = true)
	public RegionCountryView fetchLatestCountryRank(); 
	
}
