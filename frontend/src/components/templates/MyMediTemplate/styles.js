import styled from "styled-components";
import theme from '../../../styles/theme';
export const MyPillContainer = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  flex-direction:column;
  padding: 0 45px;
  padding: 16px 24px 42px;
  height: ${(props) => props.height}px;

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

`
export const LikeContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 16px 24px 42px;
  height: ${(props) => props.height}px;

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
`