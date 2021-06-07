package com.tw.db.populateDB;

import com.opencsv.CSVReader;
import com.tw.db.entities.*;
import com.tw.db.repositories.*;

import java.io.FileReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class CSVFileReader {

    private final String folderPath;
    private final Integer year;
    private final Integer month;


    public CSVFileReader(Integer year, Integer month) {
        this.year = year;
        this.month = month;
        folderPath = setFolderPath();
        try {
            read();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private String setFolderPath(){
        return "data/" +
                month +
                "-" +
                year +
                "/";
    }

    private AgeCategory retrievedAge(String[] line){
        AgeCategory ageCategory = new AgeCategory();
        //ageCategory.setAgesID(UUID.randomUUID());
        ageCategory.setUnder25(Integer.parseInt(line[2]));
        ageCategory.setBetween25and29(Integer.parseInt(line[3]));
        ageCategory.setBetween30and39(Integer.parseInt(line[4]));
        ageCategory.setBetween40and49(Integer.parseInt(line[5]));
        ageCategory.setBetween50and55(Integer.parseInt(line[6]));
        ageCategory.setAfter55(Integer.parseInt(line[7]));
        return ageCategory;
    }

    private CompensationCategory retrievedCompensation(String[] line){
        CompensationCategory compensationCategory = new CompensationCategory();
        //compensationCategory.setCompensationID(UUID.randomUUID());
        compensationCategory.setWithCompensation(Integer.parseInt(line[4]));
        compensationCategory.setWithoutCompensation(Integer.parseInt(line[5]));
        return compensationCategory;
    }

    private EnvironmentCategory retrievedEnvironment(String[] line){
        EnvironmentCategory environmentCategory = new EnvironmentCategory();
        //environmentCategory.setEnvironmentID(UUID.randomUUID());
        environmentCategory.setTotalUrban(Integer.parseInt(line[4]));
        environmentCategory.setWomenUrban(Integer.parseInt(line[5]));
        environmentCategory.setMenUrban(Integer.parseInt(line[6]));
        environmentCategory.setTotalRural(Integer.parseInt(line[7]));
        environmentCategory.setWomenRural(Integer.parseInt(line[8]));
        environmentCategory.setMenRural(Integer.parseInt(line[9]));
        return  environmentCategory;
    }

    private GenderCategory retrievedGender(String[] line){
        GenderCategory genderCategory = new GenderCategory();
        //genderCategory.setGenderID(UUID.randomUUID());
        genderCategory.setWomen(Integer.parseInt(line[2]));
        genderCategory.setMen(Integer.parseInt(line[3]));
        return genderCategory;
    }

    private StudiesCategory retrievedStudies(String[] line){
        StudiesCategory studiesCategory = new StudiesCategory();
        //studiesCategory.setStudiesID(UUID.randomUUID());
        studiesCategory.setWithout(Integer.parseInt(line[2]));
        studiesCategory.setPrimary(Integer.parseInt(line[3]));
        studiesCategory.setMiddleSchool(Integer.parseInt(line[4]));
        studiesCategory.setHighSchool(Integer.parseInt(line[5]));
        studiesCategory.setPostSecondary(Integer.parseInt(line[6]));
        studiesCategory.setVocational(Integer.parseInt(line[7]));
        studiesCategory.setUniversity(Integer.parseInt(line[8]));
        return studiesCategory;
    }

    private void saveCategories(AgeCategory ageCategory, CompensationCategory compensationCategory,
                                EnvironmentCategory environmentCategory, GenderCategory genderCategory,
                                StudiesCategory studiesCategory, CountyEntity countyEntity){
        AgeRepository.create(ageCategory);
        CompensationRepository.create(compensationCategory);
        EnvironmentRepository.create(environmentCategory);
        GenderRepository.create(genderCategory);
        StudiesRepository.create(studiesCategory);
        CountyRepository.create(countyEntity);
    }

    private void read() throws IOException {
        String fileToOpen = folderPath + "varste.csv";
        CSVReader ageReader = new CSVReader(new FileReader(fileToOpen));
        String[] nextAgeLine;
        ageReader.readNext();

        fileToOpen = folderPath + "rata.csv";
        CSVReader genderReader = new CSVReader(new FileReader(fileToOpen));
        String[] nextGenderLine;
        genderReader.readNext();

        fileToOpen = folderPath + "medii.csv";
        CSVReader environmentReader = new CSVReader(new FileReader(fileToOpen));
        String[] nextEnvironmentLine;
        environmentReader.readNext();

        fileToOpen = folderPath + "nivel-educatie.csv";
        CSVReader studiesReader = new CSVReader(new FileReader(fileToOpen));
        String[] nextStudiesLine;
        studiesReader.readNext();

        PeriodEntity periodEntity = new PeriodEntity();
        //periodEntity.setPeriodID(UUID.randomUUID());
        periodEntity.setYear(year);
        periodEntity.setMonth(month);

        List<CountyEntity> countyList = new ArrayList<>();


        while (((nextAgeLine = ageReader.readNext()) != null) &&
                ((nextGenderLine = genderReader.readNext()) != null) &&
                ((nextEnvironmentLine = environmentReader.readNext()) != null) &&
                ((nextStudiesLine = studiesReader.readNext()) != null)){
            //countyEntity.setCountyID(UUID.randomUUID());
            CountyEntity countyEntity = new CountyEntity();
            countyEntity.setCountyName(nextAgeLine[0]);
            AgeCategory ageCategory = retrievedAge(nextAgeLine);
            CompensationCategory compensationCategory = retrievedCompensation(nextGenderLine);
            EnvironmentCategory environmentCategory = retrievedEnvironment(nextEnvironmentLine);
            GenderCategory genderCategory = retrievedGender(nextGenderLine);
            StudiesCategory studiesCategory = retrievedStudies(nextStudiesLine);

            countyEntity.setAgeCategory(ageCategory);
            countyEntity.setCompensationCategory(compensationCategory);
            countyEntity.setEnvironmentCategory(environmentCategory);
            countyEntity.setGenderCategory(genderCategory);
            countyEntity.setStudiesCategory(studiesCategory);

            //saveCategories(ageCategory,compensationCategory,environmentCategory,genderCategory,studiesCategory, countyEntity);

            AgeRepository.create(ageCategory);
            CompensationRepository.create(compensationCategory);
            EnvironmentRepository.create(environmentCategory);
            GenderRepository.create(genderCategory);
            StudiesRepository.create(studiesCategory);
            CountyRepository.create(countyEntity);

            countyList.add(countyEntity);
        }
        periodEntity.setCounties(countyList);
        PeriodRepository.create(periodEntity);
    }

}
