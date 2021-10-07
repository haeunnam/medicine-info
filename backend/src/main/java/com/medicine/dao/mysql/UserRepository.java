package com.medicine.dao.mysql;

import com.medicine.entity.mysql.UserDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserDB, Integer> {
    UserDB findByEmail(String email);
    UserDB findByNickname(String nickname);
}