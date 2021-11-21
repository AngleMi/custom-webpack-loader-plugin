const loaderUtils = require('loader-utils')
module.exports = function (source) {
  // source += '原理很简单'
  // return  `${source}`
  const options = loaderUtils.getOptions(this)
  console.log('options====>', options)
  source += options.message
  //可以传递更详细的信息
  this.callback(null, source)
}