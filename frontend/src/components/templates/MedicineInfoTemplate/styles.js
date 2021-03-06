import styled from "styled-components";
import theme from "../../../styles/theme";

export const ReviewsContainer = styled.div`
  font-size: ${theme.fontSizes.lg};
  height: ${(props) => props.height}px;
  overflow: scroll;
  overflow-x: hidden;
  padding: 12px 18px 36px;
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
  .total-rating {
    font-size: ${theme.fontSizes.md};
    margin-bottom: 12px;
  }
  .header {
    margin-bottom: 30px;
    padding: 0 4px;
    display: flex;
    justify-content: space-between;
    .icon-star {
      color: ${theme.colors.yellow};
      font-size: ${theme.fontSizes.xl};
      margin-right: 6px;
    }
    .rating-score {
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .rating-num {
      font-weight: 500;
    }
    .icon-write {
      color: ${theme.colors.green};
      font-size: ${theme.fontSizes.xxl};
    }
  }
`;

export const MedicinesContainer = styled.div`
  padding: 16px 24px 42px;
  height: ${(props) => props.height}px;
  overflow: scroll;
  overflow-x: hidden;
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
`;

export const MedDetailContainer = styled.div`
  padding: 12px 18px 24px;
  height: ${(props) => props.height}px;
  overflow: scroll;
  overflow-x: hidden;
  font-size: ${theme.fontSizes.md};
  .med-detail {
    margin-bottom: 20px;
    .med-detail-title {
      font-weight: 500;
      margin-bottom: 10px;
    }
    .med-detail-content {
      font-size: ${theme.fontSizes.sm};
      padding: 0 0 0 4px;
    }
  }
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
`;

export const Wrapper = styled.div`
`;
