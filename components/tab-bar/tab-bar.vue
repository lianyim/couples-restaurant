<template>
	<view class="tab-container">
		<!-- 标签栏 -->
		<view class="tab-bar">
			<view v-for="(tab, index) in tabs" :key="index" class="tab-item"
				:class="{ 'active': currentIndex === index }" @click="switchTab(index)">
				{{ tab.label }}
			</view>
		</view>

		<!-- 内容区域 -->
		<view class="tab-content">
			<slot :name="'tab-' + currentIndex"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'TabBar',
		props: {
			tabs: {
				type: Array,
				required: true,
				validator: value => {
					return value.every(item => item.label && item.value);
				}
			},
			initialIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				currentIndex: this.initialIndex
			};
		},
		methods: {
			switchTab(index) {
				if (this.currentIndex !== index) {
					this.currentIndex = index;
					this.$emit('change', {
						index,
						value: this.tabs[index].value
					});
				}
			}
		}
	};
</script>

<style scoped>
	.tab-container {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.tab-bar {
		display: flex;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #f8f8f8;
		border-bottom: 1rpx solid #eee;
	}

	.tab-item {
		flex: 1;
		text-align: center;
		font-size: 28rpx;
		color: #666;
		position: relative;
	}

	.tab-item.active {
		color: #007AFF;
		font-weight: bold;
	}

	.tab-item.active::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 60rpx;
		height: 4rpx;
		background-color: #007AFF;
		border-radius: 2rpx;
	}

	.tab-content {
		padding: 20rpx;
	}
</style>