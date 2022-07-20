import { ADVANCES } from "../actions/advancesAction";

const initialState = {
  getAdvances: [],
  deAdvances: [],
};

const approvedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADVANCES.GETADVANCES:
      return {
        ...state,
        getAdvances: action.payload,
      };
    case ADVANCES.DETAILADVANCES:
      return {
        ...state,
        deAdvances: action.payload,
      };
    default:
      return state;
  }
};

export default approvedReducer;
