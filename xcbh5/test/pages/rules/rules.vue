<template>
	<view class="me-container">
		<view class="title">
			抽奖规则
		</view>
		<view class="content">
			<ul>一.抽奖时间:</ul>
			<li>1、每月的最后一天,一年12个月共12次.月抽</li>
			<li>2.每年的12月3日抽一次.年奖 </li>
			<li>3、每年的最为一天,奖和年奖同时进行.</li>
			<ul>二.抽奖规则:</ul>
			<li>1、膜:采用顾客打卡的方式;制作打长二维码:
				张贴在市场的东西南北的口,要顾客进入市场时
				制作载有菜佳主信息的二维码、顾客年在一摊位买荣就把一次(打卡一次),每天的次数不复限(买荣越多,打长越多.中奖概率就越大.),以一个完整月的数量为基数进行抽参与抽奖.
				C椎主二维码信息内容,要求每天更新卖荣的信息.为下步查让更多的顾齐观注、增加流量度,为下一步平系统台升级,走线上预约买菜,增加摊它的销售渠道打好基础).</li>
			<li>2.年奖::后台自动流斗.一年在打长达到300次
				的假客,可以参加抽奖、顾
				(对权信主的奖励励,可以统计出流第一名的奖励注室物联配(曲)</li>
			<ul>三.奖励办法:</ul>
			<li>1、奖和年奖均为固定奖项,分为一、二、六、四、续月膜:一等奖一名:奖动猪肉10斤.二等奖王名:笑动猪内4斤2三年0名:芙励烧肉2斤20</li>
			<li>2.年奖:一等奖一各.动猪肉.150斤=等奖.汤猪肉200斤三年奖二叶,各壁劲猪肉10斤.200斤</li>
			<li>3.奖励美物、计量并位为市介.顾客凭电子奖系,任意由摊免费领取，可一次性领收.补可多次领收.期限为一气.摊主通过二维码执码进行核销,并以当日的肉价进行评价,近月未到物业公司进行申请取肉钱。</li>
		</view>
		<view class="fixd" @click="scan">
			<view >立即签到</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			
			scan() {
			  // 只允许通过相机扫码
			  uni.scanCode({
			    onlyFromCamera: true,
			    success: function (res) {
				  console.log(1);
			      console.log('条码类型：' + res.scanType);
			      console.log('条码内容：' + res.result);
			
			      // 检查是否是 URL，如果是 URL，则跳转
			      const scannedUrl = res.result;
			      if (scannedUrl.startsWith('http')) {
					  console.log('这是一个有效的 URL');
			        // 解码 URL
			        const decodedUrl = decodeURIComponent(scannedUrl);
					console.log('解码后的 URL:', decodedUrl);
			        // 提取 hash 部分（即 # 后面的部分）
			        const hashIndex = decodedUrl.indexOf('#');
			        if (hashIndex !== -1) {
			          const pagesPath = decodedUrl.substring(hashIndex + 1); // 例如 "/pages/Clock/Clock?time=1725806224"
						console.log('提取到的页面路径:', pagesPath);
			          // 执行页面跳转
			          uni.navigateTo({
			            url: pagesPath // 跳转到指定页面并带上参数
			          });
			        } else {
			          console.warn('未能解析到有效的页面路径');
			        }
			      } else {
			        // 处理非 URL 的结果
			        console.warn('扫码结果不是有效的链接:', scannedUrl);
			      }
			    },
			    fail: function (error) {
			      console.error('扫码失败:', error);
			    }
			  });
			}
		}
	}
</script>

<style>
	.me-container {
		overflow: hidden;
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		padding: 0rpx 50rpx 00rpx 50rpx;
		color: white;
		z-index: 1;
		background-color: #d1d1d1;
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		color: black;
	}

	.title {
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		font-size: 34rpx;
		/* margin-top: 30rpx; */
		margin-bottom: 30rpx;
		/* background-color: aqua; */
	}
	.fixd{
		height: 100rpx;
		width: 80%;
		color: white;
		font-size: 30rpx;
		position: fixed;
		bottom: 50rpx;
		left: 50%; /* 使元素相对于视口宽度居中 */
		transform: translateX(-50%); /* 将元素向左移动一半的自身宽度，实现居中对齐 */
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #007aff;
		border-radius: 20rpx;
	}
</style>