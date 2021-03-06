import MyPageTemplate from "../../../components/templates/MyPageTemplate";
import { useHistory } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { getUserInfo } from "../../../modules/user";
import { useEffect } from "react";

function MyPage(){
  const dispatch = useDispatch();
  const history = useHistory();
  const userObj = useSelector(state => state.userReducer.userInfo);
  const isActive = 3;

  useEffect(() => {
    dispatch(getUserInfo());
  },[])
  function moveReview(){
    history.push({ pathname: "/myreview" });
  }

  function handleLogout(){
    localStorage.removeItem("loginUser");
    history.push({ pathname:"/signin"});
  }

  function DeleteUser(){
    history.push({ pathname: "/signout"});
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
