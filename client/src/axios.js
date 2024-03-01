import axios from "axios"

let instance = axios.create({
    baseURL: "/api/"
})


// 根据请求生成对应的key
function generateReqKey(config, hash) {
    const { method, url, params, data } = config;
    return [method, url, JSON.stringify(params), JSON.stringify(data), hash].join("&");
}

// 存储已发送但未响应的请求
const pendingRequest = new Set();

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    let hash = location.hash
    // 生成请求Key
    let reqKey = generateReqKey(config, hash)
    
    if(pendingRequest.has(reqKey)) {
        return Promise.reject()
    }else{
        // 将请求的key保存在config
        config.pendKey = reqKey
        pendingRequest.add(reqKey)
    }

    return config;
  }, function (error) {
    console.log(error, 'x')
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 从config取出请求key，并从集合中移除
    pendingRequest.delete(response.config.pendKey)
    return response;
  }, function (error) {
    // 从config取出请求key，并从集合中移除
    pendingRequest.delete(error.config.pendKey)
    return Promise.reject(error);
  });

export default instance;