const path = require('path')

module.exports = {
  entry:"./src/index.js",
  output:{
    filename:"zhangle.js",
    // 这里只能绝对路径
    path:path.resolve(__dirname,'./build')
  },
  module:{
    rules:[
      // 正则表达式
      {  
        test: /\.css$/,
        // loader:"css-loader"
        // webpack是从后往前处理的
        use:[
          'style-loader',
          'css-loader',
          // 上面是改种的简写
          // { loader:"css-loader" }
        ]
      }
    ]
  }
}