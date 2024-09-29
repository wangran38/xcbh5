<template>
	<view class="me-container">

		<view class="Withdrawal-limit">
			<text>积分转换后的额度(元)</text>
			<view class="num">
				{{ inputValue / 10 || 0 }}
			</view>
		</view>

		<view class="input">
			<input class="shurucon" type="number" v-model="displayValue"
				:placeholder="'请输入要提现的积分(您的提现总积分为 ' + (pagedata.hasmoney || '0') + ' )'" inputmode="numeric"
				@input="handleInput" />
		</view>

		<view class="Payouts">
			<view class="butt" @click="submitSettlement">积分结算</view>
		</view>
		<view class="Settrecords" @click="gotoSettrecords">
			<view class="records">积分结算记录</view>
		</view>
	</view>
</template>

<script>
	import {
		api
	} from '@/api/index'
	export default {
		data() {
			return {
				pagedata: {
					hasmoney: 0 // 给 truemoney 设置一个默认值
				},
				inputValue: '', // 实际显示的输入值
				displayValue: '' // 用于 v-model 的值
			}
		},
		mounted() {
			this.fetchData(); // 在页面加载时调用接口
		},
		methods: {
			async fetchData() {
				try {
					const response = await api.mysorce(); // 请求接口
					this.pagedata = response.data; // 将接口返回的数据保存到 pagedata 中
				} catch (error) {
					console.error("获取积分数据失败：", error); // 错误处理
				}
			},
			async submitSettlement() {
				if (!this.inputValue || isNaN(this.inputValue) || Number(this.inputValue) <= 0) {
					// 检查输入值是否有效
					uni.showToast({
						title: '请输入有效的积分数',
						icon: 'none'
					});
					return;
				}
				const shopscore = Number(this.inputValue);
				    
				    // 检查积分是否大于100
				    if (shopscore <= 100) {
				        uni.showToast({
				            title: '积分必须大于100',
				            icon: 'none'
				        });
				        return;
				    }
				try {
					// const shopscore = Number(this.inputValue);
					const response = await api.settlement({shopscore});
					if (response.code === 200) {
						// 积分结算成功
						uni.showToast({
							title: '积分结算申请成功',
							icon: 'success'
						});
					} else {
						// 处理返回的错误信息
						uni.showToast({
							title: response.message || '积分结算失败',
							icon: 'none'
						});
					}
				} catch (error) {
					console.error("提交请求失败", error); // 错误处理
					uni.showToast({
					    title: '提交请求失败，请稍后重试',
					    icon: 'none'
					});
				}
			},
			handleInput(event) {
				// 更新输入框的值，并在 displayValue 为空时处理默认值
				this.inputValue = event.target.value;
				this.displayValue = this.inputValue !== '' ? this.inputValue : '';
			},
			gotoSettrecords() {
				uni.navigateTo({
					url: '/pages/Settrecords/Settrecords'
				});
			},
		}
	}
</script>

<style>
	.me-container {
		overflow: hidden;
		width: 100%;
		box-sizing: border-box;
		padding: 30rpx 30rpx 0 30rpx;
		color: white;
		z-index: 1;
		background-color: #f8f8f8;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* 从顶部开始布局 */
		position: relative;
		/* 确保子元素的绝对定位是相对于这个容器 */
		height: calc(100vh -10rpx);
		/* 确保容器占满整个视口高度 */
		color: black;
	}

	.input {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: aqua; */
	}

	.shurucon {
		/* background-color: aqua; */
		width: 80%;
		height: 100rpx;
		border: 1px solid #ccc;
		font-size: 26rpx;

	}

	.Withdrawal-limit {
		width: 100%;
		height: 300rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.num {
		margin-top: 30rpx;
		font-size: 70rpx;
		font-weight: 600;
	}

	.Payouts {
		width: 100%;
		height: 100rpx;
		margin-top: 50rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.butt {
		width: 80%;
		height: 100%;
		color: white;
		background-color: #007aff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20rpx;
	}

	.Settrecords {
		margin-top: 30rpx;
		text-align: center;
		color: #007aff;
	}
</style>