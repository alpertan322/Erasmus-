package com.erasmuspp.erasmusppspringboot.api;

import java.io.FileNotFoundException;
import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.*;

import com.erasmuspp.erasmusppspringboot.model.User;
import com.erasmuspp.erasmusppspringboot.service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService)
    {
        this.userService = userService;
    }

    @PostMapping
    public int addUser(@Valid @RequestBody User user) throws FileNotFoundException
    {
        return userService.addUser(user);
    }

    @GetMapping()
    public List<User> getAllUsers()
    {
        return userService.getAllUsers();
    }

    @GetMapping(path = "candidates")
    public List<User> getAllCandidates()
    {
        return userService.getAllCandidates();
    }

    @GetMapping(path = "department")
    public List<String> getAllDepartmets() {
        return userService.getAllDepartments();
    }

    @GetMapping(path = "university")
    public String[] getAllUniversities() {
        // return userService.getAllUniversities();

        return new String[]{"Bilkent University", "ODTU"};
    }

    @GetMapping(path = "country")
    public List<String> getAllCountries() {
        return userService.getAllCountries();
    }

    @GetMapping(path = "id={id}")
    public User getUserById(@PathVariable("id") UUID id)
    {
        return userService.getUserById(id).orElse(null);
    } 

    @GetMapping(path = "email={email}")
    public User getUserByEmail(@PathVariable("email") String email)
    {
        return userService.getUserByEmail(email).orElse(null);
    }

    @GetMapping(path = "token={token}")
    public User getUserByToken(@PathVariable("token") String token)
    {
        return userService.getUserByToken(token).orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public int deletePersonById(@PathVariable("id") UUID id)
    {
        return userService.deleteUserById(id);
    }

    @PutMapping(path = "{id}")
    public int updateUserById(@PathVariable("id") UUID id, @Valid @RequestBody User user)
    {
        return userService.updateUserById(id, user);
    }

    @PutMapping(path = "changePassword/token={token}")
    public int updatePasswordByToken(@PathVariable("token") String token, @Valid @RequestBody String newPassword) {
        return userService.updatePasswordByToken(token, newPassword);
    }

    @PutMapping(path = "changeAboutMe/token={token}")
    public int updateAboutMeByToken(@PathVariable("token") String token, @Valid @RequestBody String newAboutMe) {
        return userService.updateAboutMeByToken(token, newAboutMe);
    }

    @PutMapping(path = "changePersonalEmail/token={token}")
    public int updatePersonalEmailByToken(@PathVariable("token") String token, @Valid @RequestBody String newPersonalEmail) {
        return userService.updatePersonalEmailByToken(token, newPersonalEmail);
    }

    @PutMapping(path = "changeMobilePhone/token={token}")
    public int updateMobilePhoneByToken(@PathVariable("token") String token, @Valid @RequestBody String newMobilePhone) {
        return userService.updateMobilePhoneByToken(token, newMobilePhone);
    }

    @PutMapping(path = "changeProfilePhoto/token={token}")
    public int updateProfilePhotoByToken(@PathVariable("token") String token, @Valid @RequestBody String newProfilePhoto) {
        return userService.updateProfilePhotoByToken(token, newProfilePhoto);
    }
}
