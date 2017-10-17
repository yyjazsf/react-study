import axios from 'axios'
// import { message } from 'antd'

axios.defaults.baseURL = '/'

// 处理 默认 get 不转换参数问题
const fetch = (options) => {
  const { data, url, method = 'get' } = options
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: data,
      })
    case 'post':
      return axios.post(url, data)
    case 'put':
      return axios.put(url, data)
    case 'patch':
      return axios.patch(url, data)
    case 'delete':
      return axios.delete(url, { data })
    default:
      return axios(options)
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(options) {
  return fetch(options)
    .then((response) => {
      if (response.data && response.data.status_code > 300) {
        const errData = new Error()
        errData.data = response
        throw errData
      }
      return response.data
    })
    .catch((err) => {
      if (err instanceof Error) { // detal with in dva error
        throw err
      } else {
        const errData = new Error()
        errData.data = err
        throw errData
      }
    })
}
