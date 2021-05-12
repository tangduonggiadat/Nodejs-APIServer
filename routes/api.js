var express = require('express');
var router = express.Router();
var roomsController = require('../controller/RoomsControllers');
var categoryController = require('../controller/categoryControllers')

//send json rooms
router.get('/Rooms-send',async function(req, res, next) {
  let List =await roomsController.getListRooms()
  res.json(List);
});
//send json cate
router.get('/Category-send',async function(req, res, next) {
  let ListLP =await categoryController.getListCategories()
  res.json({ListLP});
});

router.get('/RoomsFeil',async function(req, res, next) {
  let List =await roomsController.getRoomsByIdSelectFeil()
  res.json(List);
});

module.exports = router;