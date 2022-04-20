package com.edu.guide.dao.impl;

import com.edu.guide.dao.FileUploadDao;
import com.edu.guide.model.FileUpload;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class FileUploadDaoImpl implements FileUploadDao {
    @PersistenceContext
    private EntityManager em;

    @Override
    public String localUpload(FileUpload file) {
        em.persist(file);

        return "succesful";
    }
}
