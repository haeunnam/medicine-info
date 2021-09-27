import PropTypes from "prop-types";
import { IoIosArrowBack } from "react-icons/io";
import { Link, withRouter } from "react-router-dom";
import { Wrapper, BackButton, LogoAndTitle, Block } from "./styles";

/*
  Header에 포함되어 있는 모든 요소에 대해 true, false 값을 전달받아
  true 값인 요소만 Header에 출력
*/

function Header({ history, title = "", isLogo = false, isBack = false }) {
  function handleClickBack() {
    history.goBack();
  }

  return (
    <Block>
      <Wrapper>
        <BackButton isBack={isBack}>
          <IoIosArrowBack className="back-btn" onClick={handleClickBack} />
        </BackButton>
        <LogoAndTitle isLogo={isLogo} isTitle={title}>
          <Link to="/">
            <img
              src={require("../../../assets/images/logo.png").default}
              alt="WhatTheMedicine"
              className="logo"
            />
          </Link>
          <h3 className="title">{title}</h3>
        </LogoAndTitle>
      </Wrapper>
    </Block>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  isLogo: PropTypes.bool,
  isBack: PropTypes.bool,
};

export default withRouter(Header);
