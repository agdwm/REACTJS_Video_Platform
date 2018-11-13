const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');


module.exports = () => {
	// call dotenv and it will return an Object with a parsed key 
	const env = dotenv.config().parsed;
	
	// reduce it to a nice object, the same as before
	const envKeys = Object.keys(env).reduce((prev, next) => {
	  prev[`process.env.${next}`] = JSON.stringify(env[next]);
	  return prev;
	}, {});
  
	return {
		entry: {
		  "home": path.resolve(__dirname, 'src/entries/home.js'),
		},
		output: {
		  path: path.resolve(__dirname, 'dist'),
		  filename: 'js/[name].js'
		},
		devServer: {
		  port: 9000,
		},
		module: {
		  rules: [
			{
			  // test: que tipo de archivo quiero reconocer,
			  // use: que loader se va a encargar del archivo
			  test: /\.(js|jsx)$/,
			  exclude: /(node_modules)/,
			  use: {
				loader: 'babel-loader',
				options: {
				  presets: ['es2015', 'react', 'stage-2'],
				}
			  },
			},
			{
			  test: /\.css$/,
			  use: ['style-loader', 'css-loader']
			},
			{
			  test: /\.(jpg|png|gif|svg)$/,
			  use: {
				loader: 'url-loader',
				options: {
				  limit: 1000000,
				  fallback: 'file-loader',
				  name: 'images/[name].[hash].[ext]',
				}
			  }
			},
		  ]
		},
		plugins: [
			new webpack.DefinePlugin(envKeys)
		]
	}
}
