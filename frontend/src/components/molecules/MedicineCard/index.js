import { Icon } from "@iconify/react";
import { CardDescription, Wrapper } from "./styles";

function MedicineCard({ medicineInfo, onCalendarClick, onHeartClick }) {
  return (
    // src={require("../../../assets/images/no-image.jpg").default}

    <Wrapper>
      <img
        src={
          medicineInfo.image
            ? medicineInfo.image
            : "https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif"
        }
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
