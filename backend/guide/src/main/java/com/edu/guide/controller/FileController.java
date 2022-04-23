package com.edu.guide.controller;

import com.edu.guide.model.FileUpload;
import com.edu.guide.model.ResponseBody;
import com.edu.guide.model.User;
import com.edu.guide.security.service.UserService;
import com.edu.guide.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping(value = "/file")
public class FileController {
    @Autowired
    private UserService userService;

    @Autowired
    private FileService fileService;

    @PostMapping("/upload/{userId}")
    public ResponseEntity<?> uploadFile(@RequestPart("file") MultipartFile multipartFile, @RequestPart("jsonData") FileUpload fileUpload, @PathVariable("userId") Long userId) throws IOException{
        User user = userService.findByID(userId);

        if(user == null || user.getId() == null) {
            return ResponseEntity.ok().body("User not found");
        }

        fileUpload.setUser(user);

        //TODO: Need to implement necessary aws s3 storage api
        String storedFile = fileService.localUpload(multipartFile, fileUpload);

        return ResponseEntity.ok().body(new ResponseBody(HttpServletResponse.SC_OK, storedFile));
    }

    @GetMapping("/get")
    public ResponseEntity<?> getFile() {
        //TODO: Get api
        return ResponseEntity.ok("GET FILE RETURNED HERE");
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateFile() {
        //TODO: update api
        return ResponseEntity.ok("File Updated Successfully");
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteFile() {
        //TODO: Delete api
        return ResponseEntity.ok("File Deleted Successfully");
    }
}
