export const URL = `https://api.fostech.vn`;
import axios from "axios";

export default function getLogin(endpoint, method = "GET", data, headers) {
  return axios({
    method,
    url: `${URL}/${endpoint}`,
    data,
    headers,
  }).catch((error) => {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
    console.log(error.config);
  });
}

export const signUp = async (url, user) => {
  const res = await axios.post(`${URL}/${url}`, user);
  return res;
};

export const getData = async (url, token) => {
  const res = await axios.get(
    `${URL}/api/60939744ac969b4078488026/${url}?access_token=${token}`
  );

  return res;
};

export const getItem = async (url, _id) => {
  const res = await axios.get(
    `${URL}/api/60939744ac969b4078488026/${url}/${_id}?access_token=flex.public.token`
  );

  return res;
};

export const getNo = async (token) => {
  const res = await axios.get(
    `${URL}/api/notification?id_app=60939744ac969b4078488026&access_token=${token}`
  );
  return res;
};

//denghithanhtoan pc0

export const getPayment = async (url, token, trang_thai) => {
  const res = await axios.get(
    `${URL}/api/60939744ac969b4078488026/${url}?access_token=${token}&q={"ma_ct":"PC0","trang_thai":"${trang_thai}"}`
  );
  return res;
};

//duyetdenghimuahang // approve
export const getApprove = async (url, token, email, trang_thai, ma_ct) => {
  const res = await axios.get(
    `${URL}/api/60939744ac969b4078488026/${url}?access_token=${token}&q={"user_approves.email":"${email}","ma_ct":"${ma_ct}","trang_thai":"${trang_thai}"}`
  );
  return res;
};

//getdenghimua //dnm
export const getDataApprove = async (url, token, id_ct) => {
  const res = await axios.get(
    `${URL}/api/60939744ac969b4078488026/${url}/${id_ct}?access_token=${token}`
  );

  return res;
};
//put data dnm
export const putDataApprove = async (url, token, id_ct, status) => {
  const res = await axios.put(
    `${URL}/api/60939744ac969b4078488026/${url}/${id_ct}?access_token=${token}`,
    status
  );

  return res;
};

//getApproved
export const getDataApproved = async (url, token, trang_thai) => {
  const res = await axios.get(
    `${URL}/api/60939744ac969b4078488026/${url}?access_token=${token}&q={"trang_thai":"${trang_thai}"}`
  );

  return res;
};

//get profile
export const getDataAPI = async (url, token) => {
  const res = await axios.get(`${URL}/api/${url}?access_token=${token}`);
  return res;
};
//https://api.fostech.vn/api/profile?access_token=e8ba858476afc6a0f6c1d3d686e275a8

export const postDataAPI = async (url, post, id_app, token) => {
  const res = await axios.post(
    `${URL}/api/${id_app}/${url}?access_token=${token}`,
    post
  );
  return res;
};
export const deleteDataAPI = async (url, _id, id_app, token) => {
  const res = await axios.delete(
    `${URL}/api/${id_app}/${url}/${_id}?access_token=${token}`
  );
  return res;
};

export const getAllDataAPI = async (url, id_app, token) => {
  const res = await axios.get(
    `${URL}/api/${id_app}/${url}?access_token=${token}`
  );
  return res;
};

//sever_url + /api/updateprofile?access_token=
//https://api.fostech.vn/api/{id_app}/{api_code}/{_id}?access_token={token}

export const putDataAPI = async (id_app, url, _id, token, user) => {
  const res = await axios.put(
    `${URL}/api/${id_app}/${url}/${_id}?access_token=${token}`,
    user
  );
  return res;
};

export const deleteAllDataAPI = async (id_app, url, _id, token, data) => {
  const res = await axios.put(
    `${URL}/api/${id_app}/${url}/${_id}?access_token=${token}`,
    data
  );
  return res;
};
