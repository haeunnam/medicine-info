import React from "react";
import { StyledLabel } from "./styles";

function Label({ htmlFor = "", children = "", ...rest }) {
  return (
    <StyledLabel htmlFor={htmlFor} {...rest}>
      {children}
    </StyledLabel>
  );
}

export default Label;
