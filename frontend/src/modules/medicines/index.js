import { requestGet, requestDelete } from "../../api";
//액션 타입 만들기
const SET_LIKE_MEDI = "SET_LIKE_MEDI";
const SET_TAKING_MEDI = "SET_TAKING_MEDI";
const SET_DUR_MEDI = "SET_DUR_MEDI";
const SET_DUR_SEARCH_KEYWORD = "SET_DUR_SEARCH_KEYWORD";
const SET_MY_REVIEWS = "SET_MY_REVIEWS";

//액션 생성함수 만들기
export const setLikeMedi = (likeObj) => {
  return {
    type: SET_LIKE_MEDI,
    likeObj : likeObj,
  };
};


export const setTakingMedi = (takingObj) => {
  return {
    type: SET_TAKING_MEDI,
    takingObj: takingObj,
  }
}

export const setDurMedi = (durObj) => {
  return {
    type: SET_DUR_MEDI,
    durObj: durObj,
  }
}

export const setMyReviews = (myReviews) => {
  return {
    type: SET_MY_REVIEWS,
    myReviews : myReviews,
  }
}

export const setDurSearchKeyword = (durSearchKeyword) => {
  return {
    type: SET_DUR_SEARCH_KEYWORD,
    durSearchKeyword: durSearchKeyword,
  };
};

const initialState = {
  likeObj: [],
  takingObj:[],
  durObj:[],
  myReviews : [],
  durSearchKeyword:"",
}

export const addDurMedicines = (data) =>
  async (dispatch, getState) => {
  const newDurMedicine = getState().mediReducer.durObj.concat(data);
  dispatch(setDurMedi(newDurMedicine));
}



/* 초기 상태 선언 */

export const getTakingMedicines = (page = 0) =>
  async (dispatch) => {
    const params = {
      page: page,
      size: 5,
    }
    const response = await requestGet("/my-medicines",params);
    if (response.isSuccess) {
      dispatch(setTakingMedi(response.result));
    }
  };

export const getLikeMedicines = (page = 0) =>
  async (dispatch) => {
    const params = {
      page: page,
      size: 5,
    }
    const response = await requestGet("/like-medicines",params);
    if (response.isSuccess) {
      dispatch(setLikeMedi(response.result));
    }
  };

export const getMyReviews = (page = 0) =>
  async (dispatch) => {
    const params = {
      page: page,
      size: 5,
    }
    const response = await requestGet("/reviews/users",params);
    if (response.isSuccess) {
      dispatch(setMyReviews(response.result));
    }
  };

export const deleteLikeMedi = (id) =>
  async (dispatch) => {

    const response = await requestDelete(`/like-medicines/${id}`);
    if (response.data.isSuccess) {
      dispatch(getLikeMedicines());
    }
  };

export const deleteTakingMedi = (id) =>
  async (dispatch) => {

    const response = await requestDelete(`/my-medicines/${id}`);
    if (response.data.isSuccess) {
      dispatch(getTakingMedicines());
    }
  };


export const deleteMine = (reviewId) =>
  async (dispatch) => {
    const response = await requestDelete(`/reviews/${reviewId}`);
    if (response.data.isSuccess) {
      dispatch(getMyReviews());
    }
  };

export const deleteAll = () =>
  async (dispatch) => {
    const response = await requestDelete("/reviews/all");
    if (response.isSuccess) {
      dispatch(setMyReviews([]));
    }
  };

// 리듀서
export const mediReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKE_MEDI:
      return {
        ...state,
        likeObj: action.likeObj,
      };

    case SET_TAKING_MEDI:
      return {
        ...state,
        takingObj : action.takingObj,
      };
    
    case SET_DUR_MEDI :
      return{
        ...state,
        durObj: action.durObj,
      }
    
    case SET_MY_REVIEWS :
      return{
        ...state,
        myReviews: action.myReviews,
      }
    case SET_DUR_SEARCH_KEYWORD:
      return{
          ...state,
          myReviews: action.myReviews,
      }
    default:
      return state;    
    
  }


};

