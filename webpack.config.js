const path = require('path')
const uglify = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const dev = process.env.NODE_ENV === "dev"

let config = {
  mode: dev ? 'development' : 'production',
  watch: dev,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: dev ? 'exy.js' : 'exy.min.js'
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          dev ? 'stylus-loader?paths=node_modules/bootstrap-stylus/stylus/' : 'stylus-loader?paths=node_modules/bootstrap-stylus/stylus/&compress'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: dev ? 'exy.css' : 'exy.min.css',
      chunkFilename: dev ? '[id].css' : '[id].[hash].css',
    })
  ]
};

if (!dev) {
  config.plugins.push(new uglify())
}

module.exports = config