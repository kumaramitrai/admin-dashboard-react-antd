import { message as Message } from "antd";
import axios from "axios";
import { isEmpty } from "ramda";

import { ResultEnum } from "../utils/enum";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.headers.Authorization = "Bearer Token";
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (res) => {
    if (!res.data) throw new Error("sys.api.apiRequestFailed");

    const { status, data, message } = res.data;
    // Successful business request
    const hasSuccess =
      data && Reflect.has(res.data, "status") && status === ResultEnum.SUCCESS;
    if (hasSuccess) {
      return data;
    }

    // Business request error
    throw new Error(message || "sys.api.apiRequestFailed");
  },
  (error) => {
    const { response, message } = error || {};
    let errMsg = "";
    try {
      errMsg = response?.data?.message || message;
    } catch (error) {
      throw new Error(error);
    }
    // Do something with response error
    if (isEmpty(errMsg)) {
      // checkStatus
      // errMsg = checkStatus(response.data.status);
      errMsg = "sys.api.errorMessage";
    }
    Message.error(errMsg);
    return Promise.reject(error);
  }
);

class APIClient {
  get(config) {
    return this.request({ ...config, method: "GET" });
  }

  post(config) {
    console.log('config in api client', config);

    return this.request({ ...config, method: "POST" });
  }

  put(config) {
    return this.request({ ...config, method: "PUT" });
  }

  delete(config) {
    return this.request({ ...config, method: "DELETE" });
  }

  request(config) {
    return new Promise((resolve, reject) => {
      axiosInstance
        .request(config)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
}

export default new APIClient();
