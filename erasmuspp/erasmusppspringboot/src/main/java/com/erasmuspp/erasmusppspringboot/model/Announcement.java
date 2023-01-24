package com.erasmuspp.erasmusppspringboot.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;


public class Announcement 
{
    private final UUID id;
    private String poster;
    private final String title;
    private final String content;
    private final String postDate;
    private final String expireDate;
    private final String[] filters;

    public Announcement(
        @JsonProperty("id") UUID id,
        @JsonProperty("title") String title,
        @JsonProperty("content") String content,
        @JsonProperty("postDate") String postDate,
        @JsonProperty("expireDate") String expireDate,
        @JsonProperty("filters") String[] filters,
        @JsonProperty("poster") String poster
        ) {
            this.id = id;
            this.title = title;
            this.content = content;
            this.postDate = postDate;
            this.expireDate = expireDate;
            this.filters = filters;
            this.poster = poster;
        }

    public UUID getId()
    {
        return id;
    }

    public String getPoster() {
        return poster;
    }

    public String getTitle()
    {
        return title;
    }

    public String getContent()
    {
        return content;
    }
    
    public String getPostDate()
    {
        return postDate;
    }

    public String getExpireDate()
    {
        return expireDate;
    }

    public String[] getFilters() {
        return filters;
    }
}
