const path = require('path')
const DemoWebpackPlugin = require('./demo-webpack-plugin')
module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'development',
  // 指定loader查找文件路径，查找顺序从左往右
  resolveLoader: {
    modules: ['node_modules', './']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'syncLoader',
            options: {
              message: '通过面试'
            },
          },
          {
            loader: 'asyncLoader'
          }
        ]
      }
    ]
  },
  plugins: [
    new DemoWebpackPlugin()
  ]
}