import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  position: fixed;
  bottom: ${(props) => (props.toastShow ? "70px" : "-60px")};
  opacity: ${(props) => (props.toastShow ? "1" : "0")};
  width: 500px;
  display: flex;
  justify-content: center;
  z-index: 999;
  justify-content: center;
  transition: all 0.6s;
`;

export const Message = styled.div`
  padding: 15px 12px;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.green};
  color: #bebebf;
  color: ${theme.colors.white};

  border-radius: 6px;
  width: 450px;
  word-break: break-all;
  font-size: ${theme.fontSizes.lg};
  font-weight: 400;
`;
