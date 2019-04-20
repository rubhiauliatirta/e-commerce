const tokenHandler = require("../helpers/tokenHandler");
const User = require("../models/user");


module.exports = {
    authentication : function(req,res,next){
        try{
          
            let user = tokenHandler.decodeToken(req.headers.authorization)
            User.findOne({_id:user._id})
            .then(result=>{
                if(result){
                    req.body.user = result;
                    req.params.user = result;                    
                    next()
                }else{
                    throw new Error("User not found")
                }
            })
        }catch(err){
            next(err)
        }
       
    },
    authorization : function(req,res,next){  
        let loginUser = req.body.user ? req.params.user:null

    },
    adminOnly: function(req,res,next){
        let loginUser = req.body.user ? req.params.user:null

        if(loginUser && loginUser.role === "admin"){
            next()
        }else{
            next(new Error("Not Authorized"))
        }

    },
    customerOnly: function(req,res,next){
        let loginUser = req.body.user ? req.params.user:null
        if(loginUser && loginUser.role === "customer"){
            next()
        }else{
            next(new Error("Not Authorized"))
        }
        
    },
    cartAuth: function(req,res,next){
        
    }

}