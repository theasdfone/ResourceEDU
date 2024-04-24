package com.edu.guide.service;

import com.edu.guide.dao.FileUploadDao;
import com.edu.guide.model.FileUpload;
import com.edu.guide.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;

@Service
public class FileService {

    @Autowired
    private FileUploadDao fileUploadDao;

    @Transactional
    public FileUpload s3Upload(FileUpload fileUpload) throws IOException {
        return fileUploadDao.uploadFileMetaData(fileUpload);
    }

    @Transactional
    public String deleteFile(FileUpload fileUpload) throws IOException{
        return fileUploadDao.deleteFile(fileUpload);
    }

    public List<FileUpload> getFiles(User user) {
        List<FileUpload> fileUploadList = fileUploadDao.getFiles(user);

        for(FileUpload file : fileUploadList) {
            file.setUserId(user.getId());
        }

        return fileUploadList;
    }

    public List<FileUpload> getSearchList(String search, User user) {
        List<FileUpload> fileUploadList = fileUploadDao.getSearchList(search, user);

        return fileUploadList;
    }

    public FileUpload getFileById(String fileId) {
        return fileUploadDao.getFileById(fileId);
    }
}
