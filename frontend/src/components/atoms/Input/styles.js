import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

const lineInput = css`
  ${(props) =>
    props.lineInput &&
    css`
      border: 1;
      background-color: white;
      border-color: ${theme.colors.gray};
      border-width: 0 0 1px;
      border-radius: 0;
      padding: 0 5px;
      width: 100%;
    `}
`;

export const StyledInput = styled.input`
  outline: none;
  background-color: ${theme.colors.brightGray};
  border-radius: 6px;
  font-size: ${theme.fontSizes.lg};
  height: 40px;
  width: ${(props) => props.width || "80%"};
  padding: 0 10px;
  border-width: 0;
  ${lineInput};
`;
