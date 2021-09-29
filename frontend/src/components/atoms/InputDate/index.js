import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import { getYear, getMonth } from "date-fns";
import range from "lodash/range";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

require("react-datepicker/dist/react-datepicker.css");
registerLocale("ko", ko);

function inputDate({ selectedDate, setSelectedDate }) {
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  return (
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IoIosArrowBack
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          ></IoIosArrowBack>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <IoIosArrowForward
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          />
        </div>
      )}
      locale="ko"
      dateFormat="yyyy-MM-dd"
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      adjustDateOnChange
      maxDate={new Date()}
      placeholderText="yyyy-mm-dd"
    />
  );
}

export default inputDate;
