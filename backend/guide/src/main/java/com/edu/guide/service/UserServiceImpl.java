package com.edu.guide.service;

import com.edu.guide.dao.UserDao;
import com.edu.guide.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService{

        @Autowired
        private UserDao userDao;

        @Override
        @Transactional
        public User createUser(User user) {
            return userDao.createUser(user);
        }

        @Override
        @Transactional
        public void delete(Long id) {
            userDao.delete(id);
        }

        @Override
        public boolean loginUser(User user) {
            return userDao.loginUser(user);
        }
}
