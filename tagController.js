
// import tag model
Tag = require('./tagModel');

// Handle index actions
exports.index = function (req, res) {
  Tag.get(function (err, tags) {
    if(err) {
      res.json({
        status: "500",
        message: err,
      });
    }
    res.json({
      status: "200",
      message: "Tags retrieved successfully",
      data: tags
    });
  });
};

// handle create tag actions
exports.new = function (req, res) {
  var tag = new Tag();
  // tag.id = req.body.id;
  tag.name = req.body.name ? req.body.name : tag.name;

  // save the tag and check for errors
  tag.save(function (err) {
    // if (err)
    // res.json(err);
    res.json({
      message: 'New tag created',
      data: tag
    });
  });
};

// handle view tag info
exports.view = function (req, res) {
  Tag.findById(req.params.tag_id, function (err, tag) {
    if (err)
    res.send(err);
    res.json({
      message: 'Tag details loading..',
      data: tag
    });
  });
};

// handle update tag info
exports.update = function (req, res) {

  Tag.findById(req.params.tag_id, function (err, tag) {
    if (err)
    res.send(err);

    tag.name = req.body.name ? req.body.name : tag.name;

    // save the tag and check for errors
    tag.save(function (err) {
      if(err)
      res.json(err);
      res.json({
        message: 'Tag info updated',
        data: tag
      });
    });
  });
};

// handle delete tag
exports.delete = function (req, res) {
  Tag.remove({
    _id: req.params.tag_id
  }, function (err, tag) {
    if (err)
    res.send(err);
    res.json({
      status:"200",
      message: 'Tag deleted'
    });
  });
};
