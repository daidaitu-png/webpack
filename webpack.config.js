const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	entry: "./app.js",
	output: {
		filename: "[contenthash].js",
		path: path.resolve(__dirname, "./dist"),
		clean: true,
		publicPath: "/",
	},
	devtool: "inline-source-map",
	devServer: {
		port: 8080,
		hot: true, // 热模块替换 HMR
		liveReload: true, // 热加载
		host: "0.0.0.0",
		static: path.resolve(__dirname, "./dist"),
		compress: true,
		headers: {
			"X-Access-Token": "sdad",
		},
		proxy: {
			"/api": "http://localhost:9000",
		},
		// https:true
		http2: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(c|le)ss$/,
				use: ["style-loader", "css-loader", "less-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
		// new ESLintPlugin(),
	],
	performance: {
		hints: false,
	},
};
