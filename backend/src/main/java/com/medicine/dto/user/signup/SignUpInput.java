package com.medicine.dto.user.signup;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@NoArgsConstructor
@Getter
public class SignUpInput {

    @Email
    @NotNull
    @Size(max = 45)
    private String email;

    @NotNull
    @Size(min=8, max = 45)
    private String password;

    @Size(max = 45)
    private String nickname;

    private Date birth;

    @Size(max = 1)
    private String gender;
}
