import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import InputForm from "../../molecules/InputForm";
import { FormContainer, Wrapper, StyledImg } from "./styles";

function SignInTemplate({ email, password, handleLogin }) {
  return (
    <Wrapper>
      <StyledImg
        src={require("../../../assets/images/logo.png").default}
        alt="logo"
      />
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
      </FormContainer>
      <Button size="large" children="로그인" onClick={handleLogin} />
      <div className="sign-up-message">
        <span className="message">아직 회원이 아니신가요?</span>
        <Link to="/signup">
          <span className="sign-up-button">회원가입</span>
        </Link>
      </div>
    </Wrapper>
  );
}

export default SignInTemplate;
