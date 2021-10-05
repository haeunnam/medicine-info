//액션 타입 만들기
const SET_LIKE_MEDI = "SET_LIKE_MEDI";
const SET_TAKING_MEDI = "SET_TAKING_MEDI";
const SET_DUR_MEDI = "SET_DUR_MEDI";

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

/* 초기 상태 선언 */
const initialState = {
  likeObj: [],
  takingObj:[],
  selectDur:[],
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
    
    case SET_DUR_MEDI:
      return {
        ...state,
        selectDur : state.selectDur.push([action.durObj]),
      };
    default:
      return state;
  }


};
