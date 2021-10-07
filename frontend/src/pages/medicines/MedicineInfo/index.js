import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { request, requestDelete } from "../../../api";
import MedicineInfoTemplate from "../../../components/templates/MedicineInfoTemplate";
import { showToast } from "../../../modules/feedback";
import {
  getMedicineInfo,
  getSimliarMedicines,
  getMedicineReviews,
  setActiveTab,
} from "../../../modules/medicine";

function MedicineInfo({ match }) {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const medicineId = match.params.id;
  const dispatch = useDispatch();
  const history = useHistory();

  const activeTab = useSelector((state) =>
    state.medicineReducer.activeTab ? state.medicineReducer.activeTab : 0
  );
  const medicineInfo = useSelector(
    (state) => state.medicineReducer.medicineObj
  );
  const medicineReviews = useSelector(
    (state) => state.medicineReducer.medicineReviews
  );
  const similarMedicines = useSelector(
    (state) => state.medicineReducer.similarMedicines
  );
  useEffect(() => {
    dispatch(getMedicineInfo(medicineId));
    dispatch(getMedicineReviews(medicineId));
    dispatch(getSimliarMedicines(medicineId));
  }, [match.params.id]);

  function onTabClick(key) {
    dispatch(setActiveTab(key));
  }

  function modalToggle() {
    setIsModalActive((prev) => !prev);
  }

  function onCalendarClick() {
    modalToggle();
  }

  function onModalOutsideClick(e) {
    if (e.target.classList.contains("modal-overlay")) {
      modalToggle();
    }
  }

  async function handleMyMedicine() {
    if (!medicineInfo.myMedicine) {
      await request("post", "/my-medicines", {
        dateTime: selectedDate,
        medicineId,
      });
      dispatch(getMedicineInfo(medicineId));
      dispatch(showToast("복용중인 약으로 등록되었습니다."));

    } else {
      await requestDelete(`/my-medicines/${medicineInfo.myMedicine}`);
      dispatch(getMedicineInfo(medicineId));
      dispatch(showToast("복용중인 약에서 삭제되었습니다."));
    }
    modalToggle();
  }

  async function onHeartClick() {
    if (!medicineInfo.likeMedicine) {
      await request("post", "/like-medicines", { medicineId });
      dispatch(getMedicineInfo(medicineId));
      dispatch(showToast("약바구니에 추가되었습니다."));
    } else {
      await requestDelete(`/like-medicines/${medicineInfo.likeMedicine}`);
      dispatch(getMedicineInfo(medicineId));
      dispatch(showToast("약바구니에 삭제되었습니다."));
    }
  }

  async function handleInfiniteScroll(e) {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (parseInt(scrollTop) + parseInt(clientHeight) !== parseInt(scrollHeight))
      return;

    if (activeTab === 2) {
      if (similarMedicines && similarMedicines.length % 5 !== 0) return;
      const page = parseInt(similarMedicines.length / 5);
      await dispatch(getSimliarMedicines(medicineId, page));
    } else if (activeTab === 1) {
      if (medicineReviews && medicineReviews.length % 10 !== 0) return;
      const page = parseInt(medicineReviews.length / 10);
      await dispatch(getMedicineReviews(medicineId, page));
    }
  }

  async function reviewDelete(reviewId) {
    await requestDelete(`/reviews/${reviewId}`);
    dispatch(getMedicineReviews(medicineId));
  }

  async function reviewUpdate(review) {
    history.push({
      pathname: `${medicineInfo.id}/review`,
      state: { medicineInfo, review, operation: "update" },
    });
  }

  function onMedicineClick(medicineId) {
    history.push(`/medicines/${medicineId}`);
  }

  return (
    <>
      {medicineInfo ? (
        <MedicineInfoTemplate
          onTabClick={onTabClick}
          activeTab={activeTab}
          onCalendarClick={onCalendarClick}
          onModalOutsideClick={onModalOutsideClick}
          isModalActive={isModalActive}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          handleMyMedicine={handleMyMedicine}
          onHeartClick={onHeartClick}
          medicineInfo={medicineInfo}
          similarMedicines={similarMedicines}
          handleInfiniteScroll={handleInfiniteScroll}
          medicineReviews={medicineReviews}
          reviewDelete={reviewDelete}
          reviewUpdate={reviewUpdate}
          onMedicineClick={onMedicineClick}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default MedicineInfo;
