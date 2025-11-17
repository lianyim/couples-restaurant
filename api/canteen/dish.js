import upload from '@/utils/upload'
import request from '@/utils/request'

// 餐品分页
export function dishPage(data) {
  return request({
    url: '/canteen/canteen-dish/page',
    method: 'GET',
	params: data
  })
}

// 餐品详情
export function getDish(id) {
  return request({
    url: '/canteen/canteen-dish/get?id=' + id,
    method: 'GET'
  })
}

// 添加餐品
export function addDish(data) {
  return request({
    url: '/canteen/canteen-dish/create',
    method: 'POST',
    data: data
  })
}

// 更新餐品
export function updateDish(data) {
  return request({
    url: '/canteen/canteen-dish/update',
    method: 'PUT',
    data: data
  })
}

// 删除
export function delDish(id) {
  return request({
    url: '/canteen/canteen-dish/delete?id=' + id,
    method: 'DELETE'
  })
}