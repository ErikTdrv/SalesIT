const router = require("express").Router();
const authController = require("./controllers/authController");

router.get("/", (req, res) => {
  console.log("React API working!");
  res.end();
});
router.use(authController);

module.exports = router;
