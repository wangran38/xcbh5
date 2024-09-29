<template>
	<view class="me-container">
		<view class="title">
			积分结算记录
		</view>
		<view class="records">
			
			<!-- <view class="phone">
				手机号码
			</view> -->
			<view class="time">
				时间
			</view>
			<view class="market">
				金额
			</view>
			<view class="state">
				状态
			</view>
		</view>
		<scroll-view class="Stallholder" scroll-y="true" @scrolltolower="handleScrollToLower"
			:style="{ height: 'calc(90vh)'}">
			<view class="record-item" v-for="item in pageData" :key="item.id">
				<view class="time">
					{{formatDate(item.Created)}}
				</view>
				<view class="market" >
					{{item.shopscore}}
				</view>
				<view class="state" >
					{{ getStatusLabel(item.status) }}
				</view>
				<!-- <view class="phone">
					{{formatPhoneNumber(item.phone)}}
				</view> -->
				
			</view>
		</scroll-view>
		
	</view>

</template>

<script>
	import {api} from '@/api'; // 根据你的项目路径引入
	import usePage from '@/hooks/usePage';
	export default {
		data() {
			return {
				pageData: [],
			}
		},
		onShow() {
			// this.token = uni.getStorageSync('token');
			this.reloadData()
		},
		mixins: [usePage],
		methods: {
			async fetchData(params) {
				const response = await api.shopsorcelist(params)
				return response.data		
			},
			formatDate(dateString) {
			  return dateString.replace(/T/, ' ').replace(/(\+\d{2}:\d{2})/, '');
			},
			getStatusLabel(status) {
			        switch (status) {
			            case 1:
			                return '申请中';
			            case 2:
			                return '已结算';
			            default:
			                return ''; // 默认不填写
			        }
			    },
		}
	}
</script>

<style>
	.me-container {
		width: 100%;
		box-sizing: border-box;
		padding: 0rpx 25rpx 0 25rpx;
		color: white;
		z-index: 1;
		background-color: #f8f8f8;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.title {
		font-size: 35rpx;
		color: black;
		text-align: center;
		margin-top: 50rpx;
	}

	.records {
		width: 100%;
		height: 50rpx;
		margin-top: 30rpx;
		color: black;
		/* background-color: aqua; */
		display: flex;
		
	}

	.market {
		width: 33%;
		height: 100%;
		/* background-color: bisque; */
		text-align: center;
	}
	.state {
		width: 33%;
		height: 100%;
		/* background-color: bisque; */
		text-align: center;
	}
	/* .phone {
		width: 35%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	} */

	.time {
		flex: 1;
		/* width: auto; */
		height: 100%;
		/* background-color: aqua; */
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.record-item {
		width: 100%;
		color: black;
		/* background-color: #D3D3D3; */
	    display: flex;
		margin-top: 10rpx;
	    margin-bottom: 10rpx; /* 记录项之间的间距 */
		border-bottom: 1px solid #ccc;
	}
	
	
	.record-item .market {
	    width: 33%; /* 设置固定宽度 */
		height: 120rpx;
		line-height: 120rpx;
		text-align: center;
		overflow: hidden; /* 隐藏超出的内容 */
		white-space: nowrap; /* 强制不换行 */
		text-overflow: ellipsis; /* 显示省略号 */
	}
	
	.record-item .state {
	    width: 33%; 
		height: 120rpx;
		line-height: 120rpx;
		overflow: hidden; 
		white-space: nowrap; 
		text-overflow: ellipsis; 
	}
	
	.record-item .time {
	    flex: 1; /* 占据剩余空间 */
		height: 120rpx;
		line-height: 120rpx;
		overflow: hidden; /* 隐藏超出的内容 */
		white-space: nowrap; /* 强制不换行 */
		text-overflow: ellipsis; /* 显示省略号 */
		display: flex;
		justify-content: flex-start;
		font-size: 24rpx;
	}
	.lottery{
		position: fixed;
		left: 50%;
		bottom: 50rpx;
		width: 90%;
		height: 120rpx;
		color: white;
		background-color: #007aff;
		transform: translateX(-50%);
		border-radius: 20rpx;
		text-align: center;
		line-height: 120rpx;
		font-size: 35rpx;
	}

</style>