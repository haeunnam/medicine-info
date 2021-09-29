import React from "react";
import InputForm from "../../molecules/InputForm";
import { FormContainer } from "./styles";
import Header from "../../molecules/Header";
import InputDate from "../../atoms/InputDate";
import Label from "../../atoms/Label";
import FooterButton from "../../atoms/FooterButton";
import GenderSelector from "../../molecules/GenderSelector";

function SignupTemplate({
  email,
  password,
  passwordConfirm,
  nickname,
  birthDate,
  setBirthDate,
  handleSignUp,
  setGender,
  gender,
}) {
  return (
    <>
      <Header title="회원가입" isBack />
      <FormContainer>
        <div className="input-box">
          <InputForm
            labelName="이메일"
            labelId="email"
            value={email.value}
            onChange={email.onChange}
            isValid={email.isValid}
            errorMessage={email.errorMessage}
          />
        </div>
        <div className="input-box">
          <InputForm
            type="password"
            labelName="비밀번호"
            labelId="password"
            value={password.value}
            onChange={password.onChange}
            isValid={password.isValid}
            errorMessage={password.errorMessage}
          />
        </div>

        <div className="input-box">
          <InputForm
            type="password"
            labelName="비밀번호 확인"
            labelId="password-confirm"
            value={passwordConfirm.value}
            onChange={passwordConfirm.onChange}
            isValid={passwordConfirm.isValid}
            errorMessage={passwordConfirm.errorMessage}
          />
        </div>

        <div className="input-box">
          <InputForm
            labelName="닉네임"
            labelId="nickname"
            value={nickname.value}
            onChange={nickname.onChange}
            errorMessage={nickname.errorMessage}
          />
        </div>
        <div className="input-box">
          <Label labelId="birth-date" children="생년월일" />
          <div className="birth-input">
            <InputDate
              className="birth-date"
              selectedDate={birthDate}
              setSelectedDate={setBirthDate}
            />
          </div>
        </div>
        <div className="input-box">
          <Label labelId="gender" children="성별" />
          <div className="gender-input">
            <GenderSelector gender={gender} setGender={setGender} />
          </div>
        </div>
      </FormContainer>
      <FooterButton children="회원가입" onClick={handleSignUp} />
    </>
  );
}

export default SignupTemplate;
