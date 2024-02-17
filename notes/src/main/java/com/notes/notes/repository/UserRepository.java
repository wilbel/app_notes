package com.notes.notes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.notes.notes.entity.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

    // Query method

    Optional<Users> findByUsername(String username);

    @Query("SELECT u FROM Users u WHERE u.username = :username")
    Optional<Users> findUserByUsername(@Param("username") String username);

}
