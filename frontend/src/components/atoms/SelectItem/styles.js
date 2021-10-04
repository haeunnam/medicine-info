import styled from "styled-components";
import theme from "../../../styles/theme";

export const ItemContainer = styled.div`
  display:flex;
  width: 100%
  padding: 5px 0;
  text-align: center;
  .icon{
    font-size:${theme.fontSizes.xl};
    justify-content: center;
    flex:1;
  }
  .id-box{
    flex:1;
  }
  .name-box{
    flex:2;
  }

`
