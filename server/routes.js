const router = require("express").Router();
const authController = require("./controllers/authController");
const productController = require("./controllers/productController")
router.get("/", (req, res) => {
  res.send('React API working')
  res.end();
});
router.use(authController);
router.use(productController)
module.exports = router;
