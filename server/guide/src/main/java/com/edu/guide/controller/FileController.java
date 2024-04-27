package com.edu.guide.controller;

import com.edu.guide.model.FileUpload;
import com.edu.guide.model.User;
import com.edu.guide.security.service.UserService;
import com.edu.guide.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "/file")
public class FileController {
    @Autowired
    private UserService userService;

    @Autowired
    private FileService fileService;

    @PostMapping("/upload/{userId}")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<?> uploadFile(@RequestBody FileUpload fileUpload, @PathVariable("userId") Long userId) throws IOException{
        User user = userService.findByID(userId);

        if(user == null || user.getId() == null) {
            return ResponseEntity.ok().body("User not found");
        }

        fileUpload.setUser(user);
        FileUpload storedFile = fileService.s3Upload(fileUpload);

        return ResponseEntity.ok(storedFile);
    }

    @GetMapping("/getList/{userId}")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<?> getFileList(@PathVariable("userId") Long userId) {
        User user = userService.findByID(userId);

        if(user == null || user.getId() == null) {
            return ResponseEntity.ok().body("User not found");
        }

        List<FileUpload> fileUploadList = fileService.getFiles(user);

        return ResponseEntity.ok(fileUploadList);
    }

    @GetMapping("/getSearchList/{userId}")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<?> getSearchList(@PathVariable("userId") Long userId, @RequestParam(name = "search") String search) {
        User user = userService.findByID(userId);

        if(user == null || user.getId() == null) {
            return ResponseEntity.ok().body("User not found");
        }

        List<FileUpload> fileUploadList = fileService.getSearchList(search, user);

        return ResponseEntity.ok(fileUploadList);
    }

    @PostMapping("/update")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<?> updateFile() {
        //TODO: update api
        return ResponseEntity.ok("File Updated Successfully");
    }

    @PostMapping("/delete/{fileId}")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public ResponseEntity<?> deleteFile(@PathVariable("fileId") String fileId) throws IOException{
        FileUpload fileUpload = fileService.getFileById(fileId);

        if(fileUpload == null || fileUpload.getId() == null) {
            return ResponseEntity.ok().body("File not found");
        }

        String deleteFile = fileService.deleteFile(fileUpload);

        return ResponseEntity.ok(deleteFile);
    }
}
