package com.erasmuspp.erasmusppspringboot.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

public class File {
    private final UUID id;

    private final String content;

    private final String fileName;

    private final String fileType;

    private final String uploadTime;

    private final String applicationId;

    public File(@JsonProperty("id") UUID id,
                @JsonProperty("application") String applicationId,
                @JsonProperty("content") String content,
                @JsonProperty("fileName") String fileName,
                @JsonProperty("fileType") String fileType,
                @JsonProperty("uploadTime") String uploadTime) {

        this.applicationId = applicationId;
        this.id = id;    
        this.content = content;
        this.fileName = fileName;
        this.fileType = fileType;
        this.uploadTime = uploadTime;        
    }

    public UUID getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public String getFileName() {
        return fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public String getUploadTime() {
        return uploadTime;
    }

    public String getApplicationId()
    {
        return applicationId;
    }
}
