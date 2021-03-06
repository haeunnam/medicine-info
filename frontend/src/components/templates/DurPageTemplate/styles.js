import styled from "styled-components";
import theme from "../../../styles/theme";

export const DurContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 45px;
  margin-bottom: 50px;
  word-wrap: break-word;

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
  .bucket{
    margin: 20px 0 ;
  }

  .check-button{
    margin:30px auto;
  }

  .result-box{
    margin-top: 10px;
    /* margin:0 0 30px 0;
    padding: 0 0 30px 0; */
  }
  .icon-img{
    display: inline;
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
  .with-icon{
  }


`;

