import InputForm from "../../molecules/InputForm";
import { FormContainer } from "./styles";

function SignupTemplate({ email, password, passwordConfirm }) {
  return (
    <>
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
      </FormContainer>
    </>
  );
}

export default SignupTemplate;
