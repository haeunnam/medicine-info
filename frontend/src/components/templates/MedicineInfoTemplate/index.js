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
  Wrapper,
} from "./styles";
import MedicineItem from "../../molecules/MedicineItem";
import { useHistory } from "react-router";

function MedicineInfoTemplate({
  medicineInfo,
  similarMedicines,
  medicineReviews,
  onTabClick,
  activeTab,
  onCalendarClick,
  isModalActive,
  onModalOutsideClick,
  setSelectedDate,
  selectedDate,
  handleMyMedicine,
  onHeartClick,
  handleInfiniteScroll,
  reviewDelete,
  reviewUpdate,
  onMedicineClick,
}) {
  const listHeight = window.innerHeight - 450;
  const history = useHistory();
  let tabContent;
  if (activeTab === 0) {
    tabContent = (
      <MedDetailContainer height={listHeight}>
        <dl>
          <div className="med-detail">
            <dt className="med-detail-title">효능효과</dt>
            <dd className="med-detail-content">{medicineInfo.efficacy}</dd>
          </div>
          <div className="med-detail">
            <dt className="med-detail-title">용법용량</dt>
            <dd className="med-detail-content">
              {medicineInfo.usage ? medicineInfo.usage : "-"}
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
      <ReviewsContainer height={listHeight} onScroll={handleInfiniteScroll}>
        <div className="total-rating">총 평점</div>
        <div className="header">
          <div className="rating-score">
            <Icon className="icon-star" icon="el:star-alt" />
            <span className="rating-num">{medicineInfo.avgScore}</span>/ 5
          </div>
          <Icon
            className="icon-write"
            icon="ion:create"
            onClick={() =>
              history.push({
                pathname: `${medicineInfo.id}/review`,
                state: { medicineInfo, operation: "create" },
              })
            }
          />
        </div>
        {medicineReviews?.map((review, idx) => (
          <ReviewItem
            review={review}
            key={idx}
            reviewDelete={reviewDelete}
            reviewUpdate={reviewUpdate}
          />
        ))}
      </ReviewsContainer>
    );
  } else {
    tabContent = (
      <MedicinesContainer height={listHeight} onScroll={handleInfiniteScroll}>
        {similarMedicines?.map((medicine, idx) => (
          <MedicineItem
            medicine={medicine}
            key={idx}
            onMedicineClick={onMedicineClick}
          />
        ))}
      </MedicinesContainer>
    );
  }
  return (
    <>
      <Header isBack title="상세 정보" />
      <Wrapper>
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
        {isModalActive && (
          <CalenderModal
            onModalOutsideClick={onModalOutsideClick}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
            handleMyMedicine={handleMyMedicine}
            isMyMedicine={medicineInfo.myMedicine}
          />
        )}
        {tabContent}
      </Wrapper>
    </>
  );
}

export default MedicineInfoTemplate;
