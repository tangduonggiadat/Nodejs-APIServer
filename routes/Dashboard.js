var express = require('express');
var router = express.Router();
var auth =require('../ultinites/authen');
var upload = require('../ultinites/upload')
var roomsController = require('../controller/RoomsControllers');
var categoryController = require('../controller/categoryControllers')
/* GET Dashboard page. */
router.get('/',auth.authenticate, function(req, res, next) {
  res.render('index');
});
//CATEGORY
/* GET CATEGORY page. */
router.get('/Category',auth.authenticate,async function(req, res, next) {
    let ListLP =await categoryController.getListCategories()
    res.render('Category',{LoaiPhong:ListLP});
  });
  /* GET ADD Cate. */
router.get('/Category/Add-Category',auth.authenticate,function(req, res, next) {
  res.render('AddCate');
});

  /* Post ADD Category. */
router.post('/Category/Add-Category',auth.authenticate,async function(req, res, next) {
   await categoryController.addNew(req.body)
    res.redirect('/Dashboard/Category')
  });
   /* GET Edit Category. */
router.get('/Category/EditCates/:id',auth.authenticate, async function(req, res, next) {
  let id = req.params.id
  let cate = await categoryController.getIDCategories(id)
   res.render('EditCate',{cate :cate});
 });
 /* Post Edit Category. */
router.post('/Category/EditCates/:id',auth.authenticate,async function(req, res, next) {
   let {id }=req.params
   await categoryController.edit(id,req.body)
  res.redirect('/Dashboard/Category')
});
 /*  delete Category. */
 router.delete('/Category/delete/:id',auth.authenticate,async function(req, res, next) {
  let {id} =req.params
  await categoryController.remove(id)
  res.send({res:true})
});


  //ROOM
  /* GET Rooms page. */
router.get('/Rooms',auth.authenticate,async function(req, res, next) {
  let List =await roomsController.getListRooms()
  res.render('Rooms',{ListRooms: List});
});
/* GET ADD Rooms. */
router.get('/Rooms/Add-Rooms',auth.authenticate, async function(req, res, next) {
  let LoaiPhong = await categoryController.getListCategories()
  res.render('AddRooms',{LoaiPhong});
});

var middle = [auth.authenticate,upload.single('img')]
/* Post ADD Rooms. */
router.post('/Rooms/Add-Rooms',middle,async function(req, res, next) {
  let { body } = req
  if (req.file) {
    let imgUrl = req.file.originalname
    body = {...body, img: imgUrl}
  }
   await roomsController.addNew(body)
    res.redirect('/Dashboard/Rooms')
  });
  /* GET Edit Rooms. */
router.get('/Rooms/EditRoom/:id',middle,async function(req, res, next) {
  let id = req.params.id
  let room =await roomsController.getRoomsById(id)
  let LoaiPhong =await categoryController.getListCategories()
   res.render('EditRooms',{room :room,LoaiPhong});
 });
 /* Post Edit Rooms. */
router.post('/Rooms/EditRoom/:id',middle,auth.authenticate,async function(req, res, next) {
   let {id }=req.params
   let {body} = req
   if (req.file) {
     let imgUrl = req.file.originalname
     body = {...body, img: imgUrl}
   }
   await roomsController.edit(id, body)
   res.redirect('/Dashboard/Rooms')
 });
  /*  delete Rooms. */
router.delete('/Rooms/delete/:id',auth.authenticate,async function(req, res, next) {
   let {id} =req.params
   await roomsController.remove(id)
   res.send({res:true})
 });
  /* GET Logout page. */
router.get('/Logout2', auth.authenticate,function(req, res, next) {
    req.session.destroy(function(err) {
      res.render('Login')
    })
   
  });
module.exports = router;