import styled, { css } from "styled-components";

function Button({ text, color, size, ...rest }) {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {text}
    </StyledButton>
  );
}

const sizes = {
  large: {
    width: "80%",
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

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: ${(props) =>
    props.theme.colors[props.bgColor] || props.theme.colors.green};
  color: ${(props) => props.theme.colors[props.color] || "#fff"};
  cursor: pointer;
  ${sizeStyles};
`;

Button.defaultProps = {
  size: "medium",
};

export default Button;
