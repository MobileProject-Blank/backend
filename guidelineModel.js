
var mongoose = require('mongoose');

// setup guideline schema
var glSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Guideline = module.exports = mongoose.model('guideline', glSchema);

module.exports.get = function (callback, limit) {
  Guideline.find(callback).limit(limit);
}
