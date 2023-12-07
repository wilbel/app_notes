package com.notes.notes.services;

import java.util.List;

import com.notes.notes.entity.Category;


public interface CategoryService {
    List<Category> getAllCategory();

    void deleteCategory(Long id);

    Category updateCategory(Long categoryId, Category updatedUser);

    Category createCategory(Category newUser);
    Category getCategroyById(Long id);
}
