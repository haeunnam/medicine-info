import { useState } from "react";
import MedicineInfoTemplate from "../../../components/templates/MedicineInfoTemplate";

function MedicineInfo() {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

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

  return (
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
    />
  );
}

export default MedicineInfo;
