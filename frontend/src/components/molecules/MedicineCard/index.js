import { Icon } from "@iconify/react";
import { CardDescription, Wrapper } from "./styles";
import CalendarModal from "../CalendarModal";

function MedicineCard({ imgSrc, onCalendarClick, onHeartClick }) {
  return (
    <Wrapper>
      <img
        src={require("../../../assets/images/no-image.jpg").default}
        alt=""
        className="medicine-img"
      />
      <CardDescription>
        <div className="medicine-title">
          <h1 className="medicine-name">타이레놀</h1>
          <div className="medicine-kind">
            <span>해열, 진통, 소염제</span>
            <span>일동제약</span>
          </div>
        </div>
        <div className="icons">
          {/* 상태에 따라 표시 다르게 하기 + 삭제 function 추가 */}
          <Icon
            icon="bi:calendar-plus"
            className="icon"
            onClick={onCalendarClick}
          />
          <Icon icon="bi:suit-heart" className="icon" onClick={onHeartClick} />
        </div>
      </CardDescription>
    </Wrapper>
  );
}

export default MedicineCard;
