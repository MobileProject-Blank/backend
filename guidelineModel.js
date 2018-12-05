
var mongoose = require('mongoose');

// setup schema
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

// export guideline model
var Guideline = module.exports = mongoose.model('guideline', glSchema);

module.exports.get = function (callback, limit) {
  Guideline.find(callback).limit(limit);
}
