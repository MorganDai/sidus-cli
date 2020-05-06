const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge(
	baseConfig,
	{
		// 开发模式
		mode: 'development',
		devtool: 'inline-source-map',

		// 配置开发服务器, 并配置自动刷新
		devServer: {
			// 根目录下dist为基本目录
			contentBase: './dist',
			// 自动压缩代码
			compress: true,
			// 服务端口为9090
			port: 9090,
			// 自动打开浏览器
			open: true,
			historyApiFallback: true,
			hot: true
		},
	}
)
