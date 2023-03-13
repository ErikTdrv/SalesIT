const router = require("express").Router();
const uploader = require("../services/multer");
const cloudinary = require('cloudinary');
const { addProduct, getAllProducts, getOneProduct, deleteOneProduct } = require("../services/productService");


router.post('/add-product',  uploader.array('productPhotos'), async (req, res) => {
    let body = req.body;
    let { productName, images } = req.body;
    try {
        let imagesArr = [];
        if(images){
            for(let el of images){
                const uploaded = await cloudinary.v2.uploader.upload(el, { fetch_format: "auto", folder: productName });
                let objectToPush =  {
                    imageUrl: uploaded.url,
                    imageId: uploaded.public_id,
                }
                imagesArr.push(objectToPush)
            }
        }
        body.images = imagesArr
        body.owner = req.username;
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
router.get('/products/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let product = await getOneProduct(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error retrieving data');
    }
})
router.post('/products/:id', async (req, res) => {
    try {
        let _id = req.params.id;
        let { type } = req.body;
        let deletedProduct = await deleteOneProduct(_id, type)
        res.status(200).json(deletedProduct)
    } catch (error) {
        res.status(500).send('Error retrieving data');
    }
})
module.exports = router;