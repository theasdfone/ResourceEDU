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
    private Double fileSize;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.REFRESH}, fetch = FetchType.LAZY, optional = true)
    @Column(name = "user_id")
    private Long userId;

    public FileUpload(String filepath, String name, String date, String fileType, Double fileSize) {
        this.filePath = filepath;
        this.name = name;
        this.date = date;
        this.fileType = fileType;
        this.fileSize = fileSize;
    }
}
