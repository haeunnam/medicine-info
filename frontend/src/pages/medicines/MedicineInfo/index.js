import { useEffect, useState } from "react";
import MedicineInfoTemplate from "../../../components/templates/MedicineInfoTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getMedicineInfo } from "../../../modules/medicine";

function MedicineInfo({ match }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const medicineId = match.params.id;
  const dispatch = useDispatch();
  const medicineInfo = useSelector(
    (state) => state.medicineReducer.medicineObj
  );

  useEffect(() => {
    dispatch(getMedicineInfo(medicineId));
  }, []);

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
      medicineInfo={medicineInfo}
    />
  );
}

export default MedicineInfo;
