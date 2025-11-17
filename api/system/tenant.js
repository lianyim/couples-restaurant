import upload from '@/utils/upload'
import request from '@/utils/request'

// 更新租户信息
export function updateTenantSimple(data) {
  return request({
    url: '/system/tenant/updateSimple',
    method: 'PUT',
    data: data
  })
}