import {
  getApprove,
  getDataApprove,
  getPayment,
  putDataApprove,
} from "../../utils/fetchApi";

export const ADVANCES = {
  GETADVANCES: "GETADVANCES",
  DETAILADVANCES: "DETAILADVANCES",
};

export const getAdvances = (token, trang_thai) => async (dispatch) => {
  try {
    const res = await getApprove(
      `approve`,
      token,
      "truong.nguyen@fostech.vn",
      trang_thai,
      "PC3"
    );

    const arrayData = [];
    res.data.map(async (item) => {
      let res2 = await getDataApprove(`pc3`, token, item.id_ct);
      //   console.log(res2.data.trang_thai);

      if (
        res2.data.trang_thai === trang_thai &&
        item.trang_thai === trang_thai
      ) {
        arrayData.push(item);
        dispatch({ type: ADVANCES.GETADVANCES, payload: arrayData });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const deAdvances = (id, token) => async (dispatch) => {
  try {
    const res = await getDataApprove(`pc3`, token, id);

    dispatch({
      type: ADVANCES.DETAILADVANCES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
