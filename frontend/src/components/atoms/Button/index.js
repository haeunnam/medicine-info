import { StyledButton } from "./styles";

function Button({ type = "button", children, color, size, ...rest }) {
  return (
    <StyledButton type={type} color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
