package com.notes.notes.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.notes.notes.entity.Notes;
import com.notes.notes.services.NotesService;

@RestController
@RequestMapping("/notes")
public class NotesController {

    private NotesService notesService;

    @Autowired
    public NotesController(NotesService notesService) {
        this.notesService = notesService;
    }

    @GetMapping("/list_notes")
    public List<Notes> getAllNotes() {
        return notesService.getAllNotes();
    }

    @PostMapping("/save")
    public ResponseEntity<Object> createNotes(@RequestBody Notes newNotes) {
        Notes createdNotes = notesService.createNote(newNotes);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdNotes);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteNotes(@PathVariable Long id) {
        try {
            notesService.deleteNote(id);
        } catch (Exception e) {
            System.err.println("Error al eliminar la nota. Mensaje: " + e.getMessage());

        }
    }

    @PutMapping("/update/{id}")
    public Notes updateUser(@PathVariable Long id, @RequestBody Notes updatedNote) {
        return notesService.updateNote(id, updatedNote);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notes> getNotesById(@PathVariable Long id) {
        Notes getNotesId = notesService.getNotesById(id);
        return ResponseEntity.ok(getNotesId);
    }

}
