import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  background-color: white;
  align-items: center;
  border-top: 1px solid ${theme.colors.lightGray};
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  .icon {
    color: ${theme.colors.green};
    font-size: 24px;
  }
  span {
    font-size: ${theme.fontSizes.sm};
    color: "#2D3436";
  }
  .active {
    color: ${theme.colors.yellow};
  }
`;
