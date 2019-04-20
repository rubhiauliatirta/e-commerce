const routes = require("express").Router();
const auth = require("../middlewares/auth");
const ProductController = require("../controllers/products");
const upload = require("../helpers/images")

//REST API HERE
routes.get("/", ProductController.findAll)
routes.post("/", auth.authentication, auth.adminOnly, upload.multer.single("image"),upload.sendUploadToGCS, ProductController.create)
routes.delete("/:productId", auth.authentication, auth.adminOnly, ProductController.delete)
routes.patch("/:productId", auth.authentication, auth.adminOnly, ProductController.update)


module.exports = routes;