import Button from "../../atoms/Button";
import InputDate from "../../atoms/InputDate";
import { Wrapper } from "./styles";

const CalenderModal = ({
  isModalActive,
  onModalOutsideClick,
  selectedDate,
  setSelectedDate,
  onSetStartDateClick,
}) => {
  return (
    <Wrapper>
      {isModalActive ? (
        <div className="modal-overlay" onClick={onModalOutsideClick}>
          <div className="modal-window">
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
              <Button children="설정 완료" onClick={onSetStartDateClick} />
            </footer>
          </div>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default CalenderModal;
