const router = require("express").Router();

router.post('/add-product', async (req, res) => {
    let body = req.body;
    console.log(body)
    res.end()
})

module.exports = router;