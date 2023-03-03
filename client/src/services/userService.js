const API_URL = "http://localhost:8080";

export const register = async (info, base64) => {
  try {
    info.avatarImg = base64

    await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },    
      body: JSON.stringify(info),
    });
    // const data = await response.json();
    // return data;
  } catch (error) {
    console.error(error);
  }
};
