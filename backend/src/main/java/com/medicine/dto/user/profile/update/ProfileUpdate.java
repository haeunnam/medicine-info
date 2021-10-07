package com.medicine.dto.user.profile.update;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProfileUpdate {
    private String nickname;
    private Date birth;
    private String gender;
}
