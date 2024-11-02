const router = require("express").Router();

const { carController } = require("../controllers");
const { auth } = require("../middleware/authenticate");

router.get("/", carController.getAllCars);
router.get("/:id", carController.getCarbyId);
router.post("/create", auth(["Admin","Super Admin"]), carController.createCar);
router.post("/update", auth(["Admin","Super Admin"]), carController.updateCar);

module.exports = router;