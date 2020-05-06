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
	// 虚拟html的模板为 public 下的index.html
	template: './public/index.html',
	minify: {
		collapseWhitespace: true
	}
})

module.exports = {
	// 配置入口文件
	entry: './src/index.js',
	// 出口文件目录为根目录下dist, 输出的文件名为main
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][hash:8].js'
	},

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
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			<% if (processor === 'Sass') { %>
			{
				test: /\.s(a|c)ss$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'sass-loader'
				],
			},
			<% } %>
			<% if (processor === 'Less') { %>
			{
				test: /\.less$/,
					use: [
						'style-loader',
						{ loader: 'css-loader', options: { importLoaders: 1 } },
						'less-loader'
					],
			},
			<% } %>
			<% if (processor === 'Stylus') { %>
				{
					test: /\.styl$/,
						use: [
							'style-loader',
							{ loader: 'css-loader', options: { importLoaders: 1 } },
							'stylus-loader'
						],
				},
			<% } %>
			{
				test: /\.js[x]?$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [{
					loader: "url-loader",
					options: {
						name: "[name]-[hash:5].min.[ext]",
						limit: 102400
					}
				}]
			}
		]
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
