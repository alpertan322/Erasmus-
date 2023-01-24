package com.erasmuspp.erasmusppspringboot.service;

import java.io.FileNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.erasmuspp.erasmusppspringboot.dao.UserDao;
import com.erasmuspp.erasmusppspringboot.model.User;

@Service
public class UserService {
    private final UserDao userDao;

    public UserService(@Qualifier("user") UserDao userDao)
    {
        this.userDao = userDao;
    }

    public int addUser(User user) throws FileNotFoundException
    {
        return userDao.insertUser(user);
    }

    public List<User> getAllUsers()
    {
        return userDao.selectAllUsers();
    }

    public List<User> getAllCandidates() {
        return userDao.selectAllCandidates();
    }

    public List<String> getAllDepartments() {
        return userDao.selectAllDepartments();
    }

    public List<String> getAllCountries() {
        return userDao.selectAllCountries();
    }

    public List<String> getAllUniversities() {
        return userDao.selectAllUniversities();
    }

    public Optional<User> getUserById(UUID id)
    {
        return userDao.selectUserById(id);
    }

    public Optional<User> getUserByEmail(String email)
    {
        return userDao.selectUserByEmail(email);
    }

    public Optional<User> getUserByToken(String token) {
        return userDao.selectUserByToken(token);
    }

    public int deleteUserById(UUID id)
    {
        return userDao.deleteUserById(id);
    }

    public int updateUserById(UUID id, User user)
    {
        return userDao.updateUserById(id, user);
    }

    public int updateTokenByEmail(String email, String token) {
        return userDao.updateTokenByEmail(email, token);
    }

    public int updatePasswordByToken(String token, String password) {
        return userDao.updatePasswordByToken(token, password);
    }

    public int updateAboutMeByToken(String token, String aboutMe) {
        return userDao.updateAboutMeByToken(token, aboutMe);
    }

    public int updatePersonalEmailByToken(String token, String personalEmail) {
        return userDao.updatePersonalEmailByToken(token, personalEmail);
    }

    public int updateMobilePhoneByToken(String token, String mobilePhone) {
        return userDao.updateMobilePhoneByToken(token, mobilePhone);
    }

    public int updateProfilePhotoByToken(String token, String profilePhoto) {
        return userDao.updateProfilePhotoByToken(token, profilePhoto);
    }
}
