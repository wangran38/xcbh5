import request, { UPLOAD_URL } from '@/api/index'

export const useUpload = (opts) => {
	const {
		uploadPath,
		tempFilePaths,
		FormData,
		file
	} = opts;
	
				// const body = {
				// 	"output": "json2"
				// };
	const upload = () => {
		return new Promise(async (resolve, reject) => {
			uni.showLoading({
				title: '上传中',
				mask: true
			})
			uni.uploadFile({
				url: request.UPLOAD_URL + uploadPath,
				name: 'file',
				file: file,
				// FormData.output: 'json2',
				filePath: tempFilePaths,
				formData: { output: 'json2'},
				header: {
					// 'token': getToken()
				},
				success: (res) => {
					uni.showToast({
						title: '上传成功',
					});
					uni.hideLoading();
					resolve(res?.data)
				},
				fail: (err) => {
					console.log(err);
					uni.showToast({
						title: '上传失败',
						icon: 'error'
					});
					uni.hideLoading();
				}
			})
		})
	}

	return {
		upload
	}
}