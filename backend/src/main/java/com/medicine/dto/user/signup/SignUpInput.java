package com.medicine.dto.user.signup;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;
import java.util.Date;

@NoArgsConstructor
@Getter
public class SignUpInput {

    @Email
    @NotNull
    @Size(max = 45)
    private String email;

    @NotBlank
    @Size(min=8, max = 45)
    private String password;

    @NotBlank
    @Size(max = 45)
    private String nickname;

    @NotNull
    @Past
    private Date birth;

    @Pattern(regexp = "^[MF]$")
    @Size(max = 1)
    private String gender;
}
