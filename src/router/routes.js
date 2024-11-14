import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Login from "../containers/Login";
import { Hello } from "../components/Hello";
import Car from "../components/Car";
import Menu from "../components/Menu";
import Products from "../components/ProductsByGroup";
import ProductDetails from "../components/ProductDetails";
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/hello" element={<Hello />} />
                <Route path="/car" element={<Car />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/products/:idnhom" element={<Products />} />
                <Route
                    path="/productDetail/:masp"
                    element={<ProductDetails />}
                />
                <Route
                    path="*"
                    element={<h1>Không tìm thấy trang web theo yêu cầu</h1>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
