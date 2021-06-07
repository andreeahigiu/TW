package com.tw.db.repositories;

import com.tw.db.entities.AgeCategory;
import com.tw.db.management.EntitiesManagement;

import javax.persistence.EntityManager;

public class AgeRepository {

    public static AgeCategory create(AgeCategory ageCategory){
        EntityManager em = EntitiesManagement.getInstance().getEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();

        em.persist(ageCategory);

        em.getTransaction().commit();
        em.close();

        return ageCategory;
    }
}
