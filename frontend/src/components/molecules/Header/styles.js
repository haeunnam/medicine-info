import styled from "styled-components";
import theme from "../../../styles/theme";

export const Block = styled.div`
  display: block;
  width: 100%;
  height: 55px;
`;

export const Wrapper = styled.div`
  position: fixed relative;
  z-index: 9999;
  top: 0;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-bottom: 1px solid ${theme.colors.lightGray};
  padding: 8px 12px;
  background-color: white;
  color: ${theme.colors.black};
`;

export const BackButton = styled.div`
  width: 53px;
  position: absolute;
  left: 8px;
  .back-btn {
    display: ${(props) => (props.isBack ? "block" : "none")};
    font-size: ${theme.fontSizes.xxl};
  }
`;

export const LogoAndTitle = styled.div`
  width: 110px;
  text-align: center;
  display: flex;
  justify-content: center;
  .title {
    display: ${(props) => (props.isTitle ? "block" : "none")};
    white-space: nowrap;
  }
  .logo {
    display: ${(props) => (props.isLogo && !props.isTitle ? "block" : "none")};
    width: 140px;
    height: auto;
  }
`;
