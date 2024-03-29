const API_URL = process.env.REACT_APP_API_URL;

export const register = async (info) => {
  try {
    let response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },    
      credentials: 'include',
      body: JSON.stringify(info),
    });
    const data = await response.json();
    if(response.ok){
      return data
    }else {
      throw new Error(data.error)
    }
  } catch (error) {
    return error
  }
};
export const login = async (info) => {
  try {
    let response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },    
      credentials: 'include',
      body: JSON.stringify(info),
    })
    const data = await response.json();
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
export const convertToBase64 = async (file) => {

  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
export const getCurrentUser = async () => {
  try {
    let response = await fetch(`${API_URL}/get-user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },    
      credentials: 'include',
    })
    const data = await response.json();
    if(response.ok){
      return data
    }else {
      throw new Error(data.error)
    }
  } catch (error) {
    return error
    
  }
}
export const logoutUser = async() => {
  await fetch(`${API_URL}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },    
    credentials: 'include',
  })
}
export const getProfileProducts = async () => {
  let products = await fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include'
  })
  const data = await products.json()
  if(products.ok){
    return data
  }
}
export const getUserById = async (userId) => {
  let response = await fetch(`${API_URL}/global-profile/${userId}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include'
  })
  const user = await response.json()
  if(response.ok){
    return user
  }
}