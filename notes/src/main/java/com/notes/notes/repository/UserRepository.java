package com.notes.notes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.notes.notes.entity.Users;
@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    
//Query method

Optional<Users> findByUsername(String username);


}
