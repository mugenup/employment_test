const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { watch } = require('fs')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: 'svg-url-loader'
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'js',
            target: 'es2015'
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './public/favicon.ico',
      filename: 'index.html'
    })
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
        watch: true
      }
    ],
    compress: false,
    port: 3000,
    hot: true
  }
}
