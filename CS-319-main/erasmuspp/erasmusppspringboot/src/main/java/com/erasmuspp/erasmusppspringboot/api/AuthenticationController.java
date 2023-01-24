package com.erasmuspp.erasmusppspringboot.api;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.erasmuspp.erasmusppspringboot.dao.UserDataAccess;
import com.erasmuspp.erasmusppspringboot.dto.AuthenticationRequest;
import com.erasmuspp.erasmusppspringboot.dto.TokenStatus;
import com.erasmuspp.erasmusppspringboot.filter.JwtUtils;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    
    private final UserDataAccess userDataAccess;
    private final JwtUtils jwtUtils;

    @PostMapping("/login")
    public TokenStatus authenticate(
        @RequestBody AuthenticationRequest request
    ) {
        final UserDetails user = userDataAccess.loadUserByUsername(request.getEmail());
        if (user != null) {
            System.out.println(user.getPassword());
            if (user.getPassword().equals(request.getPassword())) {
                String token = jwtUtils.generateToken(user);
                userDataAccess.updateTokenByEmail(request.getEmail(), token);
                return new TokenStatus(true, token);
            }
            else {
                return new TokenStatus(false, jwtUtils.generateToken(user));
            }
        }
        return new TokenStatus(false, "");
    }
}
