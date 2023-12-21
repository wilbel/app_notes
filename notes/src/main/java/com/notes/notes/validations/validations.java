package com.notes.notes.validations;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.notes.notes.dto.RegisterRequest;

@Component
public class validations implements Validator {

    private boolean isValidEmail(String email) {
        return email.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}$");
    }

    @Override
    public boolean supports(Class<?> clazz) {
        throw new UnsupportedOperationException("Unimplemented method 'supports'");
    }

    @Override
    public void validate(Object target, Errors errors) {

        RegisterRequest registerRequest = (RegisterRequest) target;
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "username", "field.required",
                "El nombre de usuario es obligatorio");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "field.required", "La contraseña es obligatoria");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "firstName", "field.required", "El nombre es obligatorio");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "lastName", "field.required", "El apellido es obligatorio");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "email", "field.required",
                "El correo electrónico es obligatorio");
       // ValidationUtils.rejectIfEmptyOrWhitespace(errors, "rol", "field.required", "Rol es requerido");

        if (!isValidEmail(registerRequest.getEmail())) {
            errors.rejectValue("email", "invalid.email", "El formato del correo electrónico no es válido");
        }

    }
}
