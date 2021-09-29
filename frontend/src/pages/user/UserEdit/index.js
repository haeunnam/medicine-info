import useInput from "../../../hooks/useInput";
import UserEditTemplate from "../../../components/templates/UserEditTemplate";
import { request } from "../../../api";
// import { useHistory } from "reaㅈㅁct-router-dom";
import {
  nicknameValidator,
} from "../../../validator";
import { useState, useEffect } from "react";

function UserEdit() {
  // const history = useHistory();

  const nickname = useInput("", nicknameValidator);
  //local storage에서 가져와야 하나,,?
  const [birthDate, setBirthDate] = useState();
  const [gender, setGender] = useState();

  useEffect(() => {
    async function bringUserInfo() {
      const response = await request("GET", "/users/profile");
      if (response.isSuccess) {
        nickname.value = response.result.nickname;
        setGender(response.result.gender);
        setBirthDate(response.result.birthDate);
        console.log('회원정보가져오기 성공');
      } 
      else {
        //정보 불러올수 없는 경우는 해당 유저가 아닌 경우뿐?
        // 이렇게 nickname바꿔줘도 보이지가 않는다,, html에 전달되는거같은데?
        // setBirthDate("0");
        nickname.value="hi";
        setGender("M");
      }
    }; 
    bringUserInfo();
  },[])
  //api 요청
  async function handleUserEdit() {
    if (
      !nickname.isValid ||
      !birthDate ||
      !gender
    ) {
      alert("모든 항목을 입력하세요.");
      return;
    }

    const data = {
      nickname: nickname.value,
      birth: new Date(birthDate).toISOString().substring(0, 10),
      gender,
    };
    const response = await request("PATCH", "/users", data);
    if (response.isSuccess) {
      alert("회원정보 수정이 완료되었습니다.");
      // history.replace({ pathname: "/signin" });
    } 
    else {
      if (response.code === 405) {
        alert("이미 존재하는 닉네임입니다.");
      }
    } 
  }

  return (
    <>
      <UserEditTemplate
        nickname={nickname}
        birthDate={birthDate}
        setBirthDate={setBirthDate}
        gender={gender}
        setGender={setGender}
        handleUserEdit={handleUserEdit}
      />
    </>
  );
}

export default UserEdit;
