var express = require("express");
const userController = require("../controller/user/userController");

const authController = require("../controller/user/common/authenticationController");
var router = express.Router();

/* GET users listing. */
//router.get("/user", userController.getUser);
router.post("/register", userController.createUser);

router.post("/login", authController.login);

module.exports = router;
