import {
  getApprove,
  getDataApprove,
  getDataApproved,
} from "../../utils/fetchApi";

export const APPROVED = {
  GETAPPROVED: "GETAPPROVED",
  DETAILAPPROVED: "DETAILAPPROVED",
};

export const getApproved = (token, trang_thai) => async (dispatch) => {
  try {
    const res = await getDataApproved(`dnm`, token, trang_thai);
    dispatch({ type: APPROVED.GETAPPROVED, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const deApproved = (id, token) => async (dispatch) => {
  try {
    const res = await getDataApprove(`dnm`, token, id);

    dispatch({
      type: APPROVED.DETAILAPPROVED,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
