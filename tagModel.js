
var mongoose = require('mongoose');

// setup tag schema
var tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Tag = module.exports = mongoose.model('tag', tagSchema);

module.exports.get = function (callback, limit) {
  Tag.find(callback).limit(limit);
}
