import { APPROVED } from "../actions/approvedAction";

const initialState = {
  getApproved: [],
  deApproved: [],
};

const approvedReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPROVED.GETAPPROVED:
      return {
        ...state,
        getApproved: action.payload,
      };
    case APPROVED.DETAILAPPROVED:
      return {
        ...state,
        deApproved: action.payload,
      };
    default:
      return state;
  }
};

export default approvedReducer;
