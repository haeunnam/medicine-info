import Button from "../../atoms/Button";
import { Wrapper } from "./styles";
import TakingSelect from "../TakingSelect";
import { useState } from "react";
import { useSelector } from "react-redux";

const BucketModal = ({
  onModalOutsideClick,
  handleSelect,
}) => {
  const TakingMedicines  = useSelector(state => state.mediReducer.takingObj);

  return (
    <Wrapper>
      <div className="modal-overlay" onClick={onModalOutsideClick}>
        <div className="modal-window">
          <header>
            <h1 className="title">복용중인 약 선택하기</h1>
          </header>
          <div className="medicine-box">
            {TakingMedicines.map((takingmedi) => (     
              <TakingSelect medicine={takingmedi} key={takingmedi.id}/>
            ))}
          </div>
          <footer className="footer-btn">
            <Button children="선택 완료" size="small" onClick={handleSelect}/>
          </footer>
        </div>
      </div>
    </Wrapper>
  );
};

export default BucketModal;
