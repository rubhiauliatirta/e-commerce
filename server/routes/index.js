const routes = require("express").Router();

routes.use("/users", require("./users"));
routes.use("/products", require("./products"));

module.exports = routes