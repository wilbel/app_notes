package com.notes.notes.entity;


import jakarta.persistence.*;

import lombok.*;//getter and setter

@Data
@SequenceGenerator(name = "users_sequence", sequenceName = "users_sequence", allocationSize = 1)
@Table(name = "users")

@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String image;
    private String description;
    @Column(unique = true)
    private String email;
    private String username;
    private String password;    
}
