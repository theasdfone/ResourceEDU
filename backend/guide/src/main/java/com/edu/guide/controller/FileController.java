package com.edu.guide.controller;

import com.edu.guide.model.FileUpload;
import com.edu.guide.model.ResponseBody;
import com.edu.guide.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping(value = "/file")
public class FileController {
    @Autowired
    private FileService fileService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile multipartFile, FileUpload file) throws IOException{
        //TODO: Need to implement necessary aws s3 storage api
        String storedFile = fileService.localUpload(multipartFile, file);

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
