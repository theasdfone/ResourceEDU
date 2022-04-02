package com.edu.guide.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonSerialize
public class JwtResponse {

    private String token;
    private String username;

    public JwtResponse(String accessToken, String username) {
        this.token = accessToken;
        this.username = username;
    }
}
