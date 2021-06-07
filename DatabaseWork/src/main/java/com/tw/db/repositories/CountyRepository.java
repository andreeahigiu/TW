package com.tw.db.repositories;

import com.tw.db.entities.CompensationCategory;
import com.tw.db.entities.CountyEntity;
import com.tw.db.management.EntitiesManagement;

import javax.persistence.EntityManager;

public class CountyRepository {

    public static CountyEntity create(CountyEntity countyEntity){
        EntityManager em = EntitiesManagement.getInstance().getEntityManagerFactory().createEntityManager();
        em.getTransaction().begin();

        em.persist(countyEntity);

        em.getTransaction().commit();
        em.close();

        return countyEntity;
    }
}
