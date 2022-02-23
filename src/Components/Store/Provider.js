import {
    useState,
    useEffect
} from "react";

import Context from "./Context"

function Provider({ children }) {
    const [products, setProducts] = useState([]);
    const [headerColor, setHeaderColor] = useState("black");
    const [categories, setCategories] = useState([]);

    const cateAPI = 'http://tums-essay-be.shop/api/categories';
    const productAPI = 'http://tums-essay-be.shop/api/products';

    useEffect(() => {
        fetch(productAPI)
            .then(res => res.json())
            .then(fetchData => setProducts(fetchData.data))
        // Do o BE tra ve doi tuong co key la 'data' chua toan bo du lieu cua Products (su dung postman de test)

        fetch(cateAPI)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const contextData = {
        products,
        categories,
        headerColor,
        setProducts,
        setCategories,
        setHeaderColor
    }

    return (
        <Context.Provider value={contextData}>
            {children}
        </Context.Provider>
    )
}

export default Provider;