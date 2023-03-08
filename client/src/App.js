import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AllItems from "./components/All-Products/All-Products";
import AddProduct from "./components/Products/Add-Products/Add-Product";
import ShoppingCard from "./components/Shopping/Shopping";
import ProductDetails from "./components/Products/Details/ProductDetails";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
