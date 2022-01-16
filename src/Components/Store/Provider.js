import {
    useState,
    useEffect
} from "react";

import Context from "./Context"

function Provider({ children }) {
    const [products, setProducts] = useState([]);
    const [headerColor, setHeaderColor] = useState("black");
    const [categories, setCategories] = useState([]);

    const cateAPI = 'http://localhost:8080/categories';
    const productAPI = 'http://localhost:8080/products';

    useEffect(() => {
        fetch(productAPI)
            .then(res => res.json())
            .then(data => setProducts(data))

        fetch(cateAPI)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const data = {
        products,
        categories,
        headerColor,
        setProducts,
        setCategories,
        setHeaderColor
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider;