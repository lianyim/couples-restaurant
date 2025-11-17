import upload from '@/utils/upload'
import request from '@/utils/request'

// 查询当前用户信息
export function getLoginUser() {
  return request({
    url: '/system/auth/getUser',
    method: 'GET'
  })
}

// 查询用户列表
export function getUserList() {
  return request({
    url: '/system/user/queryUsers',
    method: 'GET'
  })
}

// 用户密码重置
export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword
  }
  return request({
    url: '/system/user/profile/update-password',
    method: 'PUT',
    params: data
  })
}

// 查询用户个人信息
export function getUserProfile() {
  return request({
    url: '/system/user/profile/get',
    method: 'GET'
  })
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return request({
    url: '/system/user/profile/update',
    method: 'PUT',
    data: data
  })
}

// 用户头像上传
export function uploadAvatar(data) {
  return upload({
    url: '/system/user/profile/update-avatar',
    method: 'PUT',
    name: data.name,
    filePath: data.filePath
  })
}

// 文件上传
export function uploadFile(data) {
  return upload({
    url: '/admin-api/infra/file/upload',
    method: 'POST',
    name: data.name,
    filePath: data.filePath
  })
}

// 文件上传
export function uploadFile2(data) {
  return upload({
    url: '/admin-api/infra/file/upload2',
    method: 'POST',
    name: data.name,
    filePath: data.filePath
  })
}

// 微信小程序订阅
export function wxSubscribe(data) {
  return request({
    url: '/wx/mini/subscribe',
    method: 'POST',
    data: data
  })
}

// 保存用户信息
export function saveSimpleUser(data) {
  return request({
    url: '/system/user/saveSimpleUser',
    method: 'POST',
    data: data
  })
}

// 删除用户
export function deleteSimpleUser(id) {
  return request({
    url: '/system/user/deleteSimpleUser?id=' + id,
    method: 'DELETE'
  })
}