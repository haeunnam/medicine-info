const SHOW_TOAST = "SHOW_TOAST";
const HIDE_TOAST = "HIDE_TOAST";

export const showToast = (message = "메시지를 입력하세요") => {
  return {
    type: SHOW_TOAST,
    toast: {
      message,
    },
  };
};

export const hideToast = () => {
  return {
    type: HIDE_TOAST,
  };
};


const INIT_STATE = {
  toastShow: false,
  toastMessage: "토스트 메시지!",
};

export const feedbackReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      if (state.toastShow) {
        return state;
      }
      return {
        ...state,
        toastShow: true,
        toastMessage: action.toast.message,
      };
    case HIDE_TOAST:
      return {
        ...state,
        toastShow: false,
      };

    default:
      return state;
  }
};
