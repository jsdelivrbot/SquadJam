var crypto = require('crypto-browserify')
if (typeof crypto.randomFill === 'function' && typeof crypto.randomFillSync === 'function') {
  exports.randomFill = crypto.randomFill
  exports.randomFillSync = crypto.randomFillSync
} else {
  module.exports = require('./browser')
}
