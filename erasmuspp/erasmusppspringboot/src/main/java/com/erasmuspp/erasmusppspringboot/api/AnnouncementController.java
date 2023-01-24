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

import com.erasmuspp.erasmusppspringboot.model.Announcement;
import com.erasmuspp.erasmusppspringboot.service.AnnouncementService;


@RequestMapping("/api/v1/announcement")
@CrossOrigin(origins = "*")
@RestController
public class AnnouncementController
{
    private final AnnouncementService announcementService;

    public AnnouncementController(AnnouncementService announcementService)
    {
        this.announcementService = announcementService;
    }

    @PostMapping(path = "token={token}")
    public int addAnnouncement(@PathVariable("token") String token, @Valid @RequestBody Announcement announcement)
    {
        return announcementService.addAnnouncement(announcement, token);
    }

    @GetMapping(path = "token={token}")
    public List<Announcement> getAllAnnouncements(@PathVariable("token") String token)
    {
        return announcementService.getFilteredAnnouncements(token);
    }

    @GetMapping(path = "{id}")
    public Announcement getAnnouncementById(@PathVariable("id") UUID id)
    {
        return announcementService.getAnnouncementById(id).orElse(null);
    } 

    @DeleteMapping(path = "{id}")
    public int deleteAnnouncementById(@PathVariable("id") UUID id)
    {
        return announcementService.deleteAnnouncementById(id);
    }

    @PutMapping(path = "{id}")
    public int updateAnnouncementById(@PathVariable("id") UUID id, @Valid @RequestBody Announcement announcement)
    {
        return announcementService.updateAnnouncementById(id, announcement);
    }
}
