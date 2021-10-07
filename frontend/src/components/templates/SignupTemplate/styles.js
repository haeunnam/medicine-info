import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  margin: 50px 0 100px;
  padding: 0 45px;
  .input-box {
    margin-bottom: 10px;
  }
  .birth-input,
  .gender-input {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const ErrorMessage = styled.div``;
