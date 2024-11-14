import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../services/productService";
const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const { masp } = useParams(); // Lấy masp từ URL

    useEffect(() => {
        productService.fetchDetailProduct(masp).then((response) => {
            setProduct(response.data);
        });
    }, []);

    console.log(product);

    return (
        <div>
            <h1>Chi tiết sản phẩm</h1>
            {product && product.product && (
                <div>
                    <h2>{product.product.ten}</h2>
                    <p>{product.product.gia}</p>
                    <p>{product.product.mota}</p>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
