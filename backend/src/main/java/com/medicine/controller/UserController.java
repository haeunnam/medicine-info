package com.medicine.controller;

import com.medicine.dto.user.jwt.JwtOutput;
import com.medicine.dto.user.profile.ProfileOutput;
import com.medicine.dto.user.profile.update.ProfileUpdate;
import com.medicine.dto.user.signin.SignInInput;
import com.medicine.dto.user.signin.SignInOutput;
import com.medicine.dto.user.signup.SignUpOutput;
import com.medicine.dto.user.signup.SignUpInput;
import com.medicine.response.Response;
import com.medicine.service.JwtService;
import com.medicine.service.UserService;
import com.medicine.response.ResponseStatus;
import io.swagger.annotations.ApiOperation;
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
    @ApiOperation(value = "회원가입", notes = "신규 유저의 정보를 등록한다.")
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
    @ApiOperation(value = "로그인", notes = "입력된 아이디, 비밀번호를 확인한다.")
    public Response<SignInOutput> signIn(@RequestBody @Valid SignInInput signInInput) {
        log.info("[POST] /users/signin");
        return userService.signIn(signInInput);
    }

    @PostMapping("/jwt")
    @ApiOperation(value = "유효 jwt 확인", notes = "유효한 jwt 인지 확인한다.")
    public Response<JwtOutput> jwt() {
        log.info("[POST] /users/jwt");
        int userId = jwtService.getUserId();
        if (userId == -1) return new Response<>(ResponseStatus.UNAUTHORIZED_TOKEN);
        if (userId == -2) return new Response<>(ResponseStatus.BAD_ACCESS_TOKEN_VALUE);
        if (userId == -3) return new Response<>(ResponseStatus.FORBIDDEN_USER_ID);
        JwtOutput jwtOutput = new JwtOutput(userId);
        return new Response<>(jwtOutput, ResponseStatus.SUCCESS_SIGN_IN);
    }
    
    /**
     * 회원정보 조회 API
     * [GET] /users/profile
     * @return Response<ProfileOutput>
     */
    @GetMapping("/profile")
    @ApiOperation(value = "회원정보 조회", notes = "로그인된 회원 정보를 확인한다.")
    public Response<ProfileOutput> getProfile() {
        log.info("[GET] /users/profile");
        return userService.getProfile();
    }
    
    /**
     * 회원정보 수정 API
     * [PATCH] /users
     * @return Response<Object>
     */
    // Body
    @PatchMapping
    @ApiOperation(value = "회원정보 수정", notes = "로그인된 회원 정보를 수정한다.")
    public Response<Object> updateProfile(@RequestBody @Valid ProfileUpdate profileUpdate) {
        log.info("[PATCH] /users");
        return userService.updateProfile(profileUpdate);
    }

    /**
     * 회원탈퇴 API
     * [DELETE] /users/deactivate
     * @return Response<Object>
     */
    @DeleteMapping("/deactivate")
    @ApiOperation(value="회원 탈퇴", notes="탈퇴를 원하는 유저를 데이터베이스에서 삭제한다.")
    public Response<Object> deactivate(){
        log.info("[DELETE] /users/deactivate");
        return userService.deactivate();
    }
}
