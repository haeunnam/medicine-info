import useInput from "../../../hooks/useInput";
import UserEditTemplate from "../../../components/templates/UserEditTemplate";
import { request, requestPatch } from "../../../api";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import {
  nicknameValidator,
} from "../../../validator";
import { useState } from "react";

function UserEdit() {
  const history = useHistory();
  const userObj =  useSelector(state => state.userReducer.userInfo);
  const nickname = useInput(userObj.nickname, nicknameValidator);
  const [birth, setBirthDate] = useState(new Date(userObj.birth));
  const [gender, setGender] = useState(userObj.gender);

  //api 요청
  async function handleUserEdit() {
    if (
      !nickname.isValid ||
      !birth ||
      !gender
    ) {
      alert("모든 항목을 입력하세요.");
      return;
    }

    const data = {
      nickname: nickname.value,
      birth: new Date(birth).toISOString().substring(0, 10),
      gender,
    };
    const response = await request("PATCH","/users", data);
    if (response.isSuccess) {
      alert("회원정보 수정이 완료되었습니다.");
      console.log(response);
      history.replace({ pathname: "/mypage" });
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
        birth={birth}
        setBirthDate={setBirthDate}
        gender={gender}
        setGender={setGender}
        handleUserEdit={handleUserEdit}
      />
    </>
  );
}

export default UserEdit;
