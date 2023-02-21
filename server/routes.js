const router = require('express').Router();

    router.get('/', (req, res) => {
        console.log('React API working!')
        res.end()
    })
    
module.exports = router;
