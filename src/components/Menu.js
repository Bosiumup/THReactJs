import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import productService from "../services/productService";
const Menu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        productService.fetchGroupListProduct().then((response) => {
            setCategories(response.data);
        });
    }, []);

    console.log(categories);

    return (
        <div>
            <h1>Danh sách nhóm</h1>
            <ul>
                {categories &&
                    categories.groupProduct &&
                    categories.groupProduct.map((item) => (
                        <li key={item.idnhom}>
                            <NavLink to={`/products/${item.idnhom}`}>
                                {item.ten}
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Menu;
