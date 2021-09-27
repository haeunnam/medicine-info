import Header from "../components/molecules/Header";
import FooterButton from "../components/molecules/FooterButton";
import useInput from "../hooks/useInput";
import SignupTemplate from "../components/templates/SignupTemplate";
import { request } from "../api";
import { useHistory } from "react-router-dom";

function Signup() {
  const signUpValues = JSON.parse(localStorage.getItem("signUpValues"));
  const history = useHistory();

  const email = useInput(
    signUpValues ? signUpValues.email : "",
    emailValidator
  );
  const password = useInput(
    signUpValues ? signUpValues.password : "",
    passwordValidator
  );
  const passwordConfirm = useInput(
    signUpValues ? signUpValues.passwordConfirm : "",
    passwordConfirmValidator
  );

  function emailValidator(value) {
    const reg = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const result = reg.test(value);
    if (result) {
      return { isValid: true, errorMessage: "" };
    } else {
      return { isValid: false, errorMessage: "이메일 형식으로 입력하세요" };
    }
  }

  function passwordValidator(value) {
    if (value.length < 6 || value.length > 18) {
      return { isValid: false, errorMessage: "6~18글자를 입력해주세요." };
    } else {
      return { isValid: true, errorMessage: "" };
    }
  }

  function passwordConfirmValidator(value) {
    if (password.value !== value) {
      return { isValid: false, errorMessage: "비밀번호가 일치하지 않습니다." };
    } else {
      return { isValid: true, errorMessage: "" };
    }
  }
  //api 요청
  async function handleSignUp() {
    const data = {
      email: email.value,
      password: password.value,
    };
    const response = await request("POST", "/users/signup", data);
    if (response.isSuccess) {
      alert("회원가입이 완료되었습니다.");
      //임시로 설정
      history.replace({ pathname: "/" });
    } else {
      if (response.code === 404) {
        alert("이미 사용중인 이메일입니다.");
      }
      if (response.code === 405) {
        alert("이미 사용중인 닉네임입니다.");
      }
      return;
    }
  }

  return (
    <>
      <Header title="회원가입" isBack />
      <SignupTemplate
        email={email}
        password={password}
        passwordConfirm={passwordConfirm}
      />
      <FooterButton children="회원가입" onClick={handleSignUp} />
    </>
  );
}

export default Signup;
