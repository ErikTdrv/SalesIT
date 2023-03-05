const router = require("express").Router();
const uploader = require("../services/multer");
const cloudinary = require('cloudinary');
const { addProduct, getAllProducts } = require("../services/productService");

router.post('/add-product',  uploader.array('productPhotos'), async (req, res) => {
    let body = req.body;
    let { productName, images } = req.body;
    try {
        console.log(body)
        let imagesArr = [];
        if(!images){
            throw new Error('Images are required!')
        }
        for(let el of images){
            const uploaded = await cloudinary.v2.uploader.upload(el, { fetch_format: "auto", folder: productName });
            let objectToPush =  {
                imageUrl: uploaded.url,
                imageId: uploaded.public_id,
            }
            imagesArr.push(objectToPush)
        }
        body.images = imagesArr
        let product = await addProduct(body)
        res.status(201).json(product)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
    res.end()
})
router.get('/products', async (req, res) => {
    try {
        let products = await getAllProducts();
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error retrieving data');
    }
})
module.exports = router;