import { Wrapper } from "./styles";
import { Icon } from "@iconify/react";

const MedicineItem = () => {
  return (
    <Wrapper>
      <img
        className="medicine-img"
        src="https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/147426403087300104"
        alt="medicine"
      />
      <div className="content">
        <h2 className="medicine-company">(주)대웅제약</h2>
        <h1 className="medicine-name">타이레놀정500밀리그람</h1>
        <div className="medicine-rating">
          <Icon icon="bx:bxs-star" className="rating-star" />
          <strong className="rating-score">4.2</strong>
        </div>
        <h2 className="medicine-kind">해열, 소염, 진통제</h2>
      </div>
    </Wrapper>
  );
};

export default MedicineItem;
