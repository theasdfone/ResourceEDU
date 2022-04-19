package com.edu.guide.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@RestController
@RequestMapping(value = "/file")
public class FileController {

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        //TODO: Need to implement necessary aws s3 storage api
        File path = new File("C:\\ResourceEDU-File-Storage\\" + multipartFile.getOriginalFilename());
        path.createNewFile();

        FileOutputStream output = new FileOutputStream(path);

        output.write(multipartFile.getBytes());
        output.close();

        return ResponseEntity.ok("Upload Successful");
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
