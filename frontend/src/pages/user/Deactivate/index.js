import useInput from "../../../hooks/useInput";
import DeactivateTemplate from "../../../components/templates/DeactivateTemplate";
import { requestDelete } from "../../../api";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {
  nicknameValidator,
} from "../../../validator";
import {useState} from 'react';
import { showToast } from "../../../modules/feedback";
function Deactivate() {
  const history = useHistory();
  const dispatch = useDispatch();

  const userObj =  useSelector(state => state.userReducer.userInfo);
  const nickname = useInput(userObj.nickname, nicknameValidator);
  const [isClicked,setClick] = useState(false);


  async function handleUserDeactivate() {
    
    if (!isClicked) {
      dispatch(showToast("동의 체크 해주세요!"));
      return;
    }
    const response = await requestDelete("/users/deactivate");
    if (response.isSuccess) {
      localStorage.removeItem("loginUser");
      dispatch(showToast("정상적으로 탈퇴되었습니다. 그동안 이용해주셔서 감사합니다."));
      history.replace({ pathname: "/signin" });
    } else {
      console.log(response);
    }
  }
  function handleClick(){
    setClick((prev)=>!prev);
  }
  return (
    <>
      <DeactivateTemplate
        nickname={nickname}
        handleUserDeactivate={handleUserDeactivate}
        handleClick={handleClick}
        isClicked={isClicked}
      />
    </>
  );
}

export default Deactivate;
