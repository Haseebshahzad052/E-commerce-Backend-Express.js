var express = require("express");
const productsController = require("../controller/user/productsController");
const productCategoryController = require("../controller/user/productCategoryController");

var router = express.Router();

/* GET users listing. */
//router.get("/user", userController.getUser);

router.get("/products", productsController.getProducts);
router.get("/products/:id", productsController.getProductById);
router.post("/products", productsController.createProducts);
router.post("/productCategory", productCategoryController.createProductCategory);
router.put("/updateProduct/:id", productsController.updateProduct);
router.delete("/deleteProduct/:id", productsController.deleteProduct);


module.exports = router;
