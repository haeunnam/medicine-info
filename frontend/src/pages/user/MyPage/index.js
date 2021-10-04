import MyPageTemplate from "../../../components/templates/MyPageTemplate";
import { request } from "../../../api";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../../modules/user";
import { useSelector } from 'react-redux'

function MyPage(){
  const dispatch = useDispatch();
  const history = useHistory();
  const userObj =  useSelector(state => state.userReducer.userInfo);
  const isActive = 3;
  useEffect(() => {
    async function bringUserInfo() {
      const response = await request("GET", "/users/profile");
      if (response.isSuccess) {
        const userInfo = {
          nickname : response.result.nickname,
          birth : response.result.birth,
          gender : response.result.gender,
          email : response.result.email,
        };
        dispatch(setUserInfo(userInfo));
      }
      else {
        const falseInfo = {
          nickname : 'test',
          birth : new Date('2009-03-11'),
          gender : "F",
          email : "test1234@gmail.com",
        };
        dispatch(setUserInfo(falseInfo));
      }
    }
    bringUserInfo();
  },[])
  
  function moveReview(){
    alert("리뷰로 이동");
    // history.replace({ pathname: "/MyReviews" });
  }

  function handleLogout(){
    // localStorage.removeItem("loginUser");
    history.replace({ pathname:"/signin"});
  }

  function DeleteUser(){
    // history.replace({ pathname: "/signout"});
    alert("회원탈퇴 성공");
  }
 
  return (
    <>
      <MyPageTemplate
        nickname = {userObj.nickname}
        email = {userObj.email}
        moveReview={moveReview}
        handleLogout={handleLogout}
        DeleteUser={DeleteUser}
        isActive={isActive}
      />
    </>
  );
  }

export default MyPage;
