package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.model.CourseRegistration;

@Repository("courseRegistration")
public class CourseRegistrationDataAccess implements CourseRegistrationDao {

    @Override
    public int insertCourseRegistration(String id, CourseRegistration courseRegistration) {
        
        return 0;
    }

    @Override
    public Optional<CourseRegistration> selectCourseRegistrationByApplicationId(long applicationId) {
        
        return Optional.empty();
    }

    @Override
    public List<CourseRegistration> selectCourseRegistrationsByDepartment(String department) {
        
        return null;
    }

    @Override
    public int deleteCourseRegistrationByApplicationId(long applicationId) {
        
        return 0;
    }
    
}
