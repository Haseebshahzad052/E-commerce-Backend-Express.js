var express = require("express");
const productsController = require("../controller/user/productsController");

var router = express.Router();

/* GET users listing. */
//router.get("/user", userController.getUser);

router.get("/products", productsController.getProducts);
router.get("/products/:id", productsController.getProductById);
router.post("/products", productsController.createProducts);
router.put("/updateProduct/:id", productsController.updateProduct);
router.delete("/deleteProduct/:id", productsController.deleteProduct);

module.exports = router;
