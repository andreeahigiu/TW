package com.tw.db.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class CompensationCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID compensationID;

    private int withCompensation;
    private int withoutCompensation;

    public UUID getCompensationID() {
        return compensationID;
    }

    public void setCompensationID(UUID compensationID) {
        this.compensationID = compensationID;
    }

    public int getWithCompensation() {
        return withCompensation;
    }

    public void setWithCompensation(int withCompensation) {
        this.withCompensation = withCompensation;
    }

    public int getWithoutCompensation() {
        return withoutCompensation;
    }

    public void setWithoutCompensation(int withoutCompensation) {
        this.withoutCompensation = withoutCompensation;
    }
}
