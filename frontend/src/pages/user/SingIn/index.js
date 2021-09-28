import { useHistory } from "react-router-dom";
import { emailValidator, passwordValidator } from "../../../validator";
import useInput from "../../../hooks/useInput";
import SignInTemplate from "../../../components/templates/SignInTemplate";
import { request } from "../../../api";

function SignIn() {
  const history = useHistory();

  const email = useInput("", emailValidator);
  const password = useInput("", passwordValidator);

  async function handleLogin() {
    if (!email.isValid || !password.isValid) {
      alert("이메일과 패스워드를 확인해주세요.");
      return;
    }
    const data = {
      email: email.value,
      password: password.value,
    };
    const response = await request("POST", "/users/signin", data);
    if (response.isSuccess) {
      const loginUser = {
        id: response.result.userId,
        accessToken: response.result.accessToken,
      };
      localStorage.setItem("loginUser", JSON.stringify(loginUser));
      history.push({ pathname: "/" });
    } else {
      alert("가입하지 않은 이메일이거나, 잘못된 비밀번호입니다.");
    }
  }

  return (
    <>
      <SignInTemplate
        email={email}
        password={password}
        handleLogin={handleLogin}
      />
    </>
  );
}

export default SignIn;
