package com.edu.guide.security.service;

import com.edu.guide.security.dao.UserDao;
import com.edu.guide.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserService{

    private UserDao userDao;

    @Autowired
    public UserService (UserDao userDao) {
        this.userDao = userDao;
    }


    @Transactional
    public User createUser(User user) {
        return userDao.createUser(user);
    }

    public User findUsername(String username) {
        return userDao.findUsername(username);
    }


    @Transactional
    public void delete(Long id) {
        userDao.delete(id);
    }
}