package com.tw.db.entities;


import javax.persistence.*;
import java.util.UUID;

@Entity
public class CountyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID countyID;

    private String countyName;
    private int total;

    @OneToOne(cascade = {CascadeType.MERGE})
    private AgeCategory ageCategory;
    @OneToOne(cascade = {CascadeType.MERGE})
    private CompensationCategory compensationCategory;
    @OneToOne(cascade = {CascadeType.MERGE})
    private EnvironmentCategory environmentCategory;
    @OneToOne(cascade = {CascadeType.MERGE})
    private GenderCategory genderCategory;
    @OneToOne(cascade = {CascadeType.MERGE})
    private StudiesCategory studiesCategory;

    public UUID getCountyID() {
        return countyID;
    }

    public void setCountyID(UUID countyID) {
        this.countyID = countyID;
    }

    public String getCountyName() {
        return countyName;
    }

    public void setCountyName(String countyName) {
        this.countyName = countyName;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public AgeCategory getAgeCategory() {
        return ageCategory;
    }

    public void setAgeCategory(AgeCategory ageCategory) {
        this.ageCategory = ageCategory;
    }

    public CompensationCategory getCompensationCategory() {
        return compensationCategory;
    }

    public void setCompensationCategory(CompensationCategory compensationCategory) {
        this.compensationCategory = compensationCategory;
    }

    public EnvironmentCategory getEnvironmentCategory() {
        return environmentCategory;
    }

    public void setEnvironmentCategory(EnvironmentCategory environmentCategory) {
        this.environmentCategory = environmentCategory;
    }

    public GenderCategory getGenderCategory() {
        return genderCategory;
    }

    public void setGenderCategory(GenderCategory genderCategory) {
        this.genderCategory = genderCategory;
    }

    public StudiesCategory getStudiesCategory() {
        return studiesCategory;
    }

    public void setStudiesCategory(StudiesCategory studiesCategory) {
        this.studiesCategory = studiesCategory;
    }
}
