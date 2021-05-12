var express = require('express');
var router = express.Router();
var jwt =require('jsonwebtoken');
var auth =require('../ultinites/authen');
var JSAlert = require("js-alert");
var userController = require('../controller/UserControllers')

/* GET home page. */
router.get('/',auth.authenticate, function(req, res, next) {
  //Kiemtra Login

  res.redirect('/Dashboard')
});

/* GET Login page. */
router.get('/Login', function(req, res, next) {
  res.render('Login')
});
/* Post Login page. */
router.post('/Login',async function(req, res, next) {
  let {username,password}=req.body
  let user = await userController.login(username, password)

  if(user){
    var token = jwt.sign({user},process.env.JWT_KEY);
    req.session.token=token
    res.redirect('/Dashboard')
  }else{
    res.redirect('/Login')
    JSAlert.alert("Sai password!"); 
  }
});
/* GET Logout page. */
router.get('/Logout', auth.authenticate,function(req, res, next) {
  req.session.destroy(function(err) {
    res.render('Login')
  })
 
});
module.exports = router;
