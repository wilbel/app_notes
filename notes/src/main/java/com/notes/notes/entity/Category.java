package com.notes.notes.entity;

import lombok.*;
import jakarta.persistence.*;
@Data
@Entity
@SequenceGenerator(name = "category_sequence", sequenceName = "category_sequence", allocationSize = 1)
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name_category;
    
}
