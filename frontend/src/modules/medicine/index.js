import { requestGet } from "../../api";

//액션 타입 만들기
const SET_MEDICINE_INFO = "SET_MEDICINE_INFO";
const SET_SIMILAR_MEDICINES = "SET_SIMILAR_MEDICINES";

//액션 생성함수 만들기
export const setMedicineInfo = (medicineObj) => {
  return {
    type: SET_MEDICINE_INFO,
    medicineObj: medicineObj,
  };
};

export const setSimilarMedicines = (similarMedicinesObj) => {
  return {
    type: SET_SIMILAR_MEDICINES,
    similarMedicinesObj: similarMedicinesObj,
  };
};

// api 요청
export const getMedicineInfo = (medicineId) => async (dispatch) => {
  const response = await requestGet(`/medicines/${medicineId}`);
  dispatch(setMedicineInfo(response.result));
};

export const getSimliarMedicines =
  (medicineId, page = 0) =>
  async (dispatch, getState) => {
    const params = {
      page: page,
      size: 5,
    };
    const { result } = await requestGet(
      `/medicines/similar/${medicineId}`,
      params
    );
    if (page === 0) {
      dispatch(setSimilarMedicines(result));
    } else {
      const newSimilarMedicines =
        getState().medicineReducer.similarMedicinesObj.concat(result);
      dispatch(setSimilarMedicines(newSimilarMedicines));
    }
  };

/* 초기 상태 선언 */
const initialState = {
  medicineObj: "",
  similarMedicinesObj: "",
};

// 리듀서
export const medicineReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEDICINE_INFO:
      return {
        ...state,
        medicineObj: action.medicineObj,
      };
    case SET_SIMILAR_MEDICINES:
      return {
        ...state,
        similarMedicinesObj: action.similarMedicinesObj,
      };
    default:
      return state;
  }
};
