package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.UUID;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.erasmuspp.erasmusppspringboot.model.File;

@Repository("file")
public class FileDataAccess implements FileDao {

    private final JdbcTemplate jdbcTemplate;

    public FileDataAccess(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertFile(UUID id, String applicationId, File file) {
        final String sql = "INSERT INTO \"file\"\nVALUES(?, ?, ?, ?, ?);";
        return jdbcTemplate.update(sql, new Object[] { id, applicationId, file.getContent(), file.getFileName(), file.getUploadTime() });
    }

    @Override
    public List<File> selectFilesByApplicationId(String applicationId) {
        final String sql = "SELECT * FROM \"file\" WHERE applicationId = ?";
        List<File> files = jdbcTemplate.query(sql, (resultSet, i) -> {
            UUID fileId = UUID.fromString(resultSet.getString("id"));
            String content = resultSet.getString("content");
            String applicationid = resultSet.getString("applicationId");
            String fileName = resultSet.getString("filename");
            String uploadTime = resultSet.getString("uploadtime");
            String fileType = resultSet.getString("filetype");
            return new File(
                fileId,
                applicationid,
                content,
                fileName,
                fileType,
                uploadTime
            );
        }, applicationId);
        return files;
    }

}
