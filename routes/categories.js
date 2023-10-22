var express = require("express");
const categoriesController = require("../controller/user/categoriesController");

var router = express.Router();

/* GET users listing. */
//router.get("/user", userController.getUser);

router.get("/categories", categoriesController.getCategories);
router.post("/categories", categoriesController.createCategories);


module.exports = router;
