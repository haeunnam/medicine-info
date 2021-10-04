package com.medicine.serviceImpl;

import com.medicine.dto.medicine.DetailOutput;
import com.medicine.dto.user.profile.ProfileOutput;
import com.medicine.dto.user.signin.SignInInput;
import com.medicine.dto.user.signup.SignUpInput;
import com.medicine.entity.mysql.MedicineDB;
import com.medicine.entity.mysql.ReviewDB;
import com.medicine.entity.mysql.UserDB;
import com.medicine.response.Response;
import com.medicine.service.JwtService;
import com.medicine.service.UserService;
import com.medicine.dao.mysql.DetailMedicineRepository;
import com.medicine.dao.mysql.ReviewRepository;
import com.medicine.dao.mysql.SimilarMedicineRepository;
import com.medicine.dao.mysql.UserRepository;
import com.medicine.dto.user.signin.SignInOutput;
import com.medicine.dto.user.signup.SignUpOutput;

import com.medicine.response.ResponseStatus;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import static com.medicine.response.ResponseStatus.DATABASE_ERROR;
import static com.medicine.response.ResponseStatus.NOT_FOUND_USER;
import static com.medicine.response.ResponseStatus.SUCCESS_GET_DETAIL_MEDICINE;

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
                return new Response<>(ResponseStatus.NOT_FOUND_USER);
            } else if (!userDB.getPassword().equals(password)) {
                return new Response<>(ResponseStatus.FAILED_TO_SIGN_IN);
            }
        } catch (Exception e) {
            return new Response<>(ResponseStatus.DATABASE_ERROR);
        }

        // 3. access token 생성
        String accessToken;
        try {
            accessToken = jwtService.createAccessToken(userDB.getId());
            if (accessToken.isEmpty()) {
                return new Response<>(ResponseStatus.FAILED_TO_CREATE_TOKEN);
            }
        } catch (Exception e) {
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
                return new Response<>(ResponseStatus.EXISTS_EMAIL);
            }
            else if(existNicknameUser != null) {
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
            return new Response<>(ResponseStatus.DATABASE_ERROR);
        }

        // 3. 토큰 생성
        String accessToken;
        try {
            accessToken = jwtService.createAccessToken(userDB.getId());
            if (accessToken.isEmpty()) {
                return new Response<>(ResponseStatus.FAILED_TO_CREATE_TOKEN);
            }
        } catch (Exception exception) {
            return new Response<>(ResponseStatus.FAILED_TO_CREATE_TOKEN);
        }

        // 4. 결과 return
        SignUpOutput signUpOutput = new SignUpOutput(userDB.getId(), accessToken);
        return new Response<>(signUpOutput, ResponseStatus.CREATED_USER);
    }

	@Override
	public Response<ProfileOutput> getProfile() {
		// 2. 약 상세정보 가져오기
		ProfileOutput profileOutput;
        try {
            int loginUserId = jwtService.getUserId();
            if (loginUserId <= 0) {
                log.error("[medicines/get] NOT FOUND LOGIN USER error");
                return new Response<>(NOT_FOUND_USER);
            }

            UserDB userDB = userRepository.findById(loginUserId).get();
            		
            profileOutput = ProfileOutput.builder()
            				.email(userDB.getEmail())
            				.nickname(userDB.getNickname())
            				.gender(userDB.getGender())
            				.birth(userDB.getBirth())
            				.build();

        } catch (Exception e){
            log.error("[user/profile] database error",e);
            return new Response<>(DATABASE_ERROR);
        }

        return new Response<>(profileOutput, SUCCESS_GET_PROFILE);
	}
}
