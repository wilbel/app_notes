package com.notes.notes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.notes.notes.entity.Users;
@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    
}
