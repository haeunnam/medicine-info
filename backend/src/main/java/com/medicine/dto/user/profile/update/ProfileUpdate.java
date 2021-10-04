package com.medicine.dto.user.profile.update;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class ProfileUpdate {
    private String password;
    private String nickname;
    private Date birth;
    private String gender;
}
