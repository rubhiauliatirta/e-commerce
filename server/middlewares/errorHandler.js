const errorHelper = require("../helpers/errorhandling");

module.exports = function(err,req,res,next){
    let errorToSend = errorHelper(err);
    res.status(errorToSend.statusCode).json(errorToSend);

}