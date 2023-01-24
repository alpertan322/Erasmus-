package com.erasmuspp.erasmusppspringboot.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.erasmuspp.erasmusppspringboot.dao.AnnouncementDao;
import com.erasmuspp.erasmusppspringboot.model.Announcement;

@Service
public class AnnouncementService
{
    private final AnnouncementDao announcementDao;

    public AnnouncementService(@Qualifier("announcement") AnnouncementDao announcementDao)
    {
        this.announcementDao = announcementDao;
    }

    public int addAnnouncement(Announcement announcement, String token)
    {
        return announcementDao.insertAnnouncement(announcement, token);
    }

    public List<Announcement> getAllAnnouncements()
    {
        return announcementDao.selectAllAnnouncements();
    }

    public List<Announcement> getFilteredAnnouncements(String token) {
        return announcementDao.selectFilteredAnnoucements(token);
    }

    public Optional<Announcement> getAnnouncementById(UUID id)
    {
        return announcementDao.selectAnnouncementById(id);
    }

    public int deleteAnnouncementById(UUID id)
    {
        return announcementDao.deleteAnnouncementById(id);
    }

    public int updateAnnouncementById(UUID id, Announcement announcement)
    {
        return announcementDao.updateAnnouncementById(id, announcement);
    }
}
