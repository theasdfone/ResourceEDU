package com.edu.guide.controller;

import com.edu.guide.model.FileUpload;
import com.edu.guide.model.ResponseBody;
import com.edu.guide.model.User;
import com.edu.guide.security.service.UserService;
import com.edu.guide.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.file.FileSystem;
import java.util.List;

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

    @GetMapping("/getList/{userId}")
    public ResponseEntity<?> getFileList(@PathVariable("userId") Long userId) {
        User user = userService.findByID(userId);

        if(user == null || user.getId() == null) {
            return ResponseEntity.ok().body("User not found");
        }

        List<FileUpload> fileUploadList = fileService.getFiles(user);

        return ResponseEntity.ok(fileUploadList);
    }

    @GetMapping("/download/{fileId}")
    public ResponseEntity<?> downloadFile(@PathVariable("fileId") String fileId) throws IOException {

        FileUpload file = fileService.getFileById(fileId);

        if(file == null || file.getId() == null) {
            return ResponseEntity.ok().body("File not found");
        }

        //TODO: AWS Response
        Resource resource = new FileSystemResource(file.getFilePath());

        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");

        return ResponseEntity.ok().headers(headers)
                .contentLength(resource.contentLength())
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(new InputStreamResource(resource.getInputStream()));
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
