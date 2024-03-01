import axios from "axios"
import { ElLoading } from 'element-plus'

let instance = axios.create({
    baseURL: "/api/"
})

let loadingInstance = null
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    loadingInstance = ElLoading.service({ fullscreen: true, background: 'rgba(0, 0, 0, 0.7)' })
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    loadingInstance.close()
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default instance;