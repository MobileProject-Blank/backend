
// ini express router
let router = require('express').Router();

// set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to BLANK RESTHub!',
    });
});

// import event controller
var eventController = require('./eventController');
var tagController = require('./tagController');
var guidelineController = require('./guidelineController');

// event routes
router.route('/events')
.get(eventController.index)
.post(eventController.new);

router.route('/events/:event_id')
.get(eventController.view)
.patch(eventController.update)
.put(eventController.update)
.delete(eventController.delete);

// tag routes
router.route('/tags')
.get(tagController.index)
.post(tagController.new);

router.route('/tags/:tag_id')
.get(tagController.view)
.patch(tagController.update)
.put(tagController.update)
.delete(tagController.delete);

// guideline routes
router.route('/guidelines')
.get(guidelineController.index)
.post(guidelineController.new);

router.route('/guidelines/:guideline_id')
.get(guidelineController.view)
.patch(guidelineController.update)
.put(guidelineController.update)
.delete(guidelineController.delete);

// export API routes
module.exports = router;
