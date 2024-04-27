package com.edu.guide.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonSerialize
public class ResponseBody {

    private Integer code;
    private Object object;

    public ResponseBody(Integer code, Object object) {
        this.code = code;
        this.object = object;
    }
}
