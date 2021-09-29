import { StyledButton } from "./styles";

function Button({
  type = "button",
  children,
  color,
  size,
  deactivate,
  ...rest
}) {
  return (
    <StyledButton
      type={type}
      color={color}
      size={size}
      deactivate={deactivate}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  size: "medium",
};

export default Button;
