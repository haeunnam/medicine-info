import Header from "../../molecules/Header";
import MedicineCard from "../../molecules/MedicineCard";
import CalenderModal from "../../molecules/CalendarModal";
import TabMenu from "../../molecules/TabMenu";

function MedicineInfoTemplate({
  onTabClick,
  activeTab,
  onCalendarClick,
  isModalActive,
  onModalOutsideClick,
  setSelectedDate,
  selectedDate,
  onSetStartDateClick,
  onHeartClick,
}) {
  let tabContent;
  if (activeTab === 0) {
    tabContent = <div>약상세정보</div>;
  } else if (activeTab === 1) {
    tabContent = <div>리뷰</div>;
  } else {
    tabContent = <div>유사약</div>;
  }
  return (
    <>
      <Header isBack title="상세 정보" />
      <MedicineCard
        onCalendarClick={onCalendarClick}
        onHeartClick={onHeartClick}
      />
      <TabMenu
        tabNames={["약 정보", "리뷰", "유사약"]}
        onTabClick={onTabClick}
        activeTab={activeTab}
      />
      <CalenderModal
        isModalActive={isModalActive}
        onModalOutsideClick={onModalOutsideClick}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        onSetStartDateClick={onSetStartDateClick}
      />
      {tabContent}
    </>
  );
}

export default MedicineInfoTemplate;
