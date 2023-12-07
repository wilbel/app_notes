package com.notes.notes.services;

import java.util.List;

import com.notes.notes.entity.Users;

public interface UserService {
   
    List<Users> getAllUsers();
   // Users getUserByEmail(String email);
    void deleteUser(Long id);
    Users updateUser(Long userId, Users updatedUser);
    Users createUser(Users newUser);

    Users login(String email, String password);
}
