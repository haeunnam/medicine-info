import styled from "styled-components";
import theme from "../../../styles/theme";

export const Button = styled.button`
  border: solid;
  height: 60px;
  border-width: 0 0 3px 0;
  margin: 1% 0 0 0;
  cursor: pointer;
  font-size: ${theme.fontSizes.xl};
  font-weight: bold;
  border-color:${theme.colors.lightGray};
  text-align:left;

`;
