export default {
	data() {
		return {
			page: 1,
			limit: 8,
			totalnum: 0,
			pageData: [],
			pageLoading: false,
			hasMore: true,
			searchParams:{}
		};
	},
	computed: {
		queryParams() {
			const filteredSearchParams = Object.fromEntries(
				Object.entries(this.searchParams).filter(([key, value]) => value !== '')
			);
			return {
				page: this.page,
				limit: this.limit,
				...filteredSearchParams
			};
		}
	},
	methods: {
		async loadPageData() {
			if (!this.hasMore || this.pageLoading) return;

			this.pageLoading = true;
			try {
				const response = await this.fetchData(this.queryParams);
				this.querySuccess(response);
			} catch (error) {
				this.handleFetchError(error);
			} finally {
				this.pageLoading = false;
			}
		},
		async fetchData(params) {
			throw new Error('fetchData 方法未实现');
		},
		querySuccess(data) {
			if (data?.listdata) {
				this.pageData = this.page === 1 ? data.listdata : this.pageData.concat(data.listdata);
				this.totalnum = data.totalnum || 0;
				this.hasMore = this.pageData.length < this.totalnum;
			}
		},
		handleScrollToLower() {
			if (!this.pageLoading && this.hasMore) {
				this.page += 1;
				this.loadPageData();
			}
		},
		handleFetchError(error) {
			console.error('Error loading data:', error);
		},
		resetPagination() {
			this.page = 1;
			this.pageData = [];
			this.totalnum = 0;
			this.hasMore = true;
		},
		reloadData() {
			this.resetPagination();
			this.loadPageData();
		}
	}
}