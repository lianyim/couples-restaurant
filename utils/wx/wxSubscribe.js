/**
 * 订阅消息工具类
 * 提供订阅消息相关的封装方法
 */

export class SubscribeMessage {
	/**
	 * 构造函数
	 * @param {Object} options 配置选项
	 * @param {string} [options.defaultTemplateId] 默认模板ID
	 */
	constructor(options = {}) {
		this.defaultTemplateId = options.defaultTemplateId || '';
	}

	/**
	 * 设置默认模板ID
	 * @param {string} templateId 模板ID
	 */
	setDefaultTemplateId(templateId) {
		if (!templateId) {
			console.error('模板ID不能为空');
			return;
		}
		this.defaultTemplateId = templateId;
	}

	/**
	 * 请求订阅消息
	 * @param {string|Array} templateIds 模板ID或模板ID数组
	 * @param {Object} [options] 额外选项
	 * @param {boolean} [options.showToast=true] 是否显示提示
	 * @returns {Promise} 订阅结果
	 */
	async requestSubscribe(templateIds, options = {
		showToast: true
	}) {
		try {
			// 参数处理
			const tmplIds = Array.isArray(templateIds) ?
				templateIds :
				[templateIds || this.defaultTemplateId];

			if (!tmplIds.length) {
				throw new Error('至少需要一个模板ID');
			}

			// 请求订阅
			const res = await uni.requestSubscribeMessage({
				tmplIds
			});

			console.log('订阅授权结果:', res);

			// 处理返回结果为数组的情况
			let apiResult;
			if (Array.isArray(res)) {
				// 取第二个元素作为真正的返回结果
				apiResult = res[1];
				console.warn('检测到特殊返回格式，使用第二个元素作为结果:', apiResult);
			} else {
				apiResult = res;
			}

			// 检查API调用是否成功
			if (apiResult.errMsg !== 'requestSubscribeMessage:ok') {
				throw new Error(apiResult.errMsg || '订阅请求失败');
			}

			// 检查每个模板的订阅状态
			const results = {};
			let allAccepted = true;

			tmplIds.forEach(templateId => {
				// 更安全的方式获取状态
				const status = Object.prototype.hasOwnProperty.call(apiResult, templateId) ?
					apiResult[templateId] :
					'reject'; // 默认视为拒绝

				results[templateId] = status;

				if (status !== 'accept') {
					allAccepted = false;
					console.warn(`用户拒绝或未授权订阅: ${templateId}, 状态: ${status}`);
				}
			});

			// 显示结果提示
			if (options.showToast !== false) {
				this._showToast(allAccepted ? '订阅成功' : '部分订阅被拒绝', allAccepted);
			}

			return {
				success: allAccepted,
				results
			};

		} catch (error) {
			console.error('订阅流程出错:', error);

			// 显示错误提示
			if (options.showToast !== false) {
				this._showToast(this._getErrorMessage(error), false);
			}

			return {
				success: false,
				error: error.message || '未知错误'
			};
		}
	}

	/**
	 * 显示提示信息
	 * @param {string} message 提示信息
	 * @param {boolean} isSuccess 是否成功
	 * @private
	 */
	_showToast(message, isSuccess) {
		uni.showToast({
			title: message,
			icon: isSuccess ? 'success' : 'none',
			duration: 2000
		});
	}

	/**
	 * 获取错误信息
	 * @param {Error} error 错误对象
	 * @returns {string} 错误信息
	 * @private
	 */
	_getErrorMessage(error) {
		if (error.message && error.message.includes('requestSubscribeMessage:fail')) {
			return '订阅功能不可用，请检查小程序权限设置';
		} else if (error.message.includes('模板ID不能为空')) {
			return '订阅配置错误';
		}
		return '订阅失败，请重试';
	}
}

// 默认导出实例
export default new SubscribeMessage();