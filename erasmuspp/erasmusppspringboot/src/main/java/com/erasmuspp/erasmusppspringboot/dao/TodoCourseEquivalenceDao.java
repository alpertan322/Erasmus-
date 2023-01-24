package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.erasmuspp.erasmusppspringboot.model.TodoCourseEquivalence;

public interface TodoCourseEquivalenceDao {
    int insertCourseEquivalence(String id, TodoCourseEquivalence courseEquivalence);

    default int insertCourseEquivalence(TodoCourseEquivalence courseEquivalence) {
        String id = UUID.randomUUID().toString();

        return insertCourseEquivalence(id, courseEquivalence);
    }

    List<TodoCourseEquivalence> selectAllCourseEquivalences();

    List<TodoCourseEquivalence> selectCourseEquivalencesByDepartment(String department);

    Optional<TodoCourseEquivalence> selectCourseEquivalenceById(String id);

    int deleteCourseEquivalenceById(String id);
}
