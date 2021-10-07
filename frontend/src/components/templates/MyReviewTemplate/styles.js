import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  padding: 20px 30px 40px;
  height: 100vh;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.gray};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.green};
  }

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
