package com.tw.db.repositories;

import com.tw.db.entities.AgeCategory;
import com.tw.db.entities.CompensationCategory;
import com.tw.db.management.EntitiesManagement;

import javax.persistence.EntityManager;

public class CompensationRepository {

    public static CompensationCategory create(CompensationCategory compensationCategory){
        EntityManager em = EntitiesManagement.getInstance().getEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();

        em.persist(compensationCategory);

        em.getTransaction().commit();
        em.close();

        return compensationCategory;
    }
}
