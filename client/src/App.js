import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import AllItems from "./components/All-Products/All-Products";
import AddProduct from "./components/Products/Add-Products/Add-Product";
import ShoppingCard from "./components/Shopping/Shopping";
import ProductDetails from "./components/Products/Product-Details/ProductDetails";
import EditProduct from "./components/Products/Edit-Product/EditProduct";
import AddDiscount from "./components/Products/Product-Details/Add-Discount/AddDiscount";
import Profile from "./components/Profile/Profile";
import Header from "./components/Main/Header/Header";

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
    <AuthContext.Provider value={{ user,setUser, userAuth, userLogout, isAuth }}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-products" exact element={<AllItems />} />
        <Route path="/all-products/:productId" element={<ProductDetails />} />
        <Route path="/all-products/:productId/edit" element={<EditProduct />} />
        <Route path="/all-products/:productId/add-discount" element={<AddDiscount />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/card" element={<ShoppingCard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
