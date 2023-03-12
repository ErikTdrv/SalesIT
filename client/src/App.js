import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AllItems from "./components/All-Products/All-Products";
import AddProduct from "./components/Products/Add-Products/Add-Product";
import ShoppingCard from "./components/Shopping/Shopping";
import ProductDetails from "./components/Products/Details/ProductDetails";

import { AuthContext } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "./services/userService";

function App() {
  useEffect(() => {
    async function getUser(){
      let user = await getCurrentUser()
      setUser(user)
    }
    getUser()
  }, [])
  let navigate = useNavigate()

  let [user, setUser] = useState({});
  const isAuth = user?._id ? true : false;
  const userAuth = (authData) => {
    setUser(authData);
  }
  
  const userLogout = async () => {
    await logoutUser()
    setUser({});
    navigate('/')
  }
  return (
    <AuthContext.Provider value={{ user, userAuth, userLogout, isAuth }}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-products" exact element={<AllItems />} />
        <Route path="/all-products/:productId" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/card" element={<ShoppingCard />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
