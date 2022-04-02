package com.edu.guide.security.dao;

import com.edu.guide.model.User;

public interface UserDao {
    public User createUser(User user);

    public User findUsername(String username);

    void delete(Long id);
}