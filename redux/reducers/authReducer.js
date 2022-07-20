import { PROFILE_TYPES } from "../actions/authAction";
import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  token: null,
  err: "Error",
  id_app: null,
  profile: [],
  alert: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.AUTH:
      return {
        ...state,
        token: action.payload,
        alert: "",
      };
    case GLOBALTYPES.ALERT: {
      return {
        alert: action.payload,
      };
    }
    case GLOBALTYPES.ID_APP:
      return {
        ...state,
        id_app: action.payload._id,
      };
    case PROFILE_TYPES.GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    // case PROFILE_TYPES.SIGNUP_SUCCESS:
    //   return {
    //     ...state,
    //     alert: action.payload,
    //   };
    default:
      return state;
  }
};
export default authReducer;
