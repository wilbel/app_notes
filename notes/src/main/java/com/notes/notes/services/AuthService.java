package com.notes.notes.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;
import org.springframework.security.core.AuthenticationException;

import com.notes.notes.dto.AuthResponse;
import com.notes.notes.dto.LoginRequest;
import com.notes.notes.dto.RegisterRequest;
import com.notes.notes.entity.Rol;
import com.notes.notes.entity.Users;
import com.notes.notes.repository.UserRepository;
import com.notes.notes.validations.validations;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

        private final UserRepository userRepository;
        private final JwtService jwtService;
        private final PasswordEncoder passwordEncoder;
        private final AuthenticationManager authenticationManager;
         @Autowired
        private validations registerRequestValidator;//Validaciones

        public AuthResponse login(LoginRequest request) {

                List<String> errorMessagesUser = new ArrayList<>();
                errorMessagesUser.add("Usuario no encontrado");
                List<String> errorMessagesLogin = new ArrayList<>();
                errorMessagesLogin.add("Usuario o contraseña incorrectos");
                List<String> errorMessagesAuth = new ArrayList<>();
                errorMessagesAuth.add("Error de autenticación");
                List<String> errorMessagesEx = new ArrayList<>();
                errorMessagesEx.add("Error interno del servidor");
                      try {
                        authenticationManager
                                        .authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(),
                                                        request.getPassword()));
                        UserDetails user = userRepository.findByUsername(request.getUsername())
                                        .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
                        String token = jwtService.getToken(user);
                        return AuthResponse.builder()
                                        .token(token)
                                        .username(request.getUsername())
                                        .success(true)
                                        .build();

                } catch (UsernameNotFoundException usernameNotFoundException) {
                        return AuthResponse.builder()
                                        .success(false)
                                        .errorMessages(errorMessagesUser)
                                        .build();

                } catch (BadCredentialsException badCredentialsException) {
                        return AuthResponse.builder()
                                        .success(false)
                                        .errorMessages(errorMessagesLogin)
                                        .build();

                } catch (AuthenticationException e) {
                        return AuthResponse.builder()
                                        .success(false)
                                        .errorMessages(errorMessagesAuth)
                                        .build();
                } catch (Exception e) {
                        return AuthResponse.builder()
                                        .success(false)
                                        .errorMessages(errorMessagesEx)
                                        .build();
                }
               
        }

       

        public AuthResponse register(RegisterRequest request) {

                Errors errors = new BeanPropertyBindingResult(request, "registerRequest");
                registerRequestValidator.validate(request, errors);
                List<String> errorMessages = new ArrayList<>();
                if (errors.hasErrors()) {
                        errors.getAllErrors().forEach(error -> errorMessages.add(error.getDefaultMessage()));
                        return AuthResponse.builder()
                                        .success(false)
                                        .errorMessages(errorMessages)
                                        .build();
                }

                Users user = Users.builder()
                                .username(request.getUsername())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .firstName(request.getFirstName())
                                .lastName(request.getLastName())
                                .email(request.getEmail())
                                .rol(Rol.USER)
                                .build();
                userRepository.save(user);

                return AuthResponse.builder()
                                .success(true)
                                .token(jwtService.getToken(user))
                                .build();
        }

}
