import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MedicineInfoTemplate from "../../../components/templates/MedicineInfoTemplate";
import {
  getMedicineInfo,
  getSimliarMedicines,
} from "../../../modules/medicine";

function MedicineInfo({ match }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const medicineId = match.params.id;
  const dispatch = useDispatch();
  const medicineInfo = useSelector(
    (state) => state.medicineReducer.medicineObj
  );
  const similarMedicines = useSelector(
    (state) => state.medicineReducer.similarMedicinesObj
  );

  useEffect(() => {
    dispatch(getMedicineInfo(medicineId));
    dispatch(getSimliarMedicines(medicineId));
  }, [match.params.id]);

  function onTabClick(key) {
    setActiveTab(key);
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

  function onSetStartDateClick() {
    //복용 생성 api 요청
    //복용 삭제 api 요청
    // 디스패치로 요청

    modalToggle();
  }

  function onHeartClick() {
    //약바구니 생성 api 요청
    //약바구니 삭제 api 요청
    // 디스패치로 요청
  }

  async function handleInfiniteScroll(e) {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (parseInt(scrollTop) + parseInt(clientHeight) !== parseInt(scrollHeight))
      return;

    if (activeTab === 2) {
      if (similarMedicines && similarMedicines.length % 5 !== 0) return;
      const page = parseInt(similarMedicines.length / 5);
      await dispatch(getSimliarMedicines(medicineId, page));
    }
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
          onSetStartDateClick={onSetStartDateClick}
          onHeartClick={onHeartClick}
          medicineInfo={medicineInfo}
          similarMedicines={similarMedicines}
          handleInfiniteScroll={handleInfiniteScroll}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default MedicineInfo;
