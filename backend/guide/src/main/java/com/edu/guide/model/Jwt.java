package com.edu.guide.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonSerialize
public class Jwt {
    private String token;
    private String username;

    public Jwt(String accessToken, String username) {
        this.token = accessToken;
        this.username = username;
    }
}
