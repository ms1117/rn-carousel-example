import AppConfig from '../config';

const { BaseUrl } = AppConfig;

export const apiModels = async (url, method, parameters, token, isContainBaseUrl = false) => {
  let ret = null;
  let queryURL = '';
  let params = {};
  try {
    queryURL = isContainBaseUrl ? url : `${BaseUrl}/${url}`;
    const body = JSON.stringify(parameters);
    const headers = {
      'Content-Type': 'application/json',
    };
    params = { headers, method };
    if (method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT' || method.toUpperCase() === 'DELETE') {

      params.body = body;
    }
    // eslint-disable-next-line
    const response = await fetch(queryURL, params);

    if (method.toUpperCase() !== 'DELETE') {
      ret = await response.json();
    } else {
      ret = {};
    }
    if (response.status >= 400) {
      debugger;
      ret = { error: true, success: false };
    }
    console.log('request result', queryURL, params, ret);
  } catch (err) {
    console.log('err', queryURL, params, err);
    ret = { error: true, success: false, errorCode: -1 };
  }
  return ret;
};
