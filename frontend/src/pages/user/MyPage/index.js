import MyPageTemplate from "../../../components/templates/MyPageTemplate";
import { request, requestGet } from "../../../api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'

function MyPage(){
  const dispatch = useDispatch();
  const history = useHistory();
  const userObj = useSelector(state => state.userReducer.userInfo);
  const isActive = 3;

  
  function moveReview(){
    alert("리뷰로 이동");
    // history.replace({ pathname: "/MyReviews" });
  }

  function handleLogout(){
    localStorage.removeItem("loginUser");
    history.push({ pathname:"/signin"});
  }

  function DeleteUser(){
    // history.replace({ pathname: "/signout"});
    alert("회원탈퇴 성공");
  }
 
  return (
    <>
      <MyPageTemplate
        userObj={userObj}
        moveReview={moveReview}
        handleLogout={handleLogout}
        DeleteUser={DeleteUser}
        isActive={isActive}
      />
    </>
  );
  }

export default MyPage;
