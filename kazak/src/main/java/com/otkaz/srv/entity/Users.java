package com.otkaz.srv.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Where;

import com.otkaz.srv.entity.listeners.EntityListener;
import com.otkaz.srv.enums.Roles;

@Entity
@Table(name = "TB_OCP_USERS_V1")
@Where(clause = "deleted = false")
@EntityListeners(EntityListener.class)
public class Users extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "guid")
	private Long id;

	@Column(name = "employeecode")
	private String employeeCode;

	@Column(name = "admincode")
	private String adminCode;

	@Enumerated(EnumType.STRING)
	private Roles role;

	private String email;

	private String password;
	
	@Column(name = "active")
	private Boolean active;
	
	@Column(name = "activated")
	private Boolean activated;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmployeeCode() {
		return employeeCode;
	}

	public void setEmployeeCode(String employeeCode) {
		this.employeeCode = employeeCode;
	}

	public String getAdminCode() {
		return adminCode;
	}

	public void setAdminCode(String adminCode) {
		this.adminCode = adminCode;
	}

	public Roles getRole() {
		return role;
	}

	public void setRole(Roles role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Boolean getActivated() {
		return activated;
	}

	public void setActivated(Boolean activated) {
		this.activated = activated;
	}
}
