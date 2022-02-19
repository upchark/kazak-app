package com.otkaz.srv.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.otkaz.srv.entity.Users;
import com.otkaz.srv.projection.EmployeeView;
import com.otkaz.srv.projection.UserView;


@Repository
public interface UserRepository extends PagingAndSortingRepository<Users, Long>, JpaRepository<Users, Long> {
	
	@Query(value = "select * from TB_OCP_USERS_V1 where id = ?1", nativeQuery = true)
	Users findByUser(Long id);

	@Query(value = "select u.id as id, u.employeecode as code, e.name, e.employeenumber as numberValue, "
			+ "	u.email, e.fax, e.mobile, e.phone, u.role, u.active, u.activated "
			+ "	from TB_OCP_USERS_V1 u"
			+ "	join TB_OCP_EMPLOYEE e on e.employeecode = u.employeecode "
			+ "	where u.id = ?1", nativeQuery = true)
	public UserView findEmployeeUser(Long id); 

	@Query(value = "select u.id as id, u.admincode as code, a.name, a.adminnumber as numberValue, "
			+ "	u.email, a.fax, a.mobile, a.phone, u.role, u.active, u.activated "
			+ "	from TB_OCP_USERS_V1 u"
			+ "	join TB_OCP_ADMINS a on a.admincode = u.admincode "
			+ "	where u.id = ?1", nativeQuery = true)
	public UserView findAdminUser(Long id); 

	public Users findByEmail(String email);
	
	@Query(value = "select e.name "
			+ "	from TB_OCP_EMPLOYEE e "
			+ "	where e.employeecode = ?1", nativeQuery = true)
	public EmployeeView validateEmployeeCode(String employeeCode); 

	@Query(value = "select e.employeecode as employeeCode, e.name, e.employeenumber as employeeNumber, "
			+ "	e.email, e.fax, e.mobile, e.phone, e.active "
			+ " from TB_OCP_EMPLOYEE e "
			+ " left join TB_OCP_USERS_V1 u on e.employeecode = u.employeecode "
			+ "	where u.id is null "
			+ "	and (?1 is null or e.name like cast(?1 as varchar2(255 CHAR))) ", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_EMPLOYEE e "
					+ " left join TB_OCP_USERS_V1 u on e.employeecode = u.employeecode "
					+ "	where u.id is null and e.active = 1 "
					+ "	and (?1 is null or e.name like cast(?1 as varchar2(255 CHAR))) ",
			nativeQuery = true)
	public Page<EmployeeView> fetchEmployees(String search, Pageable pagingParams); 
	
	@Query(value = "select u.id as id, u.employeecode as code, e.name, e.employeenumber as numberValue, "
			+ "	u.email, e.fax, e.mobile, e.phone, u.role, ec.name as createdBy, u.active "
			+ " from TB_OCP_USERS_V1 u "
			+ " join TB_OCP_EMPLOYEE e on e.employeecode = u.employeecode "
			+ " left join TB_OCP_USERS_V1 uc on uc.id = u.createdby "
			+ " left join TB_OCP_EMPLOYEE ec on ec.employeecode = uc.employeecode "
			+ "	where (?1 is null "
			+ "			or e.name like cast(?1 as varchar2(255 CHAR)) "
			+ "			or e.email like cast(?1 as varchar2(255 CHAR)) "
			+ "			or e.employeecode like cast(?1 as varchar2(255 CHAR)) "
			+ "			or e.employeenumber like cast(?1 as varchar2(255 CHAR))) "
			+ "	and (?2 is null or u.active = ?2) ", 
			countQuery = "SELECT COUNT(*) "
					+ " from TB_OCP_USERS_V1 u "
					+ " join TB_OCP_EMPLOYEE e on e.employeecode = u.employeecode "
					+ " left join TB_OCP_USERS_V1 uc on uc.id = u.createdby "
					+ " left join TB_OCP_EMPLOYEE ec on ec.employeecode = uc.employeecode "
					+ "	where (?1 is null "
					+ "			or e.name like cast(?1 as varchar2(255 CHAR)) "
					+ "			or e.email like cast(?1 as varchar2(255 CHAR)) "
					+ "			or e.employeecode like cast(?1 as varchar2(255 CHAR)) "
					+ "			or e.employeenumber like cast(?1 as varchar2(255 CHAR))) "
					+ "	and (?2 is null or u.active = ?2) ",
			nativeQuery = true)
	Page<UserView> findUserListBySuperAdmin(String search, Boolean active, Pageable pagingParams);

	Long countByEmail(String email);
}
