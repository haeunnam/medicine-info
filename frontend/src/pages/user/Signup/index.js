import useInput from "../../../hooks/useInput";
import SignupTemplate from "../../../components/templates/SignupTemplate";
import { request } from "../../../api";
import { useHistory } from "react-router-dom";
import {
  emailValidator,
  passwordValidator,
  nicknameValidator,
} from "../../../validator";
import { useState } from "react";
import { showToast } from "../../../modules/feedback";

function Signup() {
  const history = useHistory();
  const dispatch = useHistory();

  const email = useInput("", emailValidator);
  const password = useInput("", passwordValidator);
  const passwordConfirm = useInput("", passwordConfirmValidator);
  const nickname = useInput("", nicknameValidator);
  const [birthDate, setBirthDate] = useState();
  const [gender, setGender] = useState();

  function passwordConfirmValidator(value) {
    if (password.value !== value) {
      return { isValid: false, errorMessage: "비밀번호가 일치하지 않습니다." };
    } else {
      return { isValid: true, errorMessage: "" };
    }
  }

  //api 요청
  async function handleSignUp() {
    if (password.value !== passwordConfirm.value) {
      dispatch(showToast("비밀번호를 확인해주세요."));
      return;
    }
    if (
      !nickname.isValid ||
      !email.isValid ||
      !password.isValid ||
      !passwordConfirm.isValid ||
      !birthDate ||
      !gender
    ) {
      dispatch(showToast("모든 항목을 입력하세요."));
      return;
    }

    const data = {
      email: email.value,
      password: password.value,
      nickname: nickname.value,
      birth: new Date(birthDate).toISOString().substring(0, 10),
      gender,
    };
    const response = await request("POST", "/users/signup", data);
    if (response.isSuccess) {
      dispatch(showToast("회원가입이 완료되었습니다."));
      history.replace({ pathname: "/signin" });
    } else {
      if (response.code === 404) {
        dispatch(showToast("이미 사용중인 이메일입니다."));
      } else if (response.code === 405) {
        dispatch(showToast("이미 존재하는 닉네임입니다."));
      }
    }
  }

  return (
    <>
      <SignupTemplate
        email={email}
        password={password}
        passwordConfirm={passwordConfirm}
        nickname={nickname}
        birthDate={birthDate}
        setBirthDate={setBirthDate}
        gender={gender}
        setGender={setGender}
        handleSignUp={handleSignUp}
      />
    </>
  );
}

export default Signup;
