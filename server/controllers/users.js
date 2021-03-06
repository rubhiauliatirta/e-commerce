const User = require("../models/user");
const tokenHelper = require("../helpers/tokenHandler")
const encryption = require("../helpers/encryption")

class UserController{
    static login(req,res,next){
        User.findOne({email: req.body.email})
        .then(result=>{
            if(!result){
                throw new Error("Email is Invalid!")
            }else{
                let token = tokenHelper.createToken({
                    _id: result._id,
                    email: result.email
                })
                if(encryption.validatePassword(req.body.password,result.password)){
                    res.status(200).json(composeReturn(token,result))
                }else{
                    throw new Error("Password is Invalid!")
                }
            }
        })
        .catch(err=>{
            next(err);
        })
    }
    static register(req,res,next){
        let body = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            hackpay:0
        }
        if(req.body.admin_password){
            if(req.body.admin_password === process.env.ADMIN_PASSWORD){
                body.role = "admin";
            }else{
                next(new Error("Incorrect password for register as admin"))
            }
        }
        User.create(body)
        .then(result=>{
            let token = tokenHelper.createToken({
                _id: result._id,
                email: result.email
            })
 
            res.status(201).json(composeReturn(token,result))
        })
        .catch(err=>{
            next(err)
        })
    }
    static logout(req,res,next){
        res.status(200).json({
            message: "Successfully logout",
            accountType: req.body.user.accountType
        })
    }
    static getUser(req,res,next){
        let user ={}
        try{
            user = {
                accountType:req.body.user.accountType,
                imageUrl:req.body.user.imageUrl,
                name: req.body.user.name,
                role: req.body.user.role,
                hackpay: req.body.user.hackpay
            }
        }
        catch(err){
            next(err)
        }
   
        
        res.status(200).json(user)
    }
    static update(req,res,next){
       
            let updateVal = {};
            req.file && (updateVal.imageUrl = req.file.cloudStoragePublicUrl) 
            req.body.hackpay && (updateVal.hackpay = req.body.hackpay);

            User.findByIdAndUpdate(req.params.user._id,updateVal,{new:true})
            .then(result=>{
                res.status(200).json(result);
            })
            .catch(err=>{
                next(err)
            })
    }
}
function composeReturn(token,result){
  
    return {
        token:token,
        name: result.name,
        imageUrl: result.imageUrl,
        role: result.role,
        hackpay: result.hackpay
    }
    
}
module.exports = UserController;