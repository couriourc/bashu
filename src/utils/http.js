//重新封装axios 请求
import axios from 'axios'
import router from '@/router'
import {Loading, Message} from 'element-ui'
// 重新创建一个加载状态
let loadingStatus = true;
//重新创建一个axios 实例，统一管理实例请求
const instance = axios.create({
  timeout: 10000,
  baseURL: 'http://47.108.181.153:10020'
})
// baseUrl
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let httpCode = {
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
}

instance.interceptors.request.use(config => {
  config.headers['token'] = sessionStorage.getItem('token') || ''
  config.headers['info'] = sessionStorage.getItem('info') || ''
  if (config.headers['token']) {
    config.headers.Authorization = config.headers['token']
  }
  loadingStatus = Loading.service({
    spinner: 'fa fa-spinner fa-spin fa-3x fa-fw',
    text: '拼命加载中...'
  })
  if (config.method === 'get') {
    config.params = {
      ...config.params,
      t: new Date().getTime()
    }
  }
  console.log(config.url)
  console.log(config)
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  loadingStatus.close()
  console.log(res.status)
  if (res.status === 200) {

    console.log(res.data)
    Message({
      message: res.data.message,
      type: 'success'
    })
    return Promise.resolve(res.data)
  } else {
    Message({
      message: res.data.message,
      type: 'error'
    })
    return Promise.reject(res.data)
  }
}, error => {
  loadingStatus.close()
  if (error.response) {
    // 根据请求失败的http状态码去给用户相应的提示
    let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message
    Message({
      message: tips,
      type: 'error'
    })
    if (error.response.status === 401) {    // token或者登陆失效情况下跳转到登录页面，根据实际情况，在这里可以根据不同的响应错误结果，做对应的事。这里我以401判断为例
      router.push({
        path: `/`
      })
    }
    return Promise.reject(error)
  } else {
    Message({
      message: '请求超时, 请刷新重试',
      type: 'error'
    })
    return Promise.reject(new Error('请求超时, 请刷新重试'))
  }
})
/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

//统一封装post 请求
export const post = (url, data, config = {}) => {
  return instance({
    method: 'post',
    url,
    data,
    ...config
  }).then(response => {
    console.log(url)
    return Promise.resolve(response)
  }).catch(error => {
    return Promise.reject(error)
  })
}

// 统一封装delete请求
export const del = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'delete',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
//统一封装put 请求
export const put = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'put',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
//统一封装 ...
