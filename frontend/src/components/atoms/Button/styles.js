import styled, { css } from "styled-components";

const sizes = {
  large: {
    width: "100%",
    height: "50px",
    font: "18px",
  },
  medium: {
    width: "130px",
    height: "38px",
    font: "16px",
  },
  small: {
    width: "80px",
    height: "32px",
    font: "16px",
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    font-size: ${sizes[size].font};
  `}
`;

export const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: ${(props) =>
    props.theme.colors[props.bgColor] || props.theme.colors.green};
  color: ${(props) => props.theme.colors[props.color] || "#fff"};
  cursor: pointer;
  ${sizeStyles};
`;
