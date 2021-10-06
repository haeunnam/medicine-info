package com.medicine.serviceImpl;

import com.medicine.dto.user.profile.ProfileOutput;
import com.medicine.dto.user.profile.update.ProfileUpdate;
import com.medicine.dto.user.signin.SignInInput;
import com.medicine.dto.user.signup.SignUpInput;
import com.medicine.entity.mysql.UserDB;
import com.medicine.response.Response;
import com.medicine.service.JwtService;
import com.medicine.service.UserService;
import com.medicine.dao.mysql.UserRepository;
import com.medicine.dto.user.signin.SignInOutput;
import com.medicine.dto.user.signup.SignUpOutput;

import com.medicine.response.ResponseStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import static com.medicine.response.ResponseStatus.DATABASE_ERROR;
import static com.medicine.response.ResponseStatus.NOT_FOUND_USER;

import java.util.Date;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import static com.medicine.response.ResponseStatus.*;

@Service("UserService")
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final JwtService jwtService;

    @Override
    public Response<SignInOutput> signIn(SignInInput signInInput) {
        // 1. 값 형식 체크
        if (signInInput == null) return new Response<>(ResponseStatus.NO_VALUES);

        // 2. user 정보 가져오기
        UserDB userDB;
        try {
            String email = signInInput.getEmail();
            String password = signInInput.getPassword();
            userDB = userRepository.findByEmail(email);
            if (userDB == null) {
                log.error("[users/signin/post] NOT FOUND LOGIN USER error");
                return new Response<>(ResponseStatus.NOT_FOUND_USER);
            } else if (!userDB.getPassword().equals(password)) {
                log.error("[users/signin/post] FAIL TO SIGN UP error");
                return new Response<>(ResponseStatus.FAILED_TO_SIGN_IN);
            }
        } catch (Exception e) {
            log.error("[users/signin/post] database error");
            return new Response<>(ResponseStatus.DATABASE_ERROR);
        }

        // 3. access token 생성
        String accessToken;
        try {
            accessToken = jwtService.createAccessToken(userDB.getId());
            if (accessToken.isEmpty()) {
                log.error("[users/signin/post] FAIL TO CREATE TOKEN error");
                return new Response<>(ResponseStatus.FAILED_TO_CREATE_TOKEN);
            }
        } catch (Exception e) {
            log.error("[users/signin/post] FAIL TO CREATE TOKEN error");
            return new Response<>(ResponseStatus.FAILED_TO_CREATE_TOKEN);
        }

        // 4. 결과 return
        SignInOutput signInOutput = new SignInOutput(userDB.getId(), accessToken);
        return new Response<>(signInOutput, ResponseStatus.SUCCESS_SIGN_IN);
    }

    @Override
    @Transactional
    public Response<SignUpOutput> signUp(SignUpInput signUpInput) {
        // 1. 값 형식 체크
        if (signUpInput == null) return new Response<>(ResponseStatus.NO_VALUES);

        // 2. 유저 생성
        UserDB userDB;
        try {
            String email = signUpInput.getEmail();
            String nickname = signUpInput.getNickname();
            UserDB existEmailUser = userRepository.findByEmail(email);
            UserDB existNicknameUser = userRepository.findByNickname(nickname);
            if (existEmailUser != null) {
                log.error("[users/signup/post] EXISTS EMAIL error");
                return new Response<>(ResponseStatus.EXISTS_EMAIL);
            }
            else if(existNicknameUser != null) {
                log.error("[users/signup/post] EXISTS NICKNAME error");
                return new Response<>(ResponseStatus.EXISTS_NICKNAME);
            }
            else {
                userDB = UserDB.builder()
                        .email(signUpInput.getEmail())
                        .password(signUpInput.getPassword())
                        .nickname(signUpInput.getNickname())
                        .birth(signUpInput.getBirth())
                        .gender(signUpInput.getGender())
                        .build();
                userRepository.save(userDB);
            }
        } catch (Exception e) {
            log.error("[users/signup/post] database error");
            return new Response<>(ResponseStatus.DATABASE_ERROR);
        }

        // 3. 토큰 생성
        String accessToken;
        try {
            accessToken = jwtService.createAccessToken(userDB.getId());
            if (accessToken.isEmpty()) {
                log.error("[users/signup/post] FAIL TO CREATE TOKEN error");
                return new Response<>(ResponseStatus.FAILED_TO_CREATE_TOKEN);
            }
        } catch (Exception exception) {
            log.error("[users/signup/post] FAIL TO CREATE TOKEN error");
            return new Response<>(ResponseStatus.FAILED_TO_CREATE_TOKEN);
        }

        // 4. 결과 return
        SignUpOutput signUpOutput = new SignUpOutput(userDB.getId(), accessToken);
        return new Response<>(signUpOutput, ResponseStatus.CREATED_USER);
    }

	@Override
	public Response<ProfileOutput> getProfile() {
		// 1. 회원정보 가져오기
		ProfileOutput profileOutput;
        try {
            UserDB userDB = jwtService.getUserDB();
            if (userDB == null) {
                log.error("[users/profile/get] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }

            profileOutput = ProfileOutput.builder()
            				.email(userDB.getEmail())
            				.nickname(userDB.getNickname())
            				.gender(userDB.getGender())
            				.birth(userDB.getBirth())
            				.build();

        } catch (Exception e){
            log.error("[users/profile/get] database error",e);
            return new Response<>(DATABASE_ERROR);
        }

        return new Response<>(profileOutput, SUCCESS_GET_PROFILE);
	}

	@Override
    @Transactional
	public Response<Object> updateProfile(ProfileUpdate profileUpdate) {
		try {
            UserDB userDB = jwtService.getUserDB();
            if (userDB == null) {
                log.error("[users/patch] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            
            String email = userDB.getEmail();
            String password = userDB.getPassword();
            String nickname = profileUpdate.getNickname() == null ? userDB.getNickname() : profileUpdate.getNickname();
            String gender = profileUpdate.getGender() == null ? userDB.getGender() : profileUpdate.getGender();
            Date birth = profileUpdate.getBirth() == null ? userDB.getBirth() : profileUpdate.getBirth();

            userDB.setNickname(nickname);
            userDB.setEmail(email);
            userDB.setPassword(password);
            userDB.setGender(gender);
            userDB.setBirth(birth);
            userRepository.save(userDB);
            
        } catch (Exception e){
            log.error("[users/patch] database error",e);
            return new Response<>(DATABASE_ERROR);
        }
		
        return new Response<>(null, SUCCESS_UPDATE_PROFILE);
	}

    @Override
    @Transactional
    public Response<Object> deactivate() {
        try{
            // 1. 유저 삭제
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[users/deactivate/delete] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }
            userRepository.deleteById(loginUserId);
        } catch (Exception e){
            log.error("[users/deactivate/delete] database error" , e);
            return new Response<>(DATABASE_ERROR);
        }
        return new Response<>(null,SUCCESS_DELETE_USER);
    }
}
