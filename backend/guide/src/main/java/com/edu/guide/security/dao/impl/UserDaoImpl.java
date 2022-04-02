package com.edu.guide.security.dao.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

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
        public void delete(Long id) {
            User u = em.find(User.class, id);
            em.remove(u);
        }

        @Override
        public User findUsername(String username) {
            User user = em.createQuery("SELECT u FROM User u WHERE u.username = :username", User.class)
                    .setParameter("username", username).getResultList().stream().findFirst().orElse(null);
            if(user != null) {
                return user;
            }

            return null;
        }
}
