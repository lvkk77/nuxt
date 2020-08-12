import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
})

// 通过插件机制获取上下文对象
// 插件导出函数必须作为 default 成员
export default ({ store }) => {
  // 请求拦截器
  request.interceptors.request.use(function (config) {
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
}


// 响应拦截器
// request.interceptors.response.use(function (response) {
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   return response;
// }, function (error) {
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   return Promise.reject(error);
// });
