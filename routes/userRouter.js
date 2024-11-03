const router = require("express").Router();

const { userController } = require("../controllers");
const { auth } = require("../middleware/authenticate");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/create-admin", auth(["Super Admin"]), userController.createAdmin);
router.post("/current-user", auth(["Member", "Admin", "Super Admin"]), userController.currentUser);

module.exports = router;