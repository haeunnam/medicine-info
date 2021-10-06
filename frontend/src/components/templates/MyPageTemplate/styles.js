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
    font-size:${theme.fontSizes.md};
  }

  .icon {
    color: ${theme.colors.green};
    font-size:${theme.fontSizes.xxl};
    width:20px;
    margin:0 3% 0 auto;
  }

  .image-box{
    width:90px;
    margin:1% 0 0 0;
  }

  .button-box{
    display:flex;
    flex-direction: column;
    font-size:${theme.fontSizes.md};
  }

`;

export const StyledImg = styled.img`
  width: 80%;
`;


