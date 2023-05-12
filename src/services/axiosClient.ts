import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { ApiMethods } from 'enums/api';

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Accept: 'applications/json',
    'Content-Type': 'application/json',
  },
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // Do something before request is sent
    return config;
  },
  (error: AxiosError) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

const callAPI = (
  method: ApiMethods,
  path: string,
  body?: Record<string, unknown>,
  config?: Record<string, unknown>,
) => {
  let res = null;
  switch (method) {
    case 'get':
      // in case GET method: body is config
      res = axiosInstance[method](path, body || config);
      break;
    default:
      res = axiosInstance[method](path, body, config);
  }

  return res
    .then((resp: Record<string, any>) => {
      return resp;
    })
    .catch(async (error: any) => {
      switch (error.response?.status) {
        case 400: // Wrong url or params
        case 404: // Nor found
        case 500: // Server error
        case 409: // Conflict
          break;
        case 403: // Forbidden
          break;
        case 401: // Unauthorize
          break;
        default:
          throw error;
      }

      throw error;
    });
};

export default callAPI;
