const routes = require("express").Router();
const auth = require("../middlewares/auth");
const CartController = require("../controllers/products");


//REST API HERE
routes.get("/", auth.authentication, auth.authorization, CartController.findAll)
// routes.post("/", auth.authentication, auth.adminOnly, upload.multer.single("image"),upload.sendUploadToGCS, ProductController.create)
// routes.delete("/:productId", auth.authentication, auth.adminOnly, ProductController.delete)
// routes.patch("/:productId", auth.authentication, auth.adminOnly, ProductController.update)


module.exports = routes;