import React from "react";
import InputForm from "../../molecules/InputForm";
import { FormContainer } from "./styles";
import Header from "../../molecules/Header";
import InputDate from "../../atoms/InputDate";
import Label from "../../atoms/Label";
import FooterButton from "../../atoms/FooterButton";
import GenderSelector from "../../molecules/GenderSelector";

function UserEditTemplate({
  nickname,
  birthDate,
  setBirthDate,
  handleUserEdit,
  setGender,
  gender,
}) {
  return (
    <>
      <Header title="개인정보수정" isBack />
      <FormContainer>
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
      <FooterButton children="수정완료" onClick={handleUserEdit} />
    </>
  );
}

export default UserEditTemplate;
