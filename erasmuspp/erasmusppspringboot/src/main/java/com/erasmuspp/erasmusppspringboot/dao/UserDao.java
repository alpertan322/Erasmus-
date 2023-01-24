package com.erasmuspp.erasmusppspringboot.dao;

import java.io.FileNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.erasmuspp.erasmusppspringboot.model.User;

public interface UserDao {
    int insertUser(UUID id, User user) throws FileNotFoundException;

    default int insertUser(User user) throws FileNotFoundException {
        UUID id = UUID.randomUUID();
        return insertUser(id, user);
    }

    List<User> selectAllUsers();

    List<String> selectAllDepartments();

    List<String> selectAllUniversities();

    List<String> selectAllCountries();

    List<User> selectAllCandidates();

    Optional<User> selectUserById(UUID id);

    Optional<User> selectUserByEmail(String email);

    Optional<User> selectUserByToken(String token);

    int deleteUserById(UUID id);

    int updateUserById(UUID id, User newUser);

    int setUserRoleById(UUID id, String newRole);

    int updateTokenByEmail(String email, String token);

    int updatePasswordByToken(String token, String password);

    int updateAboutMeByToken(String token, String aboutMe);

    int updatePersonalEmailByToken(String token, String personalEmail);

    int updateMobilePhoneByToken(String token, String mobilePhone);

    int updateProfilePhotoByToken(String token, String profilePhoto);
}
