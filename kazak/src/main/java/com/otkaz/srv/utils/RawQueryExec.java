package com.otkaz.srv.utils;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;

@Component
public class RawQueryExec {
	
	@PersistenceContext
	private EntityManager entityManager;

	@Autowired
	private PlatformTransactionManager platformTransactionManager;
	
	private TransactionTemplate transactionTemplate;
	
	public void execute(String queryStr, Object... args) {
		if(transactionTemplate == null) {
	        this.transactionTemplate = new TransactionTemplate(platformTransactionManager);
		}
        this.transactionTemplate.execute(new TransactionCallbackWithoutResult() {
			
			@Override
			protected void doInTransactionWithoutResult(TransactionStatus status) {
				try {
		            Query query = entityManager.createNativeQuery(queryStr);
		            for(int i = 0; i < args.length; i++) {
		            	Object arg = args[i];
		            	query.setParameter(i + 1, arg);
		            }
		            query.executeUpdate();
				} catch(Exception e) {
					e.printStackTrace();
					platformTransactionManager.rollback(status);
				}
			}
		});
	}
	public String getCountryName(String id)
	{
		String name = "";
		try {
			String qry = "Select NAME from TB_OCP_REGIONS_MASTER where ID = "+id;
			System.out.print(qry);
			Query query = entityManager.createQuery(qry);
			name = query.getSingleResult().toString();
			System.out.print(name);
            }
		catch(Exception e) 
			{
				e.printStackTrace();
			}
			return name;
		
	}
}
