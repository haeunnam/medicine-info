import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { request, requestDelete } from "../../../api";
import MedicineInfoTemplate from "../../../components/templates/MedicineInfoTemplate";
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

  const activeTab = useSelector((state) => state.medicineReducer.activeTab);
  const medicineInfo = useSelector(
    (state) => state.medicineReducer.medicineObj
  );
  const medicineReviews = useSelector(
    (state) => state.medicineReducer.medicineReviewsObj
  );
  const similarMedicines = useSelector(
    (state) => state.medicineReducer.similarMedicinesObj
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
      const res = await request("post", "/my-medicines", {
        dateTime: selectedDate,
        medicineId,
      });
      dispatch(getMedicineInfo(medicineId));
      console.log(res);
    } else {
      const res = await requestDelete(
        `/my-medicines/${medicineInfo.myMedicine}`
      );
      dispatch(getMedicineInfo(medicineId));
      console.log(res);
      alert("약바구니에서 삭제되었습니다..");
    }

    modalToggle();
  }

  async function onHeartClick() {
    if (!medicineInfo.likeMedicine) {
      await request("post", "/like-medicines", { medicineId });
      dispatch(getMedicineInfo(medicineId));
      alert("약바구니에 추가되었습니다.");
    } else {
      await requestDelete(`/like-medicines/${medicineInfo.likeMedicine}`);
      dispatch(getMedicineInfo(medicineId));
      alert("약바구니에서 삭제되었습니다..");
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
      if (medicineReviews && medicineReviews.length % 5 !== 0) return;
      const page = parseInt(medicineReviews.length / 5);
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
        />
      ) : (
        ""
      )}
    </>
  );
}

export default MedicineInfo;