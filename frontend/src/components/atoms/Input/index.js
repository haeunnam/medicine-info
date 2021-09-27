import React from "react";
import { StyledInput } from "./styles";

function Input({ type = "text", id = "", lineInput, ...rest }) {
  return <StyledInput type={type} id={id} lineInput={lineInput} {...rest} />;
}

export default Input;
