import { Wrapper } from "./styles";
import MedicineItem from "../MedicineItem";

const MyReviewItem = ({ review, reviewUpdate, reviewDelete }) => {
  const medicines = {
    image: review.image,
    name: review.name,
    score: review.score,
    medicineId: review.medicineId,
  };

  return (
    <Wrapper>
      <header className="review-header">
          <MedicineItem medicine={medicines} />
          <div className="btn">
            <button className="update-btn" onClick={() => reviewUpdate(review)}>
              수정
            </button>
            <button
              className="delete-btn"
              onClick={() => reviewDelete(review)}
            >
              삭제
            </button>
          </div>
      </header>
      <p className="review">{review.content}</p>
    </Wrapper>
  );
};

export default MyReviewItem;
