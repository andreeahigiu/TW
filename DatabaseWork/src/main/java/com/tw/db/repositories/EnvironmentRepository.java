package com.tw.db.repositories;

import com.tw.db.entities.CountyEntity;
import com.tw.db.entities.EnvironmentCategory;
import com.tw.db.management.EntitiesManagement;

import javax.persistence.EntityManager;

public class EnvironmentRepository {

    public static EnvironmentCategory create(EnvironmentCategory environmentCategory){
        EntityManager em = EntitiesManagement.getInstance().getEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();

        em.persist(environmentCategory);

        em.getTransaction().commit();
        em.close();

        return environmentCategory;
    }
}
