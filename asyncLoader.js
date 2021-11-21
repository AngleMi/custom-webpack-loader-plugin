const loaderUtils = require('loader-utils')
module.exports = function(source) {
  const options = loaderUtils.getOptions(this)
  const callback = this.async()
  setTimeout(() => {
    source += '顺利上岸'
    callback(null, source)
  }, 1000)
}