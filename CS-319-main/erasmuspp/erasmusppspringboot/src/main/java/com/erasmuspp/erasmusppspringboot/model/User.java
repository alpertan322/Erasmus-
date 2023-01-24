package com.erasmuspp.erasmusppspringboot.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User
{
    private UUID id;

    private String firstName;

    private String lastName;

    private String dob;

    private String nationality;

    private String email;

    private String bilkentID;

    private String department;

    private String gpa;

    private String personalEmail;

    private String mobilePhone;

    private String aboutMe;

    private String password;

    private String role;

    private String token;

    private String profilePhoto;

    public User(@JsonProperty("id") UUID id,
                @JsonProperty("firstName") String firstName,
                @JsonProperty("lastName") String lastName,
                @JsonProperty("dob") String dob,
                @JsonProperty("nationality") String nationality,
                @JsonProperty("email") String email,
                @JsonProperty("bilkentId") String bilkentID,
                @JsonProperty("department") String department,
                @JsonProperty("gpa") String gpa,
                @JsonProperty("personalEmail") String personalEmail,
                @JsonProperty("mobilePhone") String mobilePhone,
                @JsonProperty("aboutMe") String aboutMe,
                @JsonProperty("password") String password,
                @JsonProperty("role") String role,
                @JsonProperty("token") String token,
                @JsonProperty("profilePhoto") String profilePhoto)
                {
                    this.id = id;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.dob = dob;
                    this.nationality = nationality;
                    this.email = email;
                    this.bilkentID = bilkentID;
                    this.department = department;
                    this.gpa = gpa;
                    this.personalEmail = personalEmail;
                    this.mobilePhone = mobilePhone;
                    this.aboutMe = aboutMe;
                    this.password = password;
                    this.role = role;
                    this.token = token;
                    this.profilePhoto = profilePhoto;
                }
    public UUID getId()
    {
        return id;
    }

    public String getFirstName()
    {
        return firstName;
    }

    public String getLastName()
    {
        return lastName;
    }

    public String getDob()
    {
        return dob;
    }

    public String getNationality()
    {
        return nationality;
    }

    public String getEmail() {
        return email;
    }

    public String getBilkentId() {
        return bilkentID;
    }

    public String getDepartment()
    {
        return department;
    }
 
    public String getGpa() {
        return gpa;
    }

    public String getPersonalEmail() {
        return personalEmail;
    }
    public String getMobilePhone() {
        return mobilePhone;
    }

    public String getAboutMe() {
        return aboutMe;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String newPassword) {
        password = newPassword;
    }

    public String getRole() {
        return role;
    }

    public String getToken() {
        return token;
    }

    public void setPersonalEmail(String newPersonalEmail) {
        personalEmail = newPersonalEmail;
    }
    public void setMobilePhone(String newMobilePhone) {
        mobilePhone = newMobilePhone;
    }

    public void setAboutMe(String newAboutMe) {
        aboutMe = newAboutMe;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }
}