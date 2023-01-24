package com.erasmuspp.erasmusppspringboot.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TokenStatus {
    private final boolean status; 
    private final String token;

    public TokenStatus(
        @JsonProperty("status") boolean status,
        @JsonProperty("token") String token) {
        this.status = status;
        this.token = token;
    }

    public boolean getStatus() {
        return status;
    }

    public String getToken() {
        return token;
    }
}
