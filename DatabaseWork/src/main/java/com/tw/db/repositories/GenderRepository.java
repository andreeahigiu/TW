package com.tw.db.repositories;

import com.tw.db.entities.EnvironmentCategory;
import com.tw.db.entities.GenderCategory;
import com.tw.db.management.EntitiesManagement;

import javax.persistence.EntityManager;

public class GenderRepository {

    public static GenderCategory create(GenderCategory genderCategory){
        EntityManager em = EntitiesManagement.getInstance().getEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();

        em.persist(genderCategory);

        em.getTransaction().commit();
        em.close();

        return genderCategory;
    }
}
