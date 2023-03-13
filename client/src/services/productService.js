const API_URL = "http://localhost:8080";

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
        console.log(data)
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
    let request = await fetch(`${API_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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
}
export const getOneProduct = async (_id) => {
  try {
    let request = await fetch(`${API_URL}/products/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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
}
export const deleteOneProduct = async (_id, type) => {
  try {
    let request = await fetch(`${API_URL}/products/${_id}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({type})

    })
    let data = await request.json();
    if(request.ok){
      return data
    }else {
      throw new Error(data.error)
    }
  } catch (err) {
    return err
  }
}