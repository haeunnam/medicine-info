package com.medicine.controller;

import com.medicine.dto.user.jwt.JwtOutput;
import com.medicine.dto.user.signin.SignInInput;
import com.medicine.dto.user.signin.SignInOutput;
import com.medicine.dto.user.signup.SignUpOutput;
import com.medicine.dto.user.signup.SignUpInput;
import com.medicine.response.Response;
import com.medicine.service.JwtService;
import com.medicine.service.UserService;
import com.medicine.response.ResponseStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    private final UserService userService;
    private final JwtService jwtService;

    /**
     * 회원가입 API
     * [POST] /users/signup
     * @return Response<SignUpOutput>
     */
    // Body
    @PostMapping("/signup")
    public Response<SignUpOutput> signUp(@RequestBody @Valid SignUpInput signUpInput) {
        log.info("[POST] /users/signup");
        return userService.signUp(signUpInput);
    }

    /**
     * 로그인 API
     * [POST] /users/signin
     * @return Response<SignInOutput>
     */
    // Body
    @PostMapping("/signin")
    public Response<SignInOutput> signIn(@RequestBody @Valid SignInInput signInInput) {
        log.info("[POST] /users/signin");
        return userService.signIn(signInInput);
    }

    @PostMapping("/jwt")
    public Response<JwtOutput> jwt() {
        log.info("[POST] /users/jwt");
        int userId = jwtService.getUserId();
        if (userId == -1) return new Response<>(ResponseStatus.UNAUTHORIZED_TOKEN);
        if (userId == -2) return new Response<>(ResponseStatus.BAD_ACCESS_TOKEN_VALUE);
        if (userId == -3) return new Response<>(ResponseStatus.FORBIDDEN_USER_ID);
        JwtOutput jwtOutput = new JwtOutput(userId);
        return new Response<>(jwtOutput, ResponseStatus.SUCCESS_SIGN_IN);
    }
}
