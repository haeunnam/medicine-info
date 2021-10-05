import { requestGet } from "../../api";

//액션 타입 만들기
const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
const SET_MEDICINE_INFO = "SET_MEDICINE_INFO";
const SET_SIMILAR_MEDICINES = "SET_SIMILAR_MEDICINES";
const SET_MEDICINE_REVIEWS = "SET_MEDICINE_REVIEWS";

//액션 생성함수 만들기
export const setActiveTab = (activeTab) => {
  return {
    type: SET_ACTIVE_TAB,
    activeTab: activeTab,
  };
};

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

export const setMedicineReviews = (medicineReviewsObj) => {
  return {
    type: SET_MEDICINE_REVIEWS,
    medicineReviewsObj: medicineReviewsObj,
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

export const getMedicineReviews =
  (medicineId, page = 0) =>
  async (dispatch, getState) => {
    const params = {
      page: page,
      size: 5,
    };
    const { result } = await requestGet(
      `/reviews/medicines/${medicineId}`,
      params
    );
    if (page === 0) {
      dispatch(setMedicineReviews(result));
    } else {
      const newMedicineReviews =
        getState().medicineReducer.medicineReviewsObj.concat(result);
      dispatch(setMedicineReviews(newMedicineReviews));
    }
  };

/* 초기 상태 선언 */
const initialState = {
  activeTab: 0,
  medicineObj: "",
  similarMedicinesObj: "",
  medicineReviewsObj: "",
};

// 리듀서
export const medicineReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.activeTab,
      };
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
    case SET_MEDICINE_REVIEWS:
      return {
        ...state,
        medicineReviewsObj: action.medicineReviewsObj,
      };
    default:
      return state;
  }
};
