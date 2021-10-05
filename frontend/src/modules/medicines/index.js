//액션 타입 만들기
const SET_LIKE_MEDI = "SET_LIKE_MEDI";
const SET_TAKING_MEDI = "SET_TAKING_MEDI";
const DELETE_LIKE_MEDI = "DELETE_LIKE_MEDI";
const DELETE_TAKING_MEDI = "DELETE_TAKING_MEDI";

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

export const deletelike = (mediid) => {
  return{
    type: DELETE_LIKE_MEDI,
    mediid: mediid,
  }
}

export const deletetaking = (tid) => {
  return{
    type: DELETE_TAKING_MEDI,
    tid: tid,
  }
}
/* 초기 상태 선언 */
const initialState = {
  likeObj: [],
  takingObj:[],
}

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

    case DELETE_LIKE_MEDI:
      return state.map((likeObj) => likeObj.id !== action.mediid);

    case DELETE_TAKING_MEDI:
      return state.map((takingObj) => takingObj.id !== action.tid);

    default:
      return state;
  }


};
