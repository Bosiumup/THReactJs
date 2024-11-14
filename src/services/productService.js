import axios from "axios";

let fetchGroupListProduct = async () => {
    let message = await axios.get("http://localhost:8080/api/groupProduct");
    return message;
};

let fetchListProductByGroup = async (idnhom) => {
    let message = await axios.get(
        `http://localhost:8080/api/listProductByGroup/${idnhom}`
    );
    return message;
};

let fetchDetailProduct = async (masp) => {
    let message = await axios.get(
        `http://localhost:8080/api/detailProduct/${masp}`
    );
    return message;
};

export default {
    fetchGroupListProduct,
    fetchListProductByGroup,
    fetchDetailProduct,
};
