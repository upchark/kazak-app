package com.otkaz.srv.entity.listeners;

import java.util.Date;

import javax.persistence.EntityManager;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.otkaz.srv.dto.SubjectDto;
import com.otkaz.srv.entity.BaseEntity;
import com.otkaz.srv.entity.Users;

@Component
public class EntityListener {

	private static EntityManager entityManager;

	@Autowired
	public void setEntityManager(EntityManager em) {
		entityManager = em;
	}

	@PrePersist
	public void beforeSave(final BaseEntity reference) {
		Date current = new Date();
		reference.setCreatedOn(current);
		reference.setUpdatedOn(current);
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if(authentication != null) {
			Object principal = authentication.getPrincipal();
			if(principal != null && principal instanceof SubjectDto) {
				SubjectDto subjectDto = (SubjectDto) principal;
				reference.setCreatedBy(entityManager.getReference(Users.class, subjectDto.getId()));
			}		
		}
	}

	@PreUpdate
	public void beforeUpdate(final BaseEntity reference) {
		reference.setUpdatedOn(new Date());
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if(authentication != null) {
			Object principal = authentication.getPrincipal();
			if(principal != null && principal instanceof SubjectDto) {
				SubjectDto subjectDto = (SubjectDto) principal;
				reference.setUpdatedBy(entityManager.getReference(Users.class, subjectDto.getId()));
			}
		}
	}

}
