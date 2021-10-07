import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../../../modules/feedback";
import "./styles";
import { Message, Wrapper } from "./styles";

export default function ToastMessage() {
  const toastShow = useSelector((state) => state.feedbackReducer.toastShow);
  const toastMessage = useSelector(
    (state) => state.feedbackReducer.toastMessage
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("확인");
    if (toastShow) {
      setTimeout(function () {
        dispatch(hideToast());
      }, 2000);
    }
  }, [toastShow]);
  return (
    <>
      <Wrapper toastShow={toastShow}>
        <Message>
          <div>{toastMessage}</div>
        </Message>
      </Wrapper>
    </>
  );
}
