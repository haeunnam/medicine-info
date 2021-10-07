import { Wrapper, StyledButton } from "./styles";

function GenderSelector({ gender, setGender }) {
  return (
    <Wrapper>
      <StyledButton
        size="small"
        onClick={() => setGender("M")}
        children="남"
        deactivate={gender === "M" ? "" : "deactivate"}
      />
      <StyledButton
        size="small"
        onClick={() => setGender("F")}
        children="여"
        deactivate={gender === "F" ? "" : "deactivate"}
      />
    </Wrapper>
  );
}

export default GenderSelector;
