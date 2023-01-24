package com.erasmuspp.erasmusppspringboot.api;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.erasmuspp.erasmusppspringboot.dto.ApplicationRequest;
import com.erasmuspp.erasmusppspringboot.model.Application;
import com.erasmuspp.erasmusppspringboot.service.ApplicationService;



@RequestMapping(value = "api/v1/application")
@CrossOrigin(origins = "*")
@RestController
public class ApplicationController 
{
    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService)
    {
        this.applicationService = applicationService;
    }

    @PostMapping(path="token={token}")
    public int addApplication(@PathVariable("token") String token, @Valid @RequestBody ApplicationRequest application)
    {
        return applicationService.addApplication(application, token);
    }

    @GetMapping
    public List<Application> getAllApplication()
    {
        return applicationService.getAllApplications();
    }

    @GetMapping(path="token={token}")
    public List<Application> getApplicationsByToken(@PathVariable("token") String token)
    {
        return applicationService.getApplicationsByToken(token);
    }

    @GetMapping(path="{id}")
    public Application getApplicationById(@PathVariable("id") UUID id)
    {
        return applicationService.getApplicationById(id).orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public int deleteApplicationById(@PathVariable("id") UUID id)
    {
        return applicationService.deleteApplicationById(id);
    }

    @PutMapping(path = "{id}")
    public int updateApplicationById(@PathVariable("id") UUID id, @Valid @RequestBody Application application)
    {
        return applicationService.updateApplicationById(id, application);
    }
}
    