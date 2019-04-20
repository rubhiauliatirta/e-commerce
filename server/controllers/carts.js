const Cart = require("../models/cart");

class CartController{
    static findAll(req,res,next){
        let userId = req.params.user._id
        Cart.find({userId:userId,isCheckout:false})
        .then(results=>{
            res.status(200).json(results);
        })
        .catch(error=>{
            next(error)
        })
    }
    static create(req,res,next){
        let body = {
            userId: req.params.user._id,
            product: req.params.productId,
        }
        Cart.create(body)
        .then(result=>{
            res.status(201).json(result);
        })
        .catch(error=>{
            next(error)
        })
    }
    static delete(req,res, next){
        let id = req.params.cartId;

        Cart.findByIdAndDelete(id)
        .then(result=>{
            if(result){
                res.status(200).json({
                    message:"Delete Success"
                })
            }else{
                throw new Error("Item id not found")
            }
            
        })
        .catch(err=>{
            next(err)
        })
    }
    static update(req,res, next){
        let updateVal = {}
        let id = req.params.cartId;
        req.body.isCheckout && (updateVal.isCheckout = req.body.isCheckout);
        req.body.stock && (updateVal.stock = req.body.stock);

        Cart.findByIdAndUpdate(id,updateVal,{new:true})
        .then(result=>{
            res.status(200).json(result);
        })
        .catch(err=>{
            next(err)
        })
    }
}
module.exports = CartController;