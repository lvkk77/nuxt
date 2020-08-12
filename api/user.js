import { request } from '@/plugins/request'

const login = data => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

const register = data => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}

const updateUser = data => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data
  })
}

const getUser = data => {
  return request({
    method: 'GET',
    url: '/api/user'
  })
}

export {
  login,
  register,
  updateUser,
  getUser
}