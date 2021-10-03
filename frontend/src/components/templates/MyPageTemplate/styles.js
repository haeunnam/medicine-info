import styled from "styled-components";
import theme from "../../../styles/theme";

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 45px;
  flex-direction: column;
  .info-box{
    display : flex;
    align-items: center;
    height: 100px;
    width: 100%;
  }
  .nickname-box{
    display : flex;
    flex-direction:column;
  }

  .icon {
    color: ${theme.colors.green};
    font-size:40px;
    width:20px;
    margin:0 3% 0 auto;
  }

  .image-box{
    width:90px;
    margin:1% 0 0 0;
  }

`;

export const StyledImg = styled.img`
  width: 80%;
`;


