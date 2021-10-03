import { requestGet } from "../../api";

//액션 타입 만들기
const SET_MEDICINE_INFO = "SET_MEDICINE_INFO";

//액션 생성함수 만들기
export const setMedicineInfo = (medicineObj) => {
  return {
    type: SET_MEDICINE_INFO,
    medicineObj: medicineObj,
  };
};

export const getMedicineInfo = (medicineId) => async (dispatch) => {
  const response = await requestGet(`/medicines/${medicineId}`);
  dispatch(setMedicineInfo(response.result));
};

/* 초기 상태 선언 */
const initialState = {
  medicineObj: "",
};

// 리듀서
export const medicineReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEDICINE_INFO:
      return {
        ...state,
        medicineObj: action.medicineObj,
      };
    default:
      return state;
  }
};
