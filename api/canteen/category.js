import upload from '@/utils/upload'
import request from '@/utils/request'

// 类别分页
export function categoryPage(data) {
  return request({
    url: '/canteen/canteen-category/page',
    method: 'GET',
	params: data
  })
}

// 更新分类信息
export function updateCategory(data) {
  return request({
    url: '/canteen/canteen-category/update',
    method: 'PUT',
    data: data
  })
}

// 添加分类
export function addCategory(data) {
  return request({
    url: '/canteen/canteen-category/create',
    method: 'POST',
    data: data
  })
}

// 类别删除
export function delCategory(id) {
  return request({
    url: '/canteen/canteen-category/delete?id=' + id,
    method: 'DELETE'
  })
}