package com.edu.guide.dao;

import com.edu.guide.model.User;

public interface UserDao {
    public User createUser(User user);

    public boolean loginUser(User user);

    void delete(Long id);
}