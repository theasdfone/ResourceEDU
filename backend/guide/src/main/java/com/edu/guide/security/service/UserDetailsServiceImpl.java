package com.edu.guide.security.service;

import com.edu.guide.model.User;
import com.edu.guide.security.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserDao userDao;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.findUsername(username);

        if(user == null) {
            throw new UsernameNotFoundException("User Not Found with username: " + username);
        }

        return new UserDetailsImpl(user.getUsername(), user.getPassword());
    }
}
