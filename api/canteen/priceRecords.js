import upload from '@/utils/upload'
import request from '@/utils/request'

// 分页
export function priceRecordsPage(data) {
  return request({
    url: '/canteen/price-records/page',
    method: 'GET',
	params: data
  })
}

// 分页
export function addPrice(userId, value) {
  return request({
    url: '/canteen/price-records/add?userId=' + userId + '&value=' + value,
    method: 'GET'
  })
}