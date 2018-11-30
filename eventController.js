
// import event model
Event = require('./eventModel');

// Handle index actions
exports.index = function (req, res) {
  Event.get(function (err, events) {
    if(err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Events retrieved successfully",
      data: events
    });
  });
};

// handle create event actions
exports.new = function (req, res) {
  var event = new Event();
  // event.id = req.body.id;
  event.title = req.body.title ? req.body.title : event.title;
  event.date = req.body.date;
  event.description = req.body.description;
  event.startTime = req.body.startTime;
  event.endTime = req.body.endTime;

  // save the event and check for errors
  event.save(function (err) {
    // if (err)
    // res.json(err);
    res.json({
      message: 'New event created',
      data: event
    });
  });
};

// handle view event info
exports.view = function (req, res) {
  Event.findById(req.params.event_id, function (err, event) {
    if (err)
    res.send(err);
    res.json({
      message: 'Event details loading..',
      data: event
    });
  });
};

// handle update event info
exports.update = function (req, res) {

  Event.findById(req.params.event_id, function (err, event) {
    if (err)
    res.send(err);

    event.title = req.body.title ? req.body.title : event.title;
    event.date = req.body.date;
    event.description = req.body.description;
    event.startTime = req.body.startTime;
    event.endTime = req.body.endTime;

    // save the event and check for errors
    event.save(function (err) {
      if(err)
      res.json(err);
      res.json({
        message: 'Event info updated',
        data: event
      });
    });
  });
};

// handle delete event
exports.delete = function (req, res) {
  Event.remove({
    _id: req.params.event_id
  }, function (err, event) {
    if (err)
    res.send(err);
    res.json({
      status:"success",
      message: 'Event deleted'
    });
  });
};
