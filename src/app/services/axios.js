import axios from 'axios';

export const axiosBaseApi = axios.create({
  baseURL: 'http://localhost/portal_req_backend/public/api',

  withCredentials: false
});