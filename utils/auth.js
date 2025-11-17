const AccessTokenKey = 'ACCESS_TOKEN'
const RefreshTokenKey = 'REFRESH_TOKEN'

// ========== Token 相关 ==========

export function getAccessToken() {
  return uni.getStorageSync(AccessTokenKey)
}

export function getRefreshToken() {
  return uni.getStorageSync(RefreshTokenKey)
}

export function setToken(token) {
  uni.setStorageSync(AccessTokenKey, token.accessToken)
  uni.setStorageSync(RefreshTokenKey, token.refreshToken)
  uni.setStorageSync('tenant_id', token.tenantId)
}

export function removeToken() {
  uni.removeStorageSync(AccessTokenKey)
  uni.removeStorageSync(RefreshTokenKey)
  uni.removeStorageSync('cacheUser')
  uni.removeStorageSync('tenant_id')
}
