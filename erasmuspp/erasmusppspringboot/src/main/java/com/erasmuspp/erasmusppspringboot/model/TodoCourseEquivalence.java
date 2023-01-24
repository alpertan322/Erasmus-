package com.erasmuspp.erasmusppspringboot.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TodoCourseEquivalence {

    // Database columns
    private String id;

    private String department;

    private String candidateName;

    private String submitTime;

    private String courseType;

    private String courseSyllabus;

    private String additionalInfo;

    private String instructorName;

    private String instructorEmail;

    // Constructor
    public TodoCourseEquivalence(
        @JsonProperty("id") String id,
        @JsonProperty("department") String department,
        @JsonProperty("candidateName") String candidateName,
        @JsonProperty("submitTime") String submitTime,
        @JsonProperty("courseType") String courseType,
        @JsonProperty("courseSyllabus") String courseSyllabus,
        @JsonProperty("additionalInfo") String additionalInfo,
        @JsonProperty("insructorName") String instructorName,
        @JsonProperty("insructorEmail") String insructorEmail
    ) {
        

    }

    // Methods
    public String getId() {
        return id;
    }

    public String getDepartment() {
        return department;
    }

    public String getCandidateName() {
        return candidateName;
    }

    public String getSubmitTime() {
        return submitTime;
    }

    public String getCourseType() {
        return courseType;
    }

    public String getCourseSyllabus() {
        return courseSyllabus;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public String getInstructorName() {
        return instructorName;
    }

    public String getInstructorEmail() {
        return instructorEmail;
    }
}
