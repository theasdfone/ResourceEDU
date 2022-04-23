package com.edu.guide.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.springframework.util.AutoPopulatingList;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY, mappedBy = "user")
    private List<FileUpload> fileUploadList = new AutoPopulatingList<FileUpload>(FileUpload.class);

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
