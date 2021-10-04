import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
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
    text-align: center;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;

export const StyledTextarea = styled.textarea`
  outline: none;
  border: none;
  background-color: ${theme.colors.brightGray};
  border-radius: 6px;
  font-size: ${theme.fontSizes.md};
  height: 160px;
  padding: 10px;
  resize: none;
`;
