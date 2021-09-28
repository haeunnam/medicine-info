import styled from "styled-components";
import theme from "../../../styles/theme";

export const FormContainer = styled.div`
  width: 100%;
  .input-box {
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 45px;
  align-items: center;
  margin: 6rem 0;
  .sign-up-message {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: ${theme.fontSizes.md};
    margin-top: 10px;
    .message {
      color: ${theme.colors.gray};
    }
  }
`;

export const StyledImg = styled.img`
  width: 80%;
  margin-bottom: 50px;
`;
