import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import { getMyReviews, deleteMine, deleteAll} from "../../../modules/medicines";
import MyReviewTemplate from "../../../components/templates/MyReviewTemplate";

function MyReview() {
  const dispatch = useDispatch();
  const myReviews =  useSelector(state => state.mediReducer.myReviews);
  const history = useHistory();
  async function handleInfiniteScroll(e) {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (parseInt(scrollTop) + parseInt(clientHeight) !== parseInt(scrollHeight))
      return;
    if (myReviews && myReviews.length % 10 !== 0) return;
    const page = parseInt(myReviews.length / 10);
    await dispatch(getMyReviews(page));
  }

  function reviewDelete(review){
    dispatch(deleteMine(review));
  }

  function reviewUpdate(data){
    const medicineInfo = {
      category: data.category,
      company : data.company,
      image: data.image,
      medicineId : data.medicineId,
      name: data.name,
      score : data.score
    };
    const review = {
      reviewId: data.reviewId,
      content: data.content
    }
    history.push({
      pathname:`/medicines/${medicineInfo.medicineId}/review`,
      state : {medicineInfo, review, operation:"update"}
    });
  }

  function deleteAllReviews(){
    dispatch(deleteAll());
  }

  useEffect(()=>{
    dispatch(getMyReviews());
  },[myReviews])

  return (
    <MyReviewTemplate
      myReviews={myReviews}
      handleInfiniteScroll={handleInfiniteScroll}
      reviewDelete={reviewDelete}
      reviewUpdate={reviewUpdate}
      deleteAllReviews={deleteAllReviews}
    />
  );
}

export default MyReview;
