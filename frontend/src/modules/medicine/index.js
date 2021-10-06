import { requestGet } from "../../api";

//액션 타입 만들기
const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
const SET_MEDICINE_INFO = "SET_MEDICINE_INFO";
const SET_SIMILAR_MEDICINES = "SET_SIMILAR_MEDICINES";
const SET_MEDICINE_REVIEWS = "SET_MEDICINE_REVIEWS";
const SET_SEARCH_MEDICINES = "SET_SEARCH_MEDICINES";
const DO_NOT_REFRESH = "DO_NOT_REFRESH";
const DO_REFRESH = "DO_REFRESH";
const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";

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

export const setSimilarMedicines = (similarMedicines) => {
  return {
    type: SET_SIMILAR_MEDICINES,
    similarMedicines: similarMedicines,
  };
};

export const setMedicineReviews = (medicineReviews) => {
  return {
    type: SET_MEDICINE_REVIEWS,
    medicineReviews: medicineReviews,
  };
};

export const setSearchMedicines = (searchMedicines) => {
  return {
    type: SET_SEARCH_MEDICINES,
    searchMedicines: searchMedicines,
  };
};

export const doNotRefresh = () => {
  return {
    type: DO_NOT_REFRESH,
  };
};

export const doRefresh = () => {
  return {
    type: DO_REFRESH,
  };
};

export const setSearchKeyword = (searchKeyword) => {
  return {
    type: SET_SEARCH_KEYWORD,
    searchKeyword: searchKeyword,
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
        getState().medicineReducer.similarMedicines.concat(result);
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
        getState().medicineReducer.medicineReviews.concat(result);
      dispatch(setMedicineReviews(newMedicineReviews));
    }
  };

export const getSearchMedicines =
  (name, page = 0) =>
  async (dispatch, getState) => {
    const params = {
      page: page,
      size: 10,
      name: name,
    };
    const { result } = await requestGet(`/medicines`, params);
    if (page === 0) {
      dispatch(setSearchMedicines(result));
    } else {
      const newSearchMedicines =
        getState().medicineReducer.searchMedicines.concat(result);
      dispatch(setSearchMedicines(newSearchMedicines));
    }
  };

/* 초기 상태 선언 */
const initialState = {
  activeTab: 0,
  medicineObj: {},
  similarMedicines: [],
  medicineReviews: [],
  searchMedicines: [],
  needRefresh: true,
  searchKeyword: "",
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
        similarMedicines: action.similarMedicines,
      };
    case SET_MEDICINE_REVIEWS:
      return {
        ...state,
        medicineReviews: action.medicineReviews,
      };
    case SET_SEARCH_MEDICINES:
      return {
        ...state,
        searchMedicines: action.searchMedicines,
      };
    case DO_NOT_REFRESH:
      return {
        ...state,
        needRefresh: false,
      };
    case DO_REFRESH:
      return {
        initialState,
      };
    case SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.searchKeyword,
      };
    default:
      return state;
  }
};
