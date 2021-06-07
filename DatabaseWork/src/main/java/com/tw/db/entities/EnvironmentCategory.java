package com.tw.db.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class EnvironmentCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID environmentID;

    private int totalUrban;
    private int womenUrban;
    private int menUrban;
    private int totalRural;
    private int womenRural;
    private int menRural;

    public UUID getEnvironmentID() {
        return environmentID;
    }

    public void setEnvironmentID(UUID environmentID) {
        this.environmentID = environmentID;
    }

    public int getTotalUrban() {
        return totalUrban;
    }

    public void setTotalUrban(int totalUrban) {
        this.totalUrban = totalUrban;
    }

    public int getWomenUrban() {
        return womenUrban;
    }

    public void setWomenUrban(int womenUrban) {
        this.womenUrban = womenUrban;
    }

    public int getMenUrban() {
        return menUrban;
    }

    public void setMenUrban(int menUrban) {
        this.menUrban = menUrban;
    }

    public int getTotalRural() {
        return totalRural;
    }

    public void setTotalRural(int totalRural) {
        this.totalRural = totalRural;
    }

    public int getWomenRural() {
        return womenRural;
    }

    public void setWomenRural(int womenRural) {
        this.womenRural = womenRural;
    }

    public int getMenRural() {
        return menRural;
    }

    public void setMenRural(int menRural) {
        this.menRural = menRural;
    }
}
