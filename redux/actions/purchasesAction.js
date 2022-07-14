import {
  getApprove,
  getDataApprove,
  putDataApprove,
} from "../../utils/fetchApi";

export const PURCHASES = {
  GETPURCHASES: "GETPURCHASES",
  DETAILPURCHASES: "DETAILPURCHASES",
};

export const getPurchases = (token, trang_thai) => async (dispatch) => {
  try {
    const res = await getApprove(
      `approve`,
      token,
      "truong.nguyen@fostech.vn",
      trang_thai
    );

    const arrayData = [];
    res.data.map(async (item) => {
      let res2 = await getDataApprove(`dnm`, token, item.id_ct);
      //   console.log(res2.data.trang_thai);

      if (
        res2.data.trang_thai === trang_thai &&
        item.trang_thai === trang_thai
      ) {
        arrayData.push(item);
        dispatch({ type: PURCHASES.GETPURCHASES, payload: arrayData });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const dePurchases = (id, data) => async (dispatch) => {
  try {
    dispatch({
      type: PURCHASES.DETAILPURCHASES,
      payload: data.getPurchases.filter((item) => item._id === id),
    });
  } catch (error) {
    console.log(error);
  }
};

export const approveRequest = (id, token, status) => async (dispatch) => {
  try {
    const res = await putDataApprove(`dnm`, token, id, { trang_thai: status });
  } catch (error) {
    console.log(error);
  }
};
