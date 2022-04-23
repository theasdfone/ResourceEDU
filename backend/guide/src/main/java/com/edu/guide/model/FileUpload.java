package com.edu.guide.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "file")
public class FileUpload {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "file_path")
    private String filePath;

    @Column(name = "name")
    private String name;

    @Column(name = "date")
    private String date;

    @Column(name = "file_type")
    private String fileType;

    @Column(name = "file_size")
    private String fileSize;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.REFRESH}, fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Transient
    private Long userId;
}
