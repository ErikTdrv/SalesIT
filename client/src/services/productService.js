const API_URL = process.env.REACT_APP_API_URL;

export const addProduct = async (product, productName) => {
    product.productName = productName;
    try {
        let request = await fetch(`${API_URL}/add-product`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(product),
        });
        let data = await request.json();
        if(request.ok){
          return data
        }else {
          throw new Error(data.error)
        }
    } catch (error) {
        return error
    }
};
export const getAllProducts = async () => {
  try {
    let response = await fetch(`${API_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    let data = await response.json();
    if(response.ok){
      return data
    }else {
      throw new Error(data.error)
    }
} catch (error) {
  console.log(error)
    return error
}
}
export const getOneProduct = async (_id) => {
  try {
    let response = await fetch(`${API_URL}/products/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    let data = await response.json();
    if(response.ok){
      return data
    }else {
      throw new Error(data.error)
    }
} catch (error) {
    return error
}
}
export const deleteOneProduct = async (_id, type) => {
  try {
    let response = await fetch(`${API_URL}/products/${_id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({type})

    })
    let data = await response.json();
    if(response.ok){
      return data
    }else {
      throw new Error(data.error)
    }
  } catch (err) {
    return err
  }
}
export const addProductToCard = async (_id, product) => {
  try {
    let response = await fetch(`${API_URL}/products/${_id}/add-to-card`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({product})

    })
    let data = await response.json();
    if(response.ok){
      return data
    }else {
      throw new Error(data.error)
    }
  } catch (err) {
    return err
  }
}
export const removeProductFromCard = async (_id) => {
  try {
    let response = await fetch(`${API_URL}/products/${_id}/add-to-card`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    let data = await response.json();
      if(response.ok){
        return data
      }else {
        throw new Error(data.error)
      }
  } catch (error) {
    return error
  }
}
export const getProductCard = async () => {
  try {
    let response = await fetch(`${API_URL}/product-card`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    let data = await response.json();
    if(response.ok){
      return data
    }else {
      throw new Error(data.error)
    }
  } catch (error) {
    return error
  }
}
export const editOneProduct = async (product, productId) => {
  try {
    let response = await fetch(`${API_URL}/products/${productId}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(product)
    })
    let data = await response.json();
    if(response.ok){
      return data
    }else {
      throw new Error(data.error)
    }
  } catch (error) {
    return error
  }
}
export const addDiscount = async (discountPercentage, productId, productType) => {
  try {
    let response = await fetch(`${API_URL}/products/${productId}/add-discount`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ discountPercentage, productType })
    })
    let data = await response.json();
    if(response.ok){
      return data
    }else {
      throw new Error(data.error)
    }
  } catch (error) {
    return error
  }
}