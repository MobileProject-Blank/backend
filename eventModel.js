
var mongoose = require('mongoose');

// setup event schema
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
  startTime: String,
  endTime: String,
  tag: String,
  link: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Event = module.exports = mongoose.model('event', eventSchema);

module.exports.get = function (callback, limit) {
  Event.find(callback).limit(limit);
}
