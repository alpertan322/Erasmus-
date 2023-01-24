package com.erasmuspp.erasmusppspringboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.erasmuspp.erasmusppspringboot.dao.TodoCourseEquivalenceDao;
import com.erasmuspp.erasmusppspringboot.model.TodoCourseEquivalence;

@Service
public class TodoCourseEquivalenceService {
    private final TodoCourseEquivalenceDao todoCourseEquivalenceDao;

    public TodoCourseEquivalenceService(@Qualifier("todoCourseEquivalence") TodoCourseEquivalenceDao todoCourseEquivalenceDao) {
        this.todoCourseEquivalenceDao = todoCourseEquivalenceDao;
    }

    public int addCourseEquivalence(TodoCourseEquivalence courseEquivalence) {
        return todoCourseEquivalenceDao.insertCourseEquivalence(courseEquivalence);
    } 

    public List<TodoCourseEquivalence> getAllCourseEquivalences() {
        return todoCourseEquivalenceDao.selectAllCourseEquivalences();
    }

    public List<TodoCourseEquivalence> getCourseEquivalencesByDepartment(String department) {
        return todoCourseEquivalenceDao.selectCourseEquivalencesByDepartment(department);
    }

    public Optional<TodoCourseEquivalence> getCourseEquivalenceById(String id) {
        return todoCourseEquivalenceDao.selectCourseEquivalenceById(id);
    }

    public int deleteCourseEquivalenceById(String id) {
        return todoCourseEquivalenceDao.deleteCourseEquivalenceById(id);
    }
}
