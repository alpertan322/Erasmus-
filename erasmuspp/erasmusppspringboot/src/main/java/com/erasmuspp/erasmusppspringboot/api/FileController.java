package com.erasmuspp.erasmusppspringboot.api;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.*;

import com.erasmuspp.erasmusppspringboot.model.File;
import com.erasmuspp.erasmusppspringboot.service.FileService;

@RequestMapping("api/v1/file")
@CrossOrigin(origins = "*")
@RestController
public class FileController {
    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @PostMapping(path = "applicationId={applicationId}")
    public int addFile(@PathVariable("applicationId") String applicationId, @Valid @RequestBody File file) {
        return fileService.addFile(applicationId, file);
    }

    @GetMapping(path = "applicationId={applicationId}")
    public List<File> getFilesByApplicationId(@PathVariable("application") String application) {
        return fileService.getFilesByApplicationId(application);
    }

}
