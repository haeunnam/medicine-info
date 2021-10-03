import Header from "../../molecules/Header";
import MedicineCard from "../../molecules/MedicineCard";
import CalenderModal from "../../molecules/CalendarModal";
import TabMenu from "../../molecules/TabMenu";
import ReviewItem from "../../molecules/ReviewItem";
import { Icon } from "@iconify/react";
import { ReviewsContainer } from "./styles";

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
    tabContent = (
      <ReviewsContainer>
        <div className="total-rating">총 평점</div>
        <div className="header">
          <div className="rating-score">
            <Icon className="icon-star" icon="el:star-alt" />
            <span className="rating-num">4.0 </span>/ 5
          </div>
          <Icon className="icon-write" icon="ion:create" />
        </div>
        <ReviewItem />
      </ReviewsContainer>
    );
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
