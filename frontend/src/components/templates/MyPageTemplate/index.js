import { Link } from "react-router-dom";
import { InfoContainer, StyledImg } from "./styles";
import Header from "../../molecules/Header";
import { AiOutlineSetting } from 'react-icons/ai'
import MenuButton from "../../atoms/MenuButton";
function MyPageTemplate({ 
  nickname, 
  email,
  moveReview,
  handleLogout,
  DeleteUser,
}) {
  return (
  <>
    <Header title="마이페이지" />
    <InfoContainer>
      <div className="info-box">
        <div className="image-box">
          <StyledImg
            src={require("../../../assets/images/bi-yak.jpg").default}
            alt="bi-yak"
          />
        </div>
        <div className="nickname-box">
          <h1>{nickname}</h1>
          <p>{email}</p>
        </div>
        <Link to="/mypage/edit" className="icon">
          < AiOutlineSetting />
        </Link>
      </div>
      <MenuButton children="내가쓴리뷰" onClick={moveReview}/>
      <MenuButton children="로그아웃" onClick={handleLogout}/>
      <MenuButton children="회원탈퇴" onClick={DeleteUser}/>
    </InfoContainer>
  </>
  );
}

export default MyPageTemplate;
