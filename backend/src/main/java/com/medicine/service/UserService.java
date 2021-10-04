package com.medicine.service;

import com.medicine.dto.user.profile.ProfileOutput;
import com.medicine.dto.user.signin.SignInInput;
import com.medicine.response.Response;
import com.medicine.dto.user.signin.SignInOutput;
import com.medicine.dto.user.signup.SignUpInput;
import com.medicine.dto.user.signup.SignUpOutput;

public interface UserService {
    Response<SignInOutput> signIn(SignInInput signInInput);
    Response<SignUpOutput> signUp(SignUpInput signUpInput);
	Response<ProfileOutput> getProfile();
}
