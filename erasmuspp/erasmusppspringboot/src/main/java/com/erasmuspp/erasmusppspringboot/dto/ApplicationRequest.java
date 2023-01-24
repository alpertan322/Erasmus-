package com.erasmuspp.erasmusppspringboot.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApplicationRequest 
{
    private final String semester;
    private final String choice1;
    private final String choice2;
    private final String choice3;
    private final String choice4;
    private final String choice5;
    
    public ApplicationRequest(
        @JsonProperty("semester") String semester,
        @JsonProperty("choice1") String choice1,
        @JsonProperty("choice2") String choice2,
        @JsonProperty("choice3") String choice3,
        @JsonProperty("choice4") String choice4, 
        @JsonProperty("choice5") String choice5)
    {
        this.semester = semester;
        this.choice1 = choice1;
        this.choice2 = choice2;
        this.choice3 = choice3;
        this.choice4 = choice4;
        this.choice5 = choice5;
    }

    public String getSemester()
    {
        return semester;
    }
    public String getChoice1()
    {
        return choice1;
    }

    public String getChoice2()
    {
        return choice2;
    }
    public String getChoice3()
    {
        return choice3;
    }
    public String getChoice4()
    {
        return choice4;
    }
    public String getChoice5()
    {
        return choice5;
    }
}
