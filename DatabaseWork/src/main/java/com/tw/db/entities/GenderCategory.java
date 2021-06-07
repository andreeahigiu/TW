package com.tw.db.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class GenderCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID genderID;

    private int men;
    private int women;

    public UUID getGenderID() {
        return genderID;
    }

    public void setGenderID(UUID genderID) {
        this.genderID = genderID;
    }

    public int getMen() {
        return men;
    }

    public void setMen(int men) {
        this.men = men;
    }

    public int getWomen() {
        return women;
    }

    public void setWomen(int women) {
        this.women = women;
    }
}
