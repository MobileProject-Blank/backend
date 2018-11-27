
var mongoose = require('mongoose');

// setup schema
var eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

// export event model
var Event = module.exports = mongoose.model('event', eventSchema);

module.exports.get = function (callback, limit) {
  Event.find(callback).limit(limit);
}