import Button from "../../atoms/Button";
import InputDate from "../../atoms/InputDate";
import { Wrapper } from "./styles";

const CalenderModal = ({
  onModalOutsideClick,
  selectedDate,
  setSelectedDate,
  handleMyMedicine,
  isMyMedicine,
}) => {
  return (
    <Wrapper>
      <div className="modal-overlay" onClick={onModalOutsideClick}>
        <div className="modal-window">
          {!isMyMedicine ? (
            <>
              <header>
                <h1 className="title">복용 시작일 설정</h1>
              </header>
              <div className="calendar">
                <InputDate
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              </div>
              <footer className="footer-btn">
                <Button children="설정 완료" onClick={handleMyMedicine} />
              </footer>
            </>
          ) : (
            <>
              <h1 className="title">복용을 그만두시겠습니까?</h1>
              <Button children="확인" size="small" onClick={handleMyMedicine} />
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default CalenderModal;
