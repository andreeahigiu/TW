package com.tw.db.repositories;

import com.tw.db.entities.PeriodEntity;
import com.tw.db.entities.StudiesCategory;
import com.tw.db.management.EntitiesManagement;

import javax.persistence.EntityManager;

public class StudiesRepository {

    public static StudiesCategory create(StudiesCategory studiesCategory){
        EntityManager em = EntitiesManagement.getInstance().getEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();

        em.persist(studiesCategory);

        em.getTransaction().commit();
        em.close();

        return studiesCategory;
    }
}
