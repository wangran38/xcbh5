<template>
	<view class="container">
		<view class="header">
			注册
		</view>
		<view class="input-group">
			<uni-easyinput v-model="form.username" prefixIcon="person" placeholder="请输入手机号码"
				@input="validatePhoneNumber"></uni-easyinput>
			<view v-if="phoneError" class="error-message">{{ phoneError }}</view>
		</view>
		<view class="input-group">
			<uni-easyinput v-model="form.password" type="password" prefixIcon="locked" placeholder="请输入六位密码"
				@input="validatePassword('password')" maxlength="6"></uni-easyinput>
			<view
				:class="['error-message', { 'valid': passwordValid, 'invalid': !passwordValid && form.password.length > 0 }]">
				{{ passwordError }}
			</view>
		</view>
		<view class="input-group">
			<uni-easyinput v-model="form.confirm" type="password" prefixIcon="locked" placeholder="请确认密码"
				@input="validatePassword('confirm')" maxlength="6"></uni-easyinput>
			<view
				:class="['error-message', { 'valid': confirmPasswordValid, 'invalid': !confirmPasswordValid && form.confirm.length > 0 }]">
				{{ confirmPasswordError }}
			</view>
		</view>
		<view class="button-group">
			<button class="login-button" @click="register">注册</button>
		</view>
	</view>
</template>


<script>
	import {
		api
	} from '../../api/index.js';

	export default {
		data() {
			return {
				form: {
					username: '',
					password: '',
					confirm: ''
				},
				phoneError: '',
				passwordError: '',
				confirmPasswordError: '',
				passwordValid: false,
				confirmPasswordValid: false
			};
		},
		watch: {
			'form.username': 'validatePhoneNumber',
			'form.password': 'validatePassword'
		},
		methods: {
			validatePhoneNumber() {
				let reg = /^1[3-9]\d{9}$/;
				if (!reg.test(this.form.username)) {
					this.phoneError = '请输入正确的11位手机号';
				} else {
					this.phoneError = '';
				}
			},
			validatePassword(field) {
				this.$nextTick(() => {
					if (field === 'password') {
						if (this.form.password.length === 0) {
							this.passwordError = '密码不能为空';
							this.passwordValid = false;
						} else if (this.form.password.length !== 6) {
							this.passwordError = '密码必须6位';
							this.passwordValid = false;
						} else {
							this.passwordError = '密码格式正确';
							this.passwordValid = true;
						}
					} else if (field === 'confirm') {
						if (this.form.confirm.length === 0) {
							this.confirmPasswordError = '密码不能为空';
							this.confirmPasswordValid = false;
						} else if (this.form.confirm.length !== 6) {
							this.confirmPasswordError = '密码必须6位';
							this.confirmPasswordValid = false;
						} else if (this.form.confirm !== this.form.password) {
							this.confirmPasswordError = '两次密码输入不一致';
							this.confirmPasswordValid = false;
						} else {
							this.confirmPasswordError = '密码格式正确';
							this.confirmPasswordValid = true;
						}
					}
				});
			},
			async register() {
				// 校验手机号是否为空
				if (this.form.username === '') {
					uni.showToast({
						title: '请输入手机号码',
						icon: 'none'
					});
					return;
				}
				// 校验密码是否为空
				if (this.form.password === '') {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					});
					return;
				}
				// 校验密码是否为6位
				if (this.form.password.length !== 6) {
					uni.showToast({
						icon: 'none',
						title: '密码必须为6位'
					});
					return;
				}
				if (this.form.password !== this.form.confirm) {
					uni.showToast({
						icon: 'none',
						title: '两次密码输入不一致'
					});
					return;
				}
				if (this.phoneError) {
					uni.showToast({
						icon: 'none',
						title: this.phoneError
					});
					return;
				}

				try {
					const response = await api.register(this.form.username, this.form.password, this.form.confirm);
					if (response.code === 200) {
						const token = response.data;
						uni.setStorageSync('token', token);

						uni.showToast({
							title: '注册成功',
							icon: 'success',
							duration: 2000
						});
						setTimeout(() => {
							uni.navigateTo({
								url: '/pages/login/login'
							});
						}, 2000);
					} else {
						uni.showToast({
							icon: 'none',
							title: response.msg || '注册失败，请重试'
						});
					}
				} catch (error) {
					uni.showToast({
						icon: 'none',
						title: '网络错误，请稍后重试'
					});
					console.error('Registration Error:', error);
				}
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40rpx;
	}

	.header {
		font-size: 48rpx;
		margin-bottom: 40rpx;
	}

	.input-group {
		width: 90%;
		margin-bottom: 40rpx;
	}

	.button-group {
		width: 90%;
		text-align: center;
	}

	.login-button {
		width: 100%;
		padding: 10rpx;
		background-color: blue;
		color: white;
		font-size: 28rpx;
		border: none;
		border-radius: 10rpx;
		cursor: pointer;
	}

	.login-button:active {
		background-color: darkblue;
	}

	.error-message {
		color: red;
		font-size: 24rpx;
	}

	.error-message.valid {
		color: green;
		/* 正确提示的绿色 */
	}

	.error-message.invalid {
		color: red;
		/* 错误提示的红色 */
	}
</style>