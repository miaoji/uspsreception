import axios from 'axios';
import { storage } from '../utils/storage';

const token = storage({ type: 'get', key: 'token' });

const fetch = (options) => {
  let {
    method = 'get',
    data,
    params,
    url,
    auth = true,
  } = options

  switch (method.toLowerCase()) {
    case 'get':
      return axios({
        url,
        method: 'get',
        params: data || params,
        timeout: 5000,
        headers: auth ? { 'token': token } : {}
      })
    case 'delete':
      return axios({
        url,
        method: 'delete',
        data,
        params,
        timeout: 5000,
        headers: auth ? { 'token': token } : {}
      })
    case 'post':
      return axios({
        url,
        method: 'post',
        data,
        params,
        timeout: 5000,
        headers: {
          'token': auth ? token : ''
        }
      })
    case 'put':
      return axios.put(url, data)
    case 'patch':
      return axios.patch(url, data)
    default:
      return axios(options)
  }
}

export default function request(options) {
  const { useSession } = options
  return fetch(options).then((response) => {
    const { status } = response
    let data = response.data
    data = typeof data === 'object' ? data : { 'stringData': data }
    return {
      success: true,
      statusCode: status,
      ...data
    }
  }).catch((error) => {
    const { response } = error
    let msg
    let statusCode
    if (response && response instanceof Object) {
      const { data, statusText } = response
      statusCode = response.status
      msg = data.message || statusText
      // 判断token失效
      if (response.status === 401) {
        window.localStorage.clear()
        if (useSession) {
          window.sessionStorage.clear()
        }
      }
    } else {
      statusCode = 600
      msg = error.message || '网络错误'
    }
    return { success: false, statusCode, message: msg }
  })
}
