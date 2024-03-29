package com.notes.notes.entity;
import java.sql.Time;
import java.util.Date;
import jakarta.persistence.*;

import lombok.*;//getter and setter

@Data

@SequenceGenerator(name = "notes_sequence", sequenceName = "notes_sequence", allocationSize = 1)
@Table(name = "notes")
@Entity
public class Notes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="id_user",nullable = false)
    private Users users;
    @ManyToOne
    @JoinColumn(name="id_category",nullable = false)
    private Category category;
    private String title;
    private String description;
    private Date date;
    private Date reminder_date;
    private Time hora;
     
    
}
