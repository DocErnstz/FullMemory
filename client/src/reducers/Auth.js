

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    //set profile data on localStorage
    case "AUTH":
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    //clear profile data on localStorage
    case "LOGOUT":
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;