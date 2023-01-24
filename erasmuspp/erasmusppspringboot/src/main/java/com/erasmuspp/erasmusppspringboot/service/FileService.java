package com.erasmuspp.erasmusppspringboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.erasmuspp.erasmusppspringboot.dao.FileDao;
import com.erasmuspp.erasmusppspringboot.model.File;

@Service
public class FileService {
    private final FileDao fileDao;

    public FileService(@Qualifier("file") FileDao fileDao) {
        this.fileDao = fileDao;
    }

    public int addFile(String applicationId, File file) {
        return fileDao.insertFile(applicationId, file);
    }

    public List<File> getFilesByApplicationId(String application) {
        return fileDao.selectFilesByApplicationId(application);
    }

}
