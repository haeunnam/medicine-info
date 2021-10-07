import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .medicine-img {
    width: 110px;
    height: auto;
    margin-right: 15px;
  }
  .content {
    .medicine-company {
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.gray};
      font-weight: 400;
    }
    .medicine-name {
      font-size: ${theme.fontSizes.md};
      color: ${theme.colors.black};
    }
    .medicine-rating {
      .rating-star {
        color: ${theme.colors.yellow};
        margin-right: 4px;
      }
      font-size: ${theme.fontSizes.xs};
    }
    .medicine-kind {
      font-weight: 400;
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.gray};
    }
    flex:2;

  }
  & + & {
    margin-top: 28px;
  }

  .icon-box{
    font-size : ${theme.fontSizes.md};
  }
`;

export const DeleteButton = styled.button`
  background-color: none;
`