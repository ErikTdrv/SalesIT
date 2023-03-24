let Computer = require("../models/Computer");
let Monitor = require("../models/Monitor");
let Phone = require("../models/Phone");
let User = require("../models/User");

const addProduct = async (product, userId) => {

  const user = await User.findById(userId);
  let newProduct;
  let newArray = user.createdProducts;
  product.discount = '0'
  if (product.productName == "Computers") {
    newProduct = await Computer.create(product);
  } else if (product.productName === "Monitors") {
    newProduct = await Monitor.create(product);
  } else if (product.productName === "Phones") {
    newProduct = await Phone.create(product);
  }
  newArray.push(newProduct)
  await User.findByIdAndUpdate(userId, {createdProducts: newArray});
  return newProduct
};
const getAllProducts = async () => {
  try {
    const computers = await Computer.find({});
    const phones = await Phone.find({});
    const monitors = await Monitor.find({});
    return { computers, phones, monitors };
  } catch (err) {
    console.log(err);
    return err;
  }
};
const getOneProduct = async (_id) => {
  try {
    const computers = await Computer.findOne({ _id }).populate("owner");
    const phones = await Phone.findOne({ _id }).populate("owner");
    const monitors = await Monitor.findOne({ _id }).populate("owner");
    if (computers?.manufacturer.length > 0) {
      return computers;
    } else if (phones?.phonename.length > 0) {
      return phones;
    } else if (monitors?.paneltype.length > 0) {
      return monitors;
    } else {
      throw new Error("No item found!");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
const deleteOneProduct = async (productId, type, userId) => {
  try {
    let deletedProduct;
    if (type === "Phones") {
      deletedProduct = await Phone.findByIdAndDelete(productId);
    } else if (type === "Monitors") {
      deletedProduct = await Monitor.findByIdAndDelete(productId);
    } else if (type === "Computers") {
      deletedProduct = await Computer.findByIdAndDelete(productId);
    }
    await deleteProductFromUserCreatedProducts(userId, deletedProduct._id)
    return deletedProduct;
  } catch (error) {
    return error;
  }
};
const deleteProductFromUserCreatedProducts = async (userId, productId) => {
  try {
    let user = await User.findById(userId);
    let newArray = user.createdProducts;
    let indexOfProduct = newArray.findIndex((e) => e._id.toString() == productId.toString());
    if(indexOfProduct !== -1){
      newArray.splice(indexOfProduct, 1)
      await User.findByIdAndUpdate(userId, {createdProducts: newArray})
    }
  } catch (error) {
    return error
  }
}
const addToCard = async (id, product) => {
  try {
    let user = await User.findById(id);
    let array = user.addedProducts;
    let alreadyAdded = array.map((el) => {
      if (el._id === product._id) {
        return true;
      }
    });
    if (alreadyAdded?.includes(true)) {
      throw new Error("Product is already added!");
    }
    array.push(product);
    await User.findByIdAndUpdate(id, { addedProducts: array });
  } catch (error) {
    return error;
  }
};
const removeFromCard = async (userId, productId) => {
  try {
    let user = await User.findById(userId);
    let productsArray = user.addedProducts;
    let indexOfProduct = productsArray.findIndex(
      (product) => product._id === productId
    );
    productsArray.splice(indexOfProduct, 1);
    await User.findByIdAndUpdate(userId, { addedProducts: productsArray });
  } catch (error) {
    return error;
  }
};
const getCardProducts = async (userId) => {
  try {
    let user = await User.findById(userId);
    return user.addedProducts;
  } catch (error) {
    return error;
  }
};
const getUserOwnProducts = async (userId) => {
  try {
    let user = await User.findById(userId);
    return user.createdProducts;
  } catch (error) {
    return error
  }
}
const editOneProduct = async (data, productId) => {
  try {
    let updatedProduct;
    if (data?.phonename) {
      updatedProduct = await Phone.findByIdAndUpdate(productId, data, {
        runValidators: true,
      });
    } else if (data?.paneltype) {
        updatedProduct = await Monitor.findByIdAndUpdate(productId, data, {
            runValidators: true,
          });
    } else if (data?.motherboard) {
        updatedProduct = await Computer.findByIdAndUpdate({_id: productId}, data, {runValidators: true});
    }
    return updatedProduct;
  } catch (error) {
    return error
  }
};
const addDiscount = async (discountPercentage, productId, productType, userId) => {
  try {
    if(productType === 'Computers'){
      await Computer.findByIdAndUpdate(productId, {discount: discountPercentage})
    }else if(productType === 'Monitors'){
      await Monitor.findByIdAndUpdate(productId, {discount: discountPercentage})
    }else if(productType === 'Phones'){
      await Phone.findByIdAndUpdate(productId, {discount: discountPercentage})
    }
    let user = await User.findById(userId);
    //Updating discounts manually as there is no ref in the model
    let createdProductsArr = user.createdProducts;
    let newCreatedProduct = createdProductsArr.find((product) => (product._id).toString() ===(productId).toString())
    newCreatedProduct.discount = discountPercentage;
    let indexOfCreatedProduct = createdProductsArr.findIndex((product) => (product._id).toString() === (productId).toString());
    createdProductsArr.splice(indexOfCreatedProduct, 1, newCreatedProduct)

    let addedProductsArr = user.addedProducts;
    if(addedProductsArr.length > 0){
      let newAddedProduct = addedProductsArr.find((product) => (product._id).toString() ===(productId).toString())
      newAddedProduct.discount = discountPercentage;
      let indexOfAddedProduct = addedProductsArr.findIndex((product) => (product._id).toString() === (productId).toString());
      addedProductsArr.splice(indexOfAddedProduct, 1, newAddedProduct)
    }
    await User.findByIdAndUpdate(userId, {createdProducts: createdProductsArr, addedProducts: addedProductsArr})
  } catch (error) {
    return error
  }
}
module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  deleteOneProduct,
  addToCard,
  removeFromCard,
  getCardProducts,
  editOneProduct, 
  addDiscount,
  getUserOwnProducts,
};
