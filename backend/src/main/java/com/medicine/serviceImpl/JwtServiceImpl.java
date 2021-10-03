package com.medicine.serviceImpl;

import com.medicine.configuration.ConstantConfig;
import com.medicine.dao.mysql.UserRepository;
import com.medicine.entity.mysql.UserDB;
import com.medicine.service.JwtService;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;

import static com.medicine.configuration.ConstantConfig.*;

@Service("JwtService")
@RequiredArgsConstructor
@Slf4j
public class JwtServiceImpl implements JwtService {

    private final UserRepository userRepository;

    public String createAccessToken(int userId) {
        Date now = new Date();
        return Jwts.builder()
                .claim("userId", userId)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + ConstantConfig.VALID_TIME))
                .signWith(SignatureAlgorithm.HS256, ACCESS_TOKEN_SECRET_KEY)
                .compact();
    }

    @Override
    public String getAccessToken() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        return request.getHeader("X-ACCESS-TOKEN");
    }

    @Override
    public int getUserId() {
        String accessToken = getAccessToken();
        try {
            Jws<Claims> claims = Jwts.parser()
                    .setSigningKey(ACCESS_TOKEN_SECRET_KEY)
                    .parseClaimsJws(accessToken);
            if (accessToken == null) return -1;

            int userId = claims.getBody().get("userId", Integer.class);
            if (userId <= 0) return -3;

            return userId;
        } catch (Exception exception) {
            return -1;
        }
    }

    @Override
    public UserDB getUserDB() {
        String accessToken = getAccessToken();
        try {
            Jws<Claims> claims = Jwts.parser()
                    .setSigningKey(ACCESS_TOKEN_SECRET_KEY)
                    .parseClaimsJws(accessToken);
            if (accessToken == null) return null;

            int userId = claims.getBody().get("userId", Integer.class);
            if (userId <= 0) return null;

            UserDB userDB = userRepository.findById(userId).orElse(null);
            if (userDB == null) return null;

            return userDB;
        } catch (Exception exception) {
            return null;
        }
    }
}
