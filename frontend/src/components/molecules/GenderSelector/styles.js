import styled from "styled-components";
import Button from "../../atoms/Button";

export const Wrapper = styled.div``;
export const StyledButton = styled(Button)`
  & + & {
    margin-left: 10px;
  }
`;
