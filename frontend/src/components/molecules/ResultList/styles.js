import styled from "styled-components";
import theme from "../../../styles/theme";

export const StyledLabel = styled.label`
  display: block;
  color: ${(props)=> props.isDur ? props.theme.colors.red : props.theme.colors.black};
  font-weight: bold;
  font-size: ${theme.fontSizes.lg};
  margin:5px 0;
  font-weight: 500;

  .icon{
    font-size: ${theme.fontSizes.xl};
    padding:5px 0 0 0;
  }
`;

export const Wrapper = styled.div`
  .icon-img{
    height: 28px;
    width: 29px;
    margin-right: 10px;
  
  }
  .with-icon{
    display: flex;
    align-items: center;
  }
`;