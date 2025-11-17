import upload from '@/utils/upload'
import request from '@/utils/request'

// 发送订阅消息
export function sendSubMsg() {
  return request({
    url: '/wx/mini/sendSubMsg',
    method: 'GET'
  })
}

export function getFlag() {
  return request({
    url: '/system/auth/getFlag',
    method: 'GET'
  })
}

// 获取订阅模板列表
export function getSubTempList() {
  return request({
    url: '/canteen/wx/getSubTempList',
    method: 'GET'
  })
}
