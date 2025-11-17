/**
 * 显示消息提示框
 * @param content 提示的标题
 */
export function toast(content) {
	uni.showToast({
		icon: 'none',
		title: content
	})
}

/**
 * 显示模态弹窗
 * @param content 提示的标题
 */
export function showConfirm(content) {
	return new Promise((resolve, reject) => {
		uni.showModal({
			title: '提示',
			editable: true,
			placeholderText: '输入激活码',
			cancelText: '功能预览',
			confirmText: '确定',
			success: function(res) {
				let gzhUrl = 'https://mp.weixin.qq.com/s/cm5Mfnf7BMlryBrQB7Oxgg'
				if (res.confirm) {
					resolve(res)
				} else if (res.cancel) {
					if (process.env.VUE_APP_PLATFORM === 'mp-weixin') {
						uni.navigateTo({
							url: `/pages/common/webview/index?url=${gzhUrl}`
						})
					} else {
						window.location.href = gzhUrl;
					}
				}
			}
		})
	})
}

/**
 * 参数处理
 * @param params 参数
 */
export function tansParams(params) {
	let result = ''
	for (const propName of Object.keys(params)) {
		const value = params[propName]
		var part = encodeURIComponent(propName) + "="
		if (value !== null && value !== "" && typeof(value) !== "undefined") {
			if (typeof value === 'object') {
				for (const key of Object.keys(value)) {
					if (value[key] !== null && value[key] !== "" && typeof(value[key]) !== 'undefined') {
						let params = propName + '[' + key + ']'
						var subPart = encodeURIComponent(params) + "="
						result += subPart + encodeURIComponent(value[key]) + "&"
					}
				}
			} else {
				result += part + encodeURIComponent(value) + "&"
			}
		}
	}
	return result
}