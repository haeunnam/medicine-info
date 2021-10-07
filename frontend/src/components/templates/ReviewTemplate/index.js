import MedicineItem from "../../molecules/MedicineItem";
import { Icon } from "@iconify/react";
import { Wrapper, StyledTextarea } from "./styles";
import FooterButton from "../../atoms/FooterButton";
import Header from "../../molecules/Header";

function ReviewTemplate({
  medicine,
  starRatingState,
  handleStarRating,
  setNewReview,
  newReview,
  handleReview,
}) {
  return (
    <>
      <Header title="리뷰작성" isBack />
      <Wrapper>
        <div className="medicine">
          <MedicineItem medicine={medicine} />
        </div>
        <div className="star-rating">
          {[0, 1, 2, 3, 4].map((idx) => {
            return (
              <span
                key={idx}
                className="star"
                onClick={() => handleStarRating(idx + 1)}
              >
                {starRatingState[idx] ? (
                  <Icon icon="bi:star-fill" className="star" />
                ) : (
                  <Icon icon="bi:star" className="star" />
                )}
              </span>
            );
          })}
        </div>
        <h2 className="title">평가하신 이유를 적어주세요!</h2>
        <StyledTextarea
          onChange={(e) => {
            setNewReview({ ...newReview, content: e.target.value });
          }}
          value={newReview.content || ""}
        />
      </Wrapper>
      <FooterButton children="리뷰등록" onClick={() => handleReview()} />
    </>
  );
}

export default ReviewTemplate;
