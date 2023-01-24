package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.erasmuspp.erasmusppspringboot.model.CourseRegistration;

public interface CourseRegistrationDao {
    int insertCourseRegistration(String id, CourseRegistration courseRegistration);

    default int insertCourseRegistration(CourseRegistration courseRegistration) {
        String id = UUID.randomUUID().toString();

        return insertCourseRegistration(id, courseRegistration);
    }

    Optional<CourseRegistration> selectCourseRegistrationByApplicationId(long applicationId);

    List<CourseRegistration> selectCourseRegistrationsByDepartment(String department);

    int deleteCourseRegistrationByApplicationId(long applicationId);
}
