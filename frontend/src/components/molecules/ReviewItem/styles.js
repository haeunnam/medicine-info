import styled from "styled-components";
import theme from "../../../styles/theme";

export const Wrapper = styled.div`
  & + & {
    margin-top: 20px;
  }
  .review-header {
    padding: 0 4px;
    margin-bottom: 4px;
    display: flex;
    justify-content: space-between;
    font-size: ${theme.fontSizes.sm};
    .username {
      margin-right: 5px;
    }
    .rating {
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
      .rating-star {
        color: ${theme.colors.yellow};
        margin-right: 2px;
      }
    }
    .update-btn,
    .delete-btn {
      font-size: ${theme.fontSizes.xs};
      padding: 2px;
    }
    .update-btn {
      margin-right: 5px;
    }
    .delete-btn {
      color: ${theme.colors.red};
    }
  }
  .review {
    background-color: ${theme.colors.brightGray};
    font-size: ${theme.fontSizes.sm};
    border-radius: 6px;
    padding: 8px 12px;
  }
`;
