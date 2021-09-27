import styled from "styled-components";
import theme from "../../../styles/theme";

export const Button = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  color: ${theme.colors.white};
  background-color: ${(props) => props.bgColor || theme.colors.green};
  font-size: ${theme.fontSizes.xl};
`;
