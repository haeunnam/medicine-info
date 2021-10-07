import styled from "styled-components";
import theme from "../../../styles/theme";

export const ItemContainer = styled.div`
  display:flex;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  display: inline-flex;
  align-items: center;
  .icon{
    font-size:${theme.fontSizes.lg};
    flex:1;
  }
  .id-box{
    flex:1;
    font-size : ${theme.fontSizes.md};
  }
  .name-box{
    flex:2;
    font-size : ${theme.fontSizes.md};
  }

`
