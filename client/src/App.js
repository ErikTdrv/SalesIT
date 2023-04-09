import "./App.css";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import AllItems from "./components/All-Products/All-Products";
import AddProduct from "./components/Products/Add-Products/Add-Product";
import ShoppingCard from "./components/Shopping/ShoppingCard";
import ProductDetails from "./components/Products/Product-Details/ProductDetails";
import EditProduct from "./components/Products/Edit-Product/EditProduct";
import AddDiscount from "./components/Products/Product-Details/Add-Discount/AddDiscount";
import Profile from "./components/Profile/Profile";
import Header from "./components/Main/Header/Header";

import { getCurrentUser } from "./services/userService";
import { AuthGuard, UserGuard } from "./components/Main/RouteGuard";
import ErrorPage from "./components/Main/ErrorPage/ErrorPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getUser() {
      let user = await getCurrentUser();
      if(user?._id){
        dispatch({ type: "SET_USER", payload: user });
      }else {
        dispatch({ type: "SET_USER", payload: null });
      }
    }
    getUser();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<AuthGuard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<UserGuard />}>
          <Route path="/all-products/:productId/edit" element={<EditProduct />}/>
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/card" element={<ShoppingCard />} />
          <Route path="/profile" element={<Profile key='profile' />} />
          <Route path="/global-profile/:userId" element={<Profile key='global' mode={'global'}/>} />
          
          <Route
            path="/all-products/:productId/add-discount"
            element={<AddDiscount />}
          />
        </Route>
        <Route path="/all-products" exact element={<AllItems />} />
        <Route path="/all-products/:productId" element={<ProductDetails />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
