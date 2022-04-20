package com.edu.guide.security.dao;

import com.edu.guide.model.User;

public interface UserDao {
    User createUser(User user);

    User findUsername(String username);

    void delete(Long id);
}