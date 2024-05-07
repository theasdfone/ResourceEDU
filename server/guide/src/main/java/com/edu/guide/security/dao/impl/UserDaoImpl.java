package com.edu.guide.security.dao.impl;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.PersistenceContext;

import com.edu.guide.model.User;
import com.edu.guide.security.dao.UserDao;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {
        @PersistenceContext
        private EntityManager em;

        @Override
        public User createUser(User user) {
            em.persist(user);
            return user;
        }

        @Override
        public User findById(Long userId) {
            User user = em.find(User.class, userId);

            if(user == null) {
                throw new EntityNotFoundException("Can't find user with ID" + userId);
            }

            return user;
        }

        @Override
        public User findUsername(String username) {
            User user = em.createQuery("SELECT u FROM User u WHERE u.username = :username", User.class)
                    .setParameter("username", username).getResultList().stream().findFirst().orElse(null);

            if(user == null) {
                return null;
            }

            return user;
        }

        @Override
        public String updateUser(User user) {
            em.merge(user);

            return "successful";
        }

        @Override
        public String deleteUser(User user) {
            em.remove(user);

            return "successful";
        }

}
