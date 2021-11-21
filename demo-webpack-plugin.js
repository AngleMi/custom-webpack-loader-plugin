class DemoWebpackPlugin {
  constructor() {
    console.log('plugin init')
  }
  // compiler就是webpack的实例
  apply (compiler) {
    // 一个新的编译(compilation)创建之后（同步）
    // compilation代表每一次执行打包，独立的编译
    compiler.hooks.compile.tap('DemoWebpackPlugin', compilation => {
      console.log(compilation)
    })
    // 生成资源到output目录之前(异步)
    compiler.hooks.emit.tapAsync('DemoWebpackPlugin', (compilation, cb) => {
      compilation.assets['index.md'] = {
        // 文件内容
        source: function () {
          return 'this is a demo for plugin'
        },
        // 文件尺寸
        size: function () {
          return 25
        }
      }
      cb()
    })
  }
}
module.exports = DemoWebpackPlugin