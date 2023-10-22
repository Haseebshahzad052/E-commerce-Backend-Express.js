var express = require("express");
const productsController = require("../controller/user/productsController");

var router = express.Router();

/* GET users listing. */
//router.get("/user", userController.getUser);

router.get("/products", productsController.getProducts);
router.post("/products", productsController.createProducts);


module.exports = router;
