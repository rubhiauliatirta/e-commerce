const routes = require("express").Router();
const auth = require("../middlewares/auth");
const UserController = require("../controllers/users");
// const googleSignIn = require("../middlewares/thirdpartylogin");
// const upload = require("../helpers/images")

//REST API HERE
routes.post("/login", UserController.login)
routes.post("/register", UserController.register)
routes.post("/logout", auth.authentication, UserController.logout);
routes.get("/profile", auth.authentication, UserController.getUser);



module.exports = routes;