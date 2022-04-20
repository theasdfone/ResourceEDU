package com.edu.guide.dao;

import com.edu.guide.model.FileUpload;

public interface FileUploadDao {
    String localUpload(FileUpload file);
}
