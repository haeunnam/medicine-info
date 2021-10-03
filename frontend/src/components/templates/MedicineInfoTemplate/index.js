import Header from "../../molecules/Header";
import MedicineCard from "../../molecules/MedicineCard";
import CalenderModal from "../../molecules/CalendarModal";
import TabMenu from "../../molecules/TabMenu";
import ReviewItem from "../../molecules/ReviewItem";
import { Icon } from "@iconify/react";
import {
  ReviewsContainer,
  MedicinesContainer,
  MedDetailContainer,
} from "./styles";
import MedicineItem from "../../molecules/MedicineItem";

function MedicineInfoTemplate({
  medicineInfo,
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
    tabContent = (
      <MedDetailContainer>
        <dl>
          <div className="med-detail">
            <dt className="med-detail-title">효능효과</dt>
            <dd className="med-detail-content">{medicineInfo.efficacy}</dd>
          </div>
          <div className="med-detail">
            <dt className="med-detail-title">용법용량</dt>
            <dd className="med-detail-content">
              {medicineInfo.usage ? medicineInfo.usage : ""}
            </dd>
          </div>
          <div className="med-detail">
            <dt className="med-detail-title">이상반응</dt>
            <dd className="med-detail-content">
              {medicineInfo.reaction ? medicineInfo.reaction : "-"}
            </dd>
          </div>
          <div className="med-detail">
            <dt className="med-detail-title">저장방법</dt>
            <dd className="med-detail-content">
              {medicineInfo.storage ? medicineInfo.storage : "-"}
            </dd>
          </div>
        </dl>
      </MedDetailContainer>
    );
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
    tabContent = (
      <MedicinesContainer>
        <MedicineItem />
      </MedicinesContainer>
    );
  }
  return (
    <>
      <Header isBack title="상세 정보" />
      <MedicineCard
        onCalendarClick={onCalendarClick}
        onHeartClick={onHeartClick}
        medicineInfo={medicineInfo}
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
