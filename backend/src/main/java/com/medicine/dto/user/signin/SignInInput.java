package com.medicine.dto.user.signin;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@NoArgsConstructor
@Getter
public class SignInInput {

    @Email
    @NotNull
    @Size(max = 45)
    private String email;

    @NotNull
    @Size(min=8, max = 45)
    private String password;
}
