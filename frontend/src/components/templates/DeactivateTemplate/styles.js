import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  height: 100vh;
  padding: 20px 30px 40px;
  .medicine {
    padding: 20px 0;
    margin-bottom: 15px;
  }
  .star-rating {
    font-size: 38px;
    color: ${theme.colors.yellow};
    text-align: center;
    .star + .star {
      margin-left: 5px;
    }
    margin-bottom: 20px;
  }
  .title {
    font-size: ${theme.fontSizes.lg};
    font-weight: 400;
    margin: 10px 0 0 5px;
  }

  .check-box{
    display: flex;
    .icon{
      margin:13px 0 0 0;
    }
  }

`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size :${theme.fontSizes.md};
  .input-box {
    margin-bottom: 10px;
    .nick-name{
      font-weight:bold;
    }
  }
  .birth-input,
  .gender-input {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

// export const StyledTextarea = styled.textarea`
export const WarningContainer = styled.ul`
  outline: none;
  border: none;
  background-color: ${theme.colors.brightGray};
  border-radius: 6px;
  font-size :${theme.fontSizes.lg};
  height: 160px;
  // margin: 10px 30px;
  padding: 10px;
  resize: none;

  .content {
    padding: 3px 0;
  }
`;

export const ErrorMessage = styled.div``;
