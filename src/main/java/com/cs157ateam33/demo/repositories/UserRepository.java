package com.cs157ateam33.demo.repositories;

import com.cs157ateam33.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    /**
     * Retrieves a user by username
     * @param username THe username to look for
     * @return the user with specified username(if any)
     */
    Optional<User> findByUsername(String username);

}
