package com.notes.notes.services.implement;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.notes.notes.entity.Notes;
import com.notes.notes.repository.NotesRepository;
import com.notes.notes.services.NotesService;

import lombok.extern.slf4j.Slf4j;
import java.time.LocalDate;

@Slf4j
@Service
public class NotesServiceImpl implements NotesService {

    private final NotesRepository notesRepository;

    @Autowired
    public NotesServiceImpl(NotesRepository notesRepository) {
        this.notesRepository = notesRepository;
    }

    @Override
    public List<Notes> getAllNotes() {
        return notesRepository.findAll();
    }

    @Override
    public void deleteNote(Long id) {
        notesRepository.deleteById(id);
    }

    @Override
    public Notes updateNote(Long userId, Notes updateNotes) {

        Optional<Notes> noteOptional = notesRepository.findById(userId);
        if (noteOptional.isPresent()) {
            Notes update_notes = noteOptional.get();
            update_notes.setUsers(updateNotes.getUsers());
            update_notes.setCategory(updateNotes.getCategory());
            update_notes.setTitle(updateNotes.getTitle());
            update_notes.setDescription(updateNotes.getDescription());
            update_notes.setDate(updateNotes.getDate());
            update_notes.setReminder_date(updateNotes.getReminder_date());
            update_notes.setHora(updateNotes.getHora());
            return notesRepository.save(update_notes);
        } else {
            log.info("Not no existe");
        }
        return null;
    }

    @Override
    public Notes getNotesById(Long id) {
        return notesRepository.findById(id).get();
    }

    @Override
    public Notes createNote(Notes newNote) {
        return notesRepository.save(newNote);
    }

    @Override
    public String remember_date(String fecha_recordatorio) {
        LocalDate fechaActual = LocalDate.now();
        return fechaActual + "";
    }

}
