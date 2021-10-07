import { Icon } from "@iconify/react";
import { CardDescription, Wrapper } from "./styles";

function MedicineCard({ medicineInfo, onCalendarClick, onHeartClick }) {
  const DEFAULT_IMAGE = "/img/no-image.png"

  return (

    <Wrapper>
      <img
        src={
          medicineInfo.image
            ? medicineInfo.image
            : DEFAULT_IMAGE
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
          {medicineInfo.myMedicine ? (
            <Icon
              icon="bi:calendar-minus"
              className="icon"
              onClick={onCalendarClick}
            />
          ) : (
            <Icon
              icon="bi:calendar-plus"
              className="icon"
              onClick={onCalendarClick}
            />
          )}
          {medicineInfo.likeMedicine ? (
            <Icon
              icon="bi:suit-heart-fill"
              className="icon"
              onClick={onHeartClick}
            />
          ) : (
            <Icon
              icon="bi:suit-heart"
              className="icon"
              onClick={onHeartClick}
            />
          )}
        </div>
      </CardDescription>
    </Wrapper>
  );
}

export default MedicineCard;
