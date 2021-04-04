const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
      '@rm': path.resolve('src/redux/modules')
    }
  }
}
