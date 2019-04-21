const routes = require("express").Router();

routes.use("/users", require("./users"));
routes.use("/products", require("./products"));
routes.use("/carts",require("./carts"))
routes.use("/transactions",require("./transactions"))

module.exports = routes