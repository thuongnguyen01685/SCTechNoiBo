import { getNo } from "../../utils/fetchApi";

export const NOTIFY = {
  GETNOTIFY: "GETNOTIFY",
};

export const getNotify = (token) => async (dispatch) => {
  try {
    const res = await getNo(token);

    dispatch({ type: NOTIFY.GETNOTIFY, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
