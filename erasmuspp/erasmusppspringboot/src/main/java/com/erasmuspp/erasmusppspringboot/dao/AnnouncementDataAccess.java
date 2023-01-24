package com.erasmuspp.erasmusppspringboot.dao;

import java.util.UUID;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.model.Announcement;
import com.erasmuspp.erasmusppspringboot.model.User;

import lombok.RequiredArgsConstructor;

@Repository("announcement")
@RequiredArgsConstructor
public class AnnouncementDataAccess implements AnnouncementDao
{
   private final JdbcTemplate jdbcTemplate;
   private final UserDataAccess userDataAccess;
   
   @Override
   public int insertAnnouncement(UUID id, Announcement announcement, String token)
   {
        User posterUser = userDataAccess.selectUserByToken(token).orElse(null);
        String poster = posterUser.getFirstName() + " " + posterUser.getLastName();
        final String sql = "INSERT INTO \"announcement\"\nVALUES(?, ?, ?, ?, ?, ?, ?);";
        return jdbcTemplate.update(sql, new Object[] {
            id, 
            announcement.getTitle(), 
            announcement.getContent(), 
            announcement.getPostDate(), 
            announcement.getExpireDate(),
            announcement.getFilters(),
            poster
        });
   }

   @Override
   public List<Announcement> selectAllAnnouncements()
   {
        final String sql = "SELECT * FROM \"announcement\"";
        List<Announcement> announcements = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID announcementId = UUID.fromString(resultSet.getString("id"));
            String title = resultSet.getString("title");
            String content = resultSet.getString("content");
            String postDate = resultSet.getString("postDate");
            String expireDate = resultSet.getString("expireDate");
            String[] filters = (String[]) resultSet.getArray("filters").getArray();
            String poster = resultSet.getString("poster");
            return new Announcement(
                announcementId,
                title,
                content,
                postDate,
                expireDate,
                filters,
                poster
            );
        });
        return announcements; 
   }

   @Override
   public List<Announcement> selectFilteredAnnoucements(String token)
   {
        final String sql = "SELECT * FROM \"announcement\"";
        List<Announcement> announcements = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID announcementId = UUID.fromString(resultSet.getString("id"));
            String title = resultSet.getString("title");
            String content = resultSet.getString("content");
            String postDate = resultSet.getString("postDate");
            String expireDate = resultSet.getString("expireDate");
            String[] filters = (String[]) resultSet.getArray("filters").getArray();
            String poster = resultSet.getString("poster");
            return new Announcement(
                announcementId,
                title,
                content,
                postDate,
                expireDate,
                filters,
                poster
            );
        });

        List<Announcement> result = filter(announcements, token);

        return result; 
   }

    @Override
    public Optional<Announcement> selectAnnouncementById(UUID id) {
            final String sql = "SELECT * FROM \"announcement\" WHERE id = ?";
            Announcement announcement = jdbcTemplate.queryForObject(sql, (resultSet, i) -> {
                UUID announcementId = UUID.fromString(resultSet.getString("id"));
                String title = resultSet.getString("title");
                String content = resultSet.getString("content");
                String postDate = resultSet.getString("postDate");
                String expireDate = resultSet.getString("expireDate");
                String[] filters = (String[]) resultSet.getArray("filters").getArray();
                String poster = resultSet.getString("poster");
                return new Announcement(
                    announcementId,
                    title,
                    content,
                    postDate,
                    expireDate,
                    filters,
                    poster
                );
            }, new Object[] {id});
            return Optional.ofNullable(announcement); 
    }

    @Override
    public int deleteAnnouncementById(UUID id) {
        final String sql = "DELETE FROM \"announcement\" WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }

    @Override
    public int updateAnnouncementById(UUID id, Announcement announcement) {
        return 0;
    }

    private List<Announcement> filter(List<Announcement> announcements, String token) {
        User user = userDataAccess.selectUserByToken(token).orElse(null);
        List<Announcement> result = new ArrayList<Announcement>();

        // Filter by department
        for (Announcement announcement : announcements) {
            if (user.getDepartment().equals(announcement.getFilters()[0])) {
                if (!result.contains(announcement)) {
                    result.add(announcement);
                }
            }
        }

        // Filter by country
        // for (Announcement announcement : announcements) {
        //     if (!user.getCountry().equals(announcement.getFilters()[1])) {
        //         announcements.remove(announcement);
        //     }
        // }

        // Filter by semester
        // for (Announcement announcement : announcements) {
        //     if (!user.getSemester().equals(announcement.getFilters()[2])) {
        //         announcements.remove(announcement);
        //     }
        // }

        // Filter by university
        // for (Announcement announcement : announcements) {
        //     if (!user.getUniversity().equals(announcement.getFilters()[3])) {
        //         announcements.remove(announcement);
        //     }
        // }

        // Filter by bilkent ID
        for (Announcement announcement : announcements) {
            if (user.getBilkentId().equals(announcement.getFilters()[4])) {
                if (!result.contains(announcement)) {
                    result.add(announcement);
                }
            }
        }

        return result;
    }

}
