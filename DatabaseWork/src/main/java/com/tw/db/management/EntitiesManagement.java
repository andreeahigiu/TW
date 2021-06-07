package com.tw.db.management;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class EntitiesManagement {

    private static EntitiesManagement instance;
    private static EntityManagerFactory emf;

    private EntitiesManagement() {}

    public static EntitiesManagement getInstance() {
        if(instance == null) {
            instance = new EntitiesManagement();
        }
        return instance;
    }

    public EntityManagerFactory getEntityManagerFactory() {
        if (emf == null)
            createEntityManagerFactory();
        return emf;
    }


    protected void createEntityManagerFactory() {
        this.emf = Persistence.createEntityManagerFactory("TWdbPU");
    }


    public void close(){
        if(emf != null){
            emf.close();
            emf = null;
        }
    }
}
