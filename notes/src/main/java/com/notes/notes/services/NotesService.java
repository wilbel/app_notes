package com.notes.notes.services;

import java.util.List;

import com.notes.notes.entity.Notes;

public interface NotesService {
    List<Notes> getAllNotes();
    void deleteNote(Long id);
    Notes updateNote(Long userId, Notes updateNotes);
    Notes getNotesById(Long id);
    Notes createNote(Notes newNote);
    String remember_date(String fecha_recordatorio);

    
}
