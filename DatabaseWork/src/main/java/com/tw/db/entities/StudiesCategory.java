package com.tw.db.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class StudiesCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID studiesID;

    private int without;
    private int primary;
    private int middleSchool;
    private int highSchool;
    private int postSecondary;
    private int vocational;
    private int university;

    public UUID getStudiesID() {
        return studiesID;
    }

    public void setStudiesID(UUID studiesID) {
        this.studiesID = studiesID;
    }

    public int getWithout() {
        return without;
    }

    public void setWithout(int without) {
        this.without = without;
    }

    public int getPrimary() {
        return primary;
    }

    public void setPrimary(int primary) {
        this.primary = primary;
    }

    public int getMiddleSchool() {
        return middleSchool;
    }

    public void setMiddleSchool(int middleSchool) {
        this.middleSchool = middleSchool;
    }

    public int getHighSchool() {
        return highSchool;
    }

    public void setHighSchool(int highSchool) {
        this.highSchool = highSchool;
    }

    public int getPostSecondary() {
        return postSecondary;
    }

    public void setPostSecondary(int postSecondary) {
        this.postSecondary = postSecondary;
    }

    public int getVocational() {
        return vocational;
    }

    public void setVocational(int vocational) {
        this.vocational = vocational;
    }

    public int getUniversity() {
        return university;
    }

    public void setUniversity(int university) {
        this.university = university;
    }
}
