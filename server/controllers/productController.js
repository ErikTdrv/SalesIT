const router = require("express").Router();
const uploader = require("../services/multer");
const cloudinary = require('cloudinary');
const { addProduct, getAllProducts, getOneProduct, deleteOneProduct, addToCard, removeFromCard, getCardProducts, editOneProduct, addDiscount } = require("../services/productService");


router.post('/add-product',  uploader.array('productPhotos'), async (req, res) => {
    let body = req.body;
    let { productName, images } = req.body;
    try {
        let imagesArr = [];
        if(!images){
            throw new Error('Images are required!')
        }
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
        body.owner = req.user._id;
        let product = await addProduct(body, req.user._id)
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
        let deletedProduct = await deleteOneProduct(_id, type, req.user._id)
        res.status(200).json(deletedProduct)
    } catch (error) {
        res.status(500).send('Error retrieving data');
    }
})
router.put('/products/:id', async (req, res) => {
    try {
        let _id = req.params.id;
        let product = req.body;
        let editedProduct = await editOneProduct(product, _id)
        res.status(200).json(editedProduct)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})
router.post('/products/:id/add-to-card', async (req, res) => {
    try {
        let { product } = req.body;
        let addedProduct = await addToCard(req.user._id, product)
        res.status(200).json(addedProduct)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})
router.delete('/products/:id/add-to-card', async (req, res) => {
    try {
        let productId = req.params.id;
        await removeFromCard(req.user._id, productId)
        res.status(200).json({message: 'Successfully removed from card!'})
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})
router.post('/products/:id/add-discount', async (req, res) => {
    try {
        let { discountPercentage, productType } = req.body;
        let productId = req.params.id;
        await addDiscount(discountPercentage, productId, productType)
        res.status(200).json({message: 'Successfully added discount!'})
    } catch (error) {
        
    }
})
router.get('/product-card', async (req, res) => {
    try {
        let products = await getCardProducts(req.user._id);
        res.status(200).json(products)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})
module.exports = router;