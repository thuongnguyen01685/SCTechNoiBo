import {
  getApprove,
  getDataApprove,
  getPayment,
  putDataApprove,
} from "../../utils/fetchApi";

export const PAYMENT = {
  GETPAYMENT: "GETPAYMENT",
  DETAILPAYMENT: "DETAILPAYMENT",
};

export const getPaymentOrder = (token, trang_thai) => async (dispatch) => {
  try {
    const res = await getApprove(
      `approve`,
      token,
      "tram.hoang@fostech.vn",
      trang_thai,
      "PC0"
    );

    const arrayData = [];
    res.data.map(async (item) => {
      let res2 = await getDataApprove(`pc0`, token, item.id_ct);
      //   console.log(res2.data.trang_thai);

      if (
        res2.data.trang_thai === trang_thai &&
        item.trang_thai === trang_thai
      ) {
        arrayData.push(item);
        dispatch({ type: PAYMENT.GETPAYMENT, payload: arrayData });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const dePaymentOrder = (id, token) => async (dispatch) => {
  try {
    const res = await getDataApprove(`pc0`, token, id);

    dispatch({
      type: PAYMENT.DETAILPAYMENT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
