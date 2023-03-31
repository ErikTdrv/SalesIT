let Computer = require("../models/Computer");
let Monitor = require("../models/Monitor");
let Phone = require("../models/Phone");
let User = require("../models/User");

const addProduct = async (product, userId) => {
  const user = await User.findById(userId);
  let newProduct;
  let newArray;
  product.discount = "0";
  if (product.productName == "Computers") {
    newArray = user?.createdComputers;
    newProduct = await Computer.create(product);
    newArray.push(newProduct._id);
    await User.findByIdAndUpdate(userId, { createdComputers: newArray });
  } else if (product.productName === "Monitors") {
    newArray = user?.createdMonitors;
    newProduct = await Monitor.create(product);
    newArray.push(newProduct._id);
    await User.findByIdAndUpdate(userId, { createdMonitors: newArray });
  } else if (product.productName === "Phones") {
    newArray = user?.createdPhones;
    newProduct = await Phone.create(product);
    newArray.push(newProduct._id);
    await User.findByIdAndUpdate(userId, { createdPhones: newArray });
  }
  return newProduct;
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
    await deleteProductFromUserCreatedProducts(userId, deletedProduct._id);
    return deletedProduct;
  } catch (error) {
    return error;
  }
};
const deleteProductFromUserCreatedProducts = async (userId, productId) => {
  try {
    let user = await User.findById(userId);
    let newArray = user.createdProducts;
    let indexOfProduct = newArray.findIndex(
      (e) => e._id.toString() == productId.toString()
    );
    if (indexOfProduct !== -1) {
      newArray.splice(indexOfProduct, 1);
      await User.findByIdAndUpdate(userId, { createdProducts: newArray });
    }
  } catch (error) {
    return error;
  }
};
const addToCard = async (id, product) => {
  try {
    let user = await User.findById(id);
    let array;

    if (product?.phonename) {
      array = user.addedPhones;
    } else if (product?.paneltype) {
      array = user.addedMonitors;
    } else if (product?.motherboard) {
      array = user.addedComputers;
    }

    let alreadyAdded = array.map((el) => {
      if (el._id === product._id) {
        return true;
      }
    });
    if (alreadyAdded?.includes(true)) {
      throw new Error("Product is already added!");
    }
    array.push(product._id);
    if (product?.phonename) {
      await User.findByIdAndUpdate(id, { addedPhones: array });
    } else if (product?.paneltype) {
      await User.findByIdAndUpdate(id, { addedMonitors: array });
    } else if (product?.motherboard) {
      await User.findByIdAndUpdate(id, { addedComputers: array });
    }
  } catch (error) {
    return error;
  }
};
const removeFromCard = async (userId, productId) => {
  try {
    let user = await User.findById(userId);
    let indexOfComputer = user.addedComputers.findIndex(
      (product) => product._id.toString() === productId.toString()
    );
    let indexOfPhones = user.addedPhones.findIndex(
      (product) => product._id.toString() === productId.toString()
    );
    let indexOfMonitors = user.addedMonitors.findIndex(
      (product) => product._id.toString() === productId.toString()
    );
    if (indexOfComputer !== -1) {
      let productsArray = user.addedComputers;
      productsArray.splice(indexOfComputer, 1);
      await User.findByIdAndUpdate(userId, { addedComputers: productsArray });
    } else if (indexOfPhones !== -1) {
      let productsArray = user.addedPhones;
      productsArray.splice(indexOfPhones, 1);
      await User.findByIdAndUpdate(userId, { addedPhones: productsArray });
    } else if (indexOfMonitors !== -1) {
      let productsArray = user.addedMonitors;
      productsArray.splice(indexOfMonitors, 1);
      await User.findByIdAndUpdate(userId, { addedMonitors: productsArray });
    }
  } catch (error) {
    return error;
  }
};
const getCardProducts = async (userId) => {
  try {
    let user = await User.findById(userId)
      .populate("addedMonitors")
      .populate("addedPhones")
      .populate("addedComputers");
    let array = [
      ...user.addedComputers,
      ...user.addedMonitors,
      ...user.addedPhones,
    ];
    return array;
  } catch (error) {
    return error;
  }
};
const getUserOwnProducts = async (userId) => {
  try {
    let user = await User.findById(userId);
    let products = [...user.createdComputers, ...user.createdMonitors, ...user.createdPhones]
    return products;
  } catch (error) {
    return error;
  }
};
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
      updatedProduct = await Computer.findByIdAndUpdate(
        { _id: productId },
        data,
        { runValidators: true }
      );
    }
    return updatedProduct;
  } catch (error) {
    return error;
  }
};
const addDiscount = async (
  discountPercentage,
  productId,
  productType,
  userId
) => {
  try {
    if (productType === "Computers") {
      await Computer.findByIdAndUpdate(productId, {
        discount: discountPercentage,
      });
    } else if (productType === "Monitors") {
      await Monitor.findByIdAndUpdate(productId, {
        discount: discountPercentage,
      });
    } else if (productType === "Phones") {
      await Phone.findByIdAndUpdate(productId, {
        discount: discountPercentage,
      });
    }
    let user = await User.findById(userId);
    //Updating discounts manually as there is no ref in the model
    let createdProductsArr = user.createdProducts;
    let newCreatedProduct = createdProductsArr.find(
      (product) => product._id.toString() === productId.toString()
    );
    newCreatedProduct.discount = discountPercentage;
    let indexOfCreatedProduct = createdProductsArr.findIndex(
      (product) => product._id.toString() === productId.toString()
    );
    createdProductsArr.splice(indexOfCreatedProduct, 1, newCreatedProduct);

    await User.findByIdAndUpdate(userId, {
      createdProducts: createdProductsArr,
    });
  } catch (error) {
    return error;
  }
};
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
