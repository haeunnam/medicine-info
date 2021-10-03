import { Icon } from "@iconify/react";
import { CardDescription, Wrapper } from "./styles";
import CalendarModal from "../CalendarModal";

function MedicineCard({ medicineInfo, onCalendarClick, onHeartClick }) {
  return (
    <Wrapper>
      <img
        src={require("../../../assets/images/no-image.jpg").default}
        alt=""
        className="medicine-img"
      />
      <CardDescription>
        <div className="medicine-title">
          <h1 className="medicine-name">{medicineInfo.name}</h1>
          <div className="medicine-kind">
            <span>{medicineInfo.category}</span>
            <span>{medicineInfo.company}</span>
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
