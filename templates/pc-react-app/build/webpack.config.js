const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
	// 虚拟的html文件名 index.html
	filename: 'index.html',
	// 虚拟html的模板为 src下的index.html
	template: path.resolve(__dirname, './public/index.html'),
	minify: {
		collapseWhitespace: true
	}
})

module.exports = {
	// 开发模式
	mode: 'development',
	// 配置入口文件
	entry: './src/index.js',
	// 出口文件目录为根目录下dist, 输出的文件名为main
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][hash:8].js'
	},

	devtool: "source-map",

	resolve: {
		extensions: [".js", ".jsx"]
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{
					loader: "html-loader"
				}]
			},
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{
				test: /\.(sa|sc|c)ss$/,
				use: [{
					loader: MiniCSSExtractPlugin.loader
				}, {
					loader: require.resolve('css-loader'),
					options: {
						modules: true,
						namedExport: true,
						camelCase: true,
						localIdentName: '[name].[hash]'
					}
				}, {
					loader: require.resolve('sass-loader')
				}]
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [{
					loader: "url-loader",
					options: {
						name: "[name]-[hash:5].min.[ext]"
					}
				}]
			}
		]
	},

	// 配置开发服务器, 并配置自动刷新
	devServer: {
		// 根目录下dist为基本目录
		contentBase: path.join(__dirname, 'dist'),
		// 自动压缩代码
		compress: true,
		// 服务端口为9090
		port: 9090,
		// 自动打开浏览器
		open: true
	},
	// 装载虚拟目录插件
	plugins: [
		htmlWebpackPlugin,
		new MiniCSSExtractPlugin({ filename: 'styles/[name].[hash:8].css' }),
		new CopyWebpackPlugin([{
			from: './assets',
			to: 'assets/'
		}]),
		new CleanWebpackPlugin()
	],

	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin({})]
	}
}
