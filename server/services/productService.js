let Computer = require("../models/Computer")
let Monitor = require("../models/Monitor")
let Phone = require("../models/Phone")

const addProduct = async (product) => {
    console.log(product)
    if(product.productName == 'Computers'){
        return await Computer.create(product)
    }else if(product.productName === 'Monitors'){
        return await Monitor.create(product)
    }else if(product.productName === 'Phones'){
        return await Phone.create(product)
    }
}
module.exports = {
    addProduct
}