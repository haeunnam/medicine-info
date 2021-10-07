import styled from "styled-components";
import theme from "../../../styles/theme";

export const Button = styled.button`
  display: block;
  position: fixed;
  bottom: 0;
  width: 500px;
  height: 60px;
  color: ${theme.colors.white};
  background-color: ${(props) => props.bgColor || theme.colors.green};
  font-size: ${theme.fontSizes.xl};
`;
