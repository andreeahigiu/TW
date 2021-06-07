package com.tw.db.entities;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
public class PeriodEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID periodID;

    private Integer year;
    private Integer month;

    @OneToMany
    @JoinTable
    private List<CountyEntity> counties;

    public UUID getPeriodID() {
        return periodID;
    }

    public void setPeriodID(UUID periodID) {
        this.periodID = periodID;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public List<CountyEntity> getCounties() {
        return counties;
    }

    public void setCounties(List<CountyEntity> county) {
        this.counties = county;
    }
}
