
import request from '../utils/request'

export function login(data) {
  return new Promise((resolve, reject) => {
    if (data.username === 'root' && data.password === 'root') {
      setTimeout(() => {
        resolve({
          username: data.username,
        })
      }, 1000)
    } else {
      reject()
    }
  })
  // return request({
  //   url: 'auth/login',
  //   method: 'post',
  //   data,
  // })
}
export function logout(data) {
  return request({
    url: 'auth/logout',
    method: 'post',
    data,
  })
}

export function registe(data) {
  return request({
    url: 'auth/registe',
    method: 'post',
    data,
  })
}
