import {
    useState,
    useEffect
} from "react";

import Context from "./Context"

function Provider({ children }) {
    const [products, setProducts] = useState([]);
    const [headerColor, setHeaderColor] = useState("black");

    const productAPI = 'http://localhost:8080/products';

    useEffect(() => {
        fetch(productAPI)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const data = {
        products,
        headerColor,
        setProducts,
        setHeaderColor
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default Provider;