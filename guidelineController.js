Guideline = require('./guidelineModel');

// Handle index actions
exports.index = function (req, res) {
  Guideline.get(function (err, guidelines) {
    if (err) {
      res.json({
        status: "500",
        message: err,
      });
    }
    res.json({
      status: "200",
      message: "Guideline retrieved successfully",
      data: guidelines
    });
  });
};

// handle create guideline actions
exports.new = function (req, res) {
  var guideline = new Guideline();
  guideline.title = req.body.title ? req.body.title : guideline.title;
  guideline.description = req.body.description;

  // save the guideline and check for errors
  guideline.save(function (err) {
    // if (err)
    // res.json(err);
    res.json({
      message: 'New guideline created',
      data: guideline
    });
  });
};

// handle view guideline info
exports.view = function (req, res) {
  Guideline.findById(req.params.guideline_id, function (err, guideline) {
    if (err)
      res.send(err);
    res.json({
      message: 'Guideline details loading..',
      data: guideline
    });
  });
};

// update guideline info
exports.update = function (req, res) {

  Guideline.findById(req.params.guideline_id, function (err, guideline) {
    if (err)
      res.send(err);

    guideline.title = req.body.title ? req.body.title : guideline.title;
    guideline.description = req.body.description;

    // save the guideline and check for errors
    guideline.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Guideline info updated',
        data: guideline
      });
    });
  });
};

// handle delete guideline
exports.delete = function (req, res) {
  Guideline.remove({
    _id: req.params.guideline_id
  }, function (err, guideline) {
    if (err)
      res.send(err);
    res.json({
      status: "200",
      message: 'Guideline deleted'
    });
  });
};
