package com.tw.db.repositories;

import com.tw.db.entities.GenderCategory;
import com.tw.db.entities.PeriodEntity;
import com.tw.db.management.EntitiesManagement;

import javax.persistence.EntityManager;

public class PeriodRepository {

    public static PeriodEntity create(PeriodEntity periodEntity){
        EntityManager em = EntitiesManagement.getInstance().getEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();

        em.persist(periodEntity);

        em.getTransaction().commit();
        em.close();

        return periodEntity;
    }
}
