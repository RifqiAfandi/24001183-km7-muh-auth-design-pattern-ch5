const router = require("express").Router();

const { carController } = require("../controllers");
const { auth } = require("../middleware/authenticate");

router.get("/", carController.getAllCars);

module.exports = router;