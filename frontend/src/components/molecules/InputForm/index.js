import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import { ErrorMessage } from "./styles";

function InputForm({
  labelName,
  labelId,
  onChange,
  isValid,
  errorMessage,
  type,
}) {
  return (
    <>
      <Label htmlFor={labelId}>{labelName}</Label>
      <Input type={type} id={labelId} onChange={onChange} lineInput />
      <ErrorMessage>{isValid ? "" : errorMessage}</ErrorMessage>
    </>
  );
}

export default InputForm;
