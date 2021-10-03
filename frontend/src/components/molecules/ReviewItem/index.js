import { Wrapper } from "./styles";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const ReviewItem = ({ reviewObj, onUpdateClick, onDeleteClick }) => {
  const loginUser = useSelector((state) => state.userReducer.userId);
  return (
    <Wrapper>
      <header className="review-header">
        <div>
          <span className="username">영양제덕후</span>
          <span className="rating">
            <Icon icon="bx:bxs-star" className="rating-star" />
            <span>3</span>
          </span>
        </div>
        <div className="btn">
          <button className="update-btn" onClick={() => onUpdateClick()}>
            수정
          </button>
          <button className="delete-btn" onClick={() => onDeleteClick()}>
            삭제
          </button>
        </div>
      </header>
      <p className="review">늘 먹는 영양제</p>
    </Wrapper>
  );
};

export default ReviewItem;
