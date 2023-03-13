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
const getAllProducts = async () => {
    try {
        const computers = await Computer.find({});
        const phones = await Phone.find({});
        const monitors = await Monitor.find({});
        return ({ computers, phones, monitors });
      } catch (err) {
        console.log(err);
        return err
      }
}
const getOneProduct = async (_id) => {
    try {
        const computers = await Computer.findOne({_id});
        const phones = await Phone.findOne({_id});
        const monitors = await Monitor.findOne({_id});

        if(computers?.manufacturer.length > 0){
            return computers
        }else if(phones?.phonename.length > 0){
            return phones
        }else if(monitors?.paneltype.length > 0){
            return monitors
        }else {
            throw new Error('No item found!')
        }
    } catch (error) {
        console.log(error);
        return error
    }
}
const deleteOneProduct = async (_id, type) => {
    try {
        let deletedProduct;
        
        console.log(type)
        if(type === 'Phones'){
            deletedProduct = await Phone.findByIdAndDelete(_id);
        }else if(type === 'Monitors'){
            deletedProduct = await Monitor.findByIdAndDelete(_id);
        }else if(type === 'Computers'){
            deletedProduct = await Computer.findByIdAndDelete(_id);
        }
        return deletedProduct
    } catch (error) {
        return error
    }
}
module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    deleteOneProduct
}