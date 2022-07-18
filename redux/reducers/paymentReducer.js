import { PAYMENT } from "../actions/paymentAction";

const initialState = {
  getPayment: [],
  dePayment: [],
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT.GETPAYMENT:
      return {
        ...state,
        getPayment: action.payload,
      };
    case PAYMENT.DETAILPAYMENT:
      return {
        ...state,
        dePayment: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
