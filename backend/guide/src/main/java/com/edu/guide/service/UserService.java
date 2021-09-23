package com.edu.guide.service;

import com.edu.guide.model.User;

public interface UserService {

    public User createUser(User user);
    public boolean loginUser(User user);

    void delete(Long id);
}

