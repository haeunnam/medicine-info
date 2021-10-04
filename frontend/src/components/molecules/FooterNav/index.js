import { Link } from "react-router-dom";
import { Wrapper, IconBox } from "./styles";
import { Icon } from "@iconify/react";

function FooterNav({ isActive = 0 }) {
  return (
    <>
      <Wrapper>
        <Link to="/">
          <IconBox>
            <Icon
              icon="ic:round-health-and-safety"
              className={`icon ${isActive === 0 ? "active" : ""}`}
            />
            <span>의약품</span>
          </IconBox>
        </Link>
        <Link to="/dur">
          <IconBox>
            <Icon
              icon="carbon:pills-subtract"
              className={`icon ${isActive === 1 ? "active" : ""}`}
            />
            <span>복용주의</span>
          </IconBox>
        </Link>
        <Link to="/">
          <IconBox>
            <Icon
              icon="healthicons:health-data-security"
              className={`icon ${isActive === 2 ? "active" : ""}`}
            />
            <span>나의 약</span>
          </IconBox>
        </Link>
        <Link to="/mypage">
          <IconBox>
            <Icon
              icon="healthicons:ui-user-profile-outline"
              className={`icon ${isActive === 3 ? "active" : ""}`}
            />
            <span>마이페이지</span>
          </IconBox>
        </Link>
      </Wrapper>
    </>
  );
}

export default FooterNav;
