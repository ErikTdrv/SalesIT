const initialState = {
  user: null,
  isAuth: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuth: Boolean(action.payload),
      };
    case "LOGOUT_USER":
        return {
            ...state, username: '', isAuth: false
        }
    default:
      return state;
  }
};
