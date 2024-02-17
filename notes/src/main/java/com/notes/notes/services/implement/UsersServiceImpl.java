package com.notes.notes.services.implement;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.notes.notes.entity.Users;
import com.notes.notes.repository.UserRepository;
import com.notes.notes.services.UserService;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@Service
public class UsersServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Autowired
    public UsersServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public Users updateUser(Long userId, Users updatedUser) {
        Optional<Users> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            Users existingUser = userOptional.get();
            existingUser.setFirstName(updatedUser.getFirstName());
            existingUser.setLastName(updatedUser.getLastName());
            existingUser.setImage(updatedUser.getImage());
            existingUser.setDescription(updatedUser.getDescription());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setPassword(updatedUser.getPassword());
            return userRepository.save(existingUser);
        } else {
            log.info("El usuario no existe");
        }
        return null;
    }

    @Override
    public Users createUser(Users newUser) {
        
        return userRepository.save(newUser);
    }

    @Override
    public Users login(String email, String password) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'login'");
    }

    @Override
    public Users getUsersById(Long id) {

        return userRepository.findById(id).get();

    }

    @Override
    public Users getUsersByUsername(String username) {
        return userRepository.findUserByUsername(username).get();
    }

}
