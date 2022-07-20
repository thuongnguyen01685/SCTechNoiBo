import getLogin, { getDataAPI, putDataAPI, signUp } from "../../utils/fetchApi";
import { GLOBALTYPES } from "./globalTypes";
import { Buffer } from "buffer";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const PROFILE_TYPES = {
  GET_PROFILE: "GET_PROFILE",
  UPDATE_PROFILE: "UPDATE_PROFILE",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
};

export const login = (username, password) => {
  var credentials = Buffer.from(username + ":" + password).toString("base64");
  var basicAuth = "Basic " + credentials;

  const add = async (dispatch) => {
    try {
      const res = await getLogin(`auth/local`, "GET", "", {
        Authorization: basicAuth,
      });

      if (res.data) {
        const jsonToken = res.data.token;
        await AsyncStorage.setItem("@token_key", jsonToken);

        dispatch({
          type: GLOBALTYPES.AUTH,
          payload: jsonToken,
        });

        const id_app = await getDataAPI("app", jsonToken);

        dispatch({
          type: GLOBALTYPES.ID_APP,
          payload: id_app.data[0],
        });

        //get properties in profile
        const profile = await getDataAPI("profile", jsonToken);
        dispatch({
          type: PROFILE_TYPES.GET_PROFILE,
          payload: profile.data,
        });
      } else {
        dispatch({ type: GLOBALTYPES.ALERT, payload: res.message });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return add;
};

export const getInfo = (token) => async (dispatch) => {
  try {
    //get id_app from company

    const id_app = await getDataAPI("app", token);

    dispatch({
      type: GLOBALTYPES.ID_APP,
      payload: id_app.data[0],
    });

    //get properties in profile
    const profile = await getDataAPI("profile", token);
    dispatch({
      type: PROFILE_TYPES.GET_PROFILE,
      payload: profile.data,
    });
  } catch (error) {
    console.log(error);
  }
};
