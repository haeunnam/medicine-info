import styled from "styled-components";
import theme from "../../../styles/theme";

export const ItemContainer = styled.div`
  display:flex;
  width: 100%;
  padding: 5px 0;
  text-align: center;
  .icon{
    font-size:${theme.fontSizes.lg};
    justify-content: center;
    margin:20px 0 0 0;
    flex:1;
  }
  .id-box{
    flex:1;
    font-size : ${theme.fontSizes.md};
    padding:10px 0 0 0;
  }
  .name-box{
    flex:2;
    font-size : ${theme.fontSizes.md};
    padding:3px 0 0 0;
  }

`
