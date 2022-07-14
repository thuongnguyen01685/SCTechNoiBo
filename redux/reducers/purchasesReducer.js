import { PURCHASES } from "../actions/purchasesAction";

const initialState = {
  getPurchases: [],
  dePurchases: [],
};

const purchasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASES.GETPURCHASES:
      return {
        ...state,
        getPurchases: action.payload,
      };
    case PURCHASES.DETAILPURCHASES:
      return {
        ...state,
        dePurchases: action.payload,
      };
    default:
      return state;
  }
};

export default purchasesReducer;
