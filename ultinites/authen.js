var jwt =require('jsonwebtoken')

exports.authenticate = function(req,res,next){
let {token} =req.session
if(token){
    jwt.verify(token, process.env.JWT_KEY , function(err, decoded) {
            if(err){
                res.redirect('/Login')
            }else{
                next()
            }
    });
}else{
    res.redirect('/Login')
}
}