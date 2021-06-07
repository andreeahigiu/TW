package com.tw.db.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class AgeCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID agesID;

    private int under25;
    private int between25and29;
    private int between30and39;
    private int between40and49;
    private int between50and55;
    private int after55;

    public UUID getAgesID() {
        return agesID;
    }

    public void setAgesID(UUID agesID) {
        this.agesID = agesID;
    }

    public int getUnder25() {
        return under25;
    }

    public void setUnder25(int under25) {
        this.under25 = under25;
    }

    public int getBetween25and29() {
        return between25and29;
    }

    public void setBetween25and29(int between25and29) {
        this.between25and29 = between25and29;
    }

    public int getBetween30and39() {
        return between30and39;
    }

    public void setBetween30and39(int between30and39) {
        this.between30and39 = between30and39;
    }

    public int getBetween40and49() {
        return between40and49;
    }

    public void setBetween40and49(int between40and49) {
        this.between40and49 = between40and49;
    }

    public int getBetween50and55() {
        return between50and55;
    }

    public void setBetween50and55(int between50and55) {
        this.between50and55 = between50and55;
    }

    public int getAfter55() {
        return after55;
    }

    public void setAfter55(int after55) {
        this.after55 = after55;
    }
}
