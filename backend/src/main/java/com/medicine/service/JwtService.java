package com.medicine.service;

import com.medicine.entity.mysql.UserDB;

public interface JwtService {
    <T> String createAccessToken(int userId);
    String getAccessToken();
    int getUserId();
    UserDB getUserDB();
}
