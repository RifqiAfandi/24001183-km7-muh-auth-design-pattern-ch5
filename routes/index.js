const router = require("express").Router();

const User = require("./userRouter");
const { systemController } = require("../controllers");

router.use("/users", User);
router.use("/health-check", systemController.healthCheck);
router.use(systemController.onLost);

module.exports = router;