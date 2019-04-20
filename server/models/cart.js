
const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

let cartSchema = new Schema({
    userId:{
        type: String,
        required:true
    },
    product: { type: Schema.Types.ObjectId, ref: 'Product'},
    isCheckout:{
        type:Boolean,
        default:false,
    },
    count:{
        type: Number,
        min: 0
    }
},{versionKey: false})


const Product = mongoose.model("Product", productSchema);

module.exports = Product