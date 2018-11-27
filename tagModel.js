
var mongoose = require('mongoose');

// setup schema
var tagSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

// export tag model
var Tag = module.exports = mongoose.model('tag', tagSchema);

module.exports.get = function (callback, limit) {
  Tag.find(callback).limit(limit);
}
