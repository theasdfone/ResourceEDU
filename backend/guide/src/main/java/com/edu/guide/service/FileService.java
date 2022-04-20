package com.edu.guide.service;

import com.edu.guide.dao.FileUploadDao;
import com.edu.guide.model.FileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Service
public class FileService {

    @Autowired
    private FileUploadDao fileUploadDao;

    public String localUpload(MultipartFile multipartFile, FileUpload file) throws IOException {
        File path = new File("C:\\ResourceEDU-File-Storage\\" + multipartFile.getOriginalFilename());
        path.createNewFile();

        FileOutputStream output = new FileOutputStream(path);

        output.write(multipartFile.getBytes());
        output.close();

        return fileUploadDao.localUpload(file);
    }
}
