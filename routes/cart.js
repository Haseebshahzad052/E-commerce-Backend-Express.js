var express = require("express");
const cartController = require("../controller/user/cartController");
var router = express.Router();

/* GET users listing. */
router.post("/add/:userID/:productID", cartController.addProductToCart);
// router.post("/createUser", userController.createUser);

router.delete("/remove/:userID/:productID", cartController.removeProductFromCart);

module.exports = router;