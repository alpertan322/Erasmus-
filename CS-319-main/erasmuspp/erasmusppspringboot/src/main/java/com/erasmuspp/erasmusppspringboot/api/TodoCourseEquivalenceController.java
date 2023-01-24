package com.erasmuspp.erasmusppspringboot.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.erasmuspp.erasmusppspringboot.model.TodoCourseEquivalence;
import com.erasmuspp.erasmusppspringboot.service.TodoCourseEquivalenceService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/todo/equivalence")
@RequiredArgsConstructor
public class TodoCourseEquivalenceController {

    TodoCourseEquivalenceService todoCourseEquivalenceService;
    
    @PostMapping
    public int addCourseEquivalence(@RequestBody TodoCourseEquivalence todoCourseEquivalence) {
        return todoCourseEquivalenceService.addCourseEquivalence(todoCourseEquivalence);
    }
}
