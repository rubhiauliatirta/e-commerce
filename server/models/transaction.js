const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

let transactionSchema = new Schema({
    userId: {
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    carts:[{
        type: Schema.Types.ObjectId, 
        ref: 'Cart'
    }],
    status:{
        type:String,
        enum:["topay","tosend","sent","delivered"],
        required:true
    },
    total:{
        type: Number,
        required:true
    }
},{versionKey: false})


const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction