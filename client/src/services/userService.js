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
    // const data = await response.json();
    // return data;
  } catch (error) {
    console.error(error);
  }
};
export const login = async (info) => {
  try {
    await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },    
      credentials: 'include',
      body: JSON.stringify(info),
    })
  } catch (error) {
    console.error(error);
  }
}