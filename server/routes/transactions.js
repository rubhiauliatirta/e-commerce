const routes = require("express").Router();
const auth = require("../middlewares/auth");
const TransactionController = require("../controllers/transactions");

//REST API HERE
routes.get("/", auth.authentication, TransactionController.findAll)
routes.post("/", auth.authentication, auth.customerOnly,  TransactionController.create)
routes.patch("/:transactionId", auth.authentication, TransactionController.update)


module.exports = routes;