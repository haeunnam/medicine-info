package com.medicine.dto.user.profile;

import java.util.Date;

import com.medicine.dto.mymedicine.get.MyMedicineOutput;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@Builder
public class ProfileOutput {
    private String email;
    private String nickname;
    private Date birth;
    private String gender;
}
