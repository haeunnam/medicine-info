//액션 타입 만들기
const SET_USER_ID = "SET_USER_ID";
const SET_USER_INFO = "SET_USER_INFO";

//액션 생성함수 만들기
export const setUserId = (userId) => {
  return {
    type: SET_USER_ID,
    userId: userId,
  };
};


export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    userInfo: userInfo,
  }
}

/* 초기 상태 선언 */
const initialState = {
  userId: "",
  userInfo:null,
}

// 리듀서
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        id: action.userId,
      };

    case SET_USER_INFO:
      return {
        ...state,
        userInfo:{
          nickname:action.userInfo.nickname,
          birth: action.userInfo.birth,
          gender : action.userInfo.gender,
          email : action.userInfo.email,
        },
      };
    default:
      return state;
  }
};
