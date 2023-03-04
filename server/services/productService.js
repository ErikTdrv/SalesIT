let Computer = require("../models/Computer")
let Monitor = require("../models/Monitor")
let Phone = require("../models/Phone")

const addProduct = async (product) => {
    if(product.productName == 'Computers'){
        return await Computer.create(product)
    }
}
module.exports = {
    addProduct
}