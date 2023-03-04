const API_URL = "http://localhost:8080";

export const register = async (info) => {
  try {
    let request = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },    
      credentials: 'include',
      body: JSON.stringify(info),
    });
    const data = await request.json();
    if(request.ok){
      return data
    }else {
      throw new Error(data.error)
    }
  } catch (error) {
    console.log(error);
  }
};
export const login = async (info) => {
  try {
    let request = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },    
      credentials: 'include',
      body: JSON.stringify(info),
    })
    const data = await request.json();
    if(request.ok){
      return data
    }else {
      throw new Error(data.error)
    }
  } catch (error) {
    return error
  }
}