package com.notes.notes.services.implement;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.notes.notes.entity.Category;
import com.notes.notes.repository.CategoryRepository;
import com.notes.notes.services.CategoryService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }

    @Override
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }

    @Override
    public Category updateCategory(Long categoryId, Category updatedCategory) {
        Optional<Category> categoryOptional = categoryRepository.findById(categoryId);
        if (categoryOptional.isPresent()) {
            Category existingCategory = categoryOptional.get();
            existingCategory.setName_category(updatedCategory.getName_category());
            return categoryRepository.save(existingCategory);
        } else {
            log.info("Error al actualizar datos: la categoría no se encuentra");
        }
        return null;
    }
   

    @Override
    public Category createCategory(Category newcCategory) {
        return categoryRepository.save(newcCategory);
    }

    @Override
    public Category getCategroyById(Long id) {
        return categoryRepository.findById(id).get();
    }

}
