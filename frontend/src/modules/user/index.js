//액션 타입 만들기
const SET_USER_ID = "SET_USER_ID";

//액션 생성함수 만들기
export const setUserId = (userId) => {
  return {
    type: SET_USER_ID,
    userId: userId,
  };
};

/* 초기 상태 선언 */
const initialState = {
  userId: "",
};

// 리듀서
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        id: action.userId,
      };
    default:
      return state;
  }
};
