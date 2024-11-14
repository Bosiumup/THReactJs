import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import productService from "../services/productService";
const Products = () => {
    const [products, setProducts] = useState([]);
    const { idnhom } = useParams(); // Lấy idnhom từ URL

    useEffect(() => {
        productService.fetchListProductByGroup(idnhom).then((response) => {
            setProducts(response.data);
        });
    }, []);

    console.log(products);

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <ul>
                {products &&
                    products.products &&
                    products.products.map((item) => (
                        <li key={item.idnhom}>
                            <NavLink to={`/productDetail/${item.masp}`}>
                                {item.ten}
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Products;
