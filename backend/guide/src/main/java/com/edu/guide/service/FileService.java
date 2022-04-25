package com.edu.guide.service;

import com.edu.guide.dao.FileUploadDao;
import com.edu.guide.model.FileUpload;
import com.edu.guide.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class FileService {

    @Autowired
    private FileUploadDao fileUploadDao;

    @Transactional
    public FileUpload localUpload(MultipartFile multipartFile, FileUpload fileUpload) throws IOException {
        File path = new File("C:\\ResourceEDU-File-Storage\\" + multipartFile.getOriginalFilename());
        path.createNewFile();

        FileOutputStream output = new FileOutputStream(path);

        output.write(multipartFile.getBytes());
        output.close();

        fileUpload.setFilePath(path.getPath());

        return fileUploadDao.localUpload(fileUpload);
    }

    @Transactional
    public String deleteFile(FileUpload fileUpload) throws IOException{

        Path fileDelete = Paths.get(fileUpload.getFilePath());

        Files.delete(fileDelete);

        return fileUploadDao.deleteFile(fileUpload);
    }

    public List<FileUpload> getFiles(User user) {
        List<FileUpload> fileUploadList = fileUploadDao.getFiles(user);

        for(FileUpload file : fileUploadList) {
            file.setUserId(user.getId());
        }

        return fileUploadList;
    }

    public FileUpload getFileById(String fileId) {
        return fileUploadDao.getFileById(fileId);
    }
}
