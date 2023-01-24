package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.model.TodoCourseEquivalence;

@Repository("todoCourseEquivalence")
public class TodoCourseEquivalenceDataAccess implements TodoCourseEquivalenceDao {

    @Override
    public int insertCourseEquivalence(String id, TodoCourseEquivalence courseEquivalence) {
        
        return 0;
    }

    @Override
    public List<TodoCourseEquivalence> selectAllCourseEquivalences() {
        
        return null;
    }

    @Override
    public List<TodoCourseEquivalence> selectCourseEquivalencesByDepartment(String department) {
        
        return null;
    }

    @Override
    public Optional<TodoCourseEquivalence> selectCourseEquivalenceById(String id) {
        
        return Optional.empty();
    }

    @Override
    public int deleteCourseEquivalenceById(String id) {
        
        return 0;
    }
    
}
