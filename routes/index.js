const router = require("express").Router();

const User = require("./userRouter");
const Car = require("./carRouter");
const { systemController } = require("../controllers");

router.use("/users", User);
router.use("/cars", Car);
router.use("/health-check", systemController.healthCheck);
router.use(systemController.onLost);

module.exports = router;