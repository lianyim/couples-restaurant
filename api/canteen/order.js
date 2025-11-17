import upload from '@/utils/upload'
import request from '@/utils/request'

// 订单分页
export function orderPage(data) {
  return request({
    url: '/canteen/canteen-order/page',
    method: 'GET',
	params: data
  })
}

// 订单详情
export function getOrder(id) {
  return request({
    url: '/canteen/canteen-order/get?id=' + id,
    method: 'GET'
  })
}

// 下单
export function submitOrder(data) {
  return request({
    url: '/canteen/canteen-order/submitOrder',
    method: 'POST',
    data: data
  })
}

// 上传用餐图
export function addOverImg(data) {
  return request({
    url: '/canteen/canteen-order/addOverImg',
    method: 'GET',
	params: data
  })
}

// 删除用餐图
export function decOverImg(data) {
  return request({
    url: '/canteen/canteen-order/decOverImg',
    method: 'GET',
	params: data
  })
}

// 取消订单
export function cancelOrder(id) {
  return request({
    url: '/canteen/canteen-order/cancelOrder?id=' + id,
    method: 'GET'
  })
}