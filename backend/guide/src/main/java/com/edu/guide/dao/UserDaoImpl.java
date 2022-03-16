package com.edu.guide.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import com.edu.guide.model.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao{
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
        public boolean loginUser(User user) {
            String jpql = "from User where username=?0 and password=?1";
            Query query = em.createQuery(jpql);
            query.setParameter(0, user.getUsername());
            query.setParameter(1, user.getPassword());

//		amount of pages displayed

//		query.setFirstResult(0);
//		query.setMaxResults(10);

            List<User> rs = query.getResultList();
            return rs.size() > 0;
        }
}
