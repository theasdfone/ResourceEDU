package com.edu.guide.dao;

import com.edu.guide.model.FileUpload;
import com.edu.guide.model.User;

import java.util.List;

public interface FileUploadDao {
    String localUpload(FileUpload file);

    List<FileUpload> getFiles(User user);

    FileUpload findFileById(Long fileId);
}
