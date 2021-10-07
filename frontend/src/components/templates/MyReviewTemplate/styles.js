import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  padding: 20px 30px 40px;
  height: 100vh;

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

export const Button = styled.div`
  .delete-all-button{
    font-size:${theme.fontSizes.xs};
  }
  margin:10px 0 0 auto;
`
