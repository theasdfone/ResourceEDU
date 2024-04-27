package com.edu.guide.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonSerialize
public class Jwt {
    private Long id;
    private String token;
    private String username;

    public Jwt(Long id, String accessToken, String username) {
        this.id = id;
        this.token = accessToken;
        this.username = username;
    }
}
