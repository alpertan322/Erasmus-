package com.erasmuspp.erasmusppspringboot.dao;

import java.util.List;
import java.util.UUID;

import com.erasmuspp.erasmusppspringboot.model.File;

public interface FileDao {
    int insertFile(UUID id, String applicationId, File file);

    default int insertFile(String applicationId, File file) {
        UUID id = UUID.randomUUID();
        return insertFile(id, applicationId, file);
    }

    List<File> selectFilesByApplicationId(String applicationId);

}
