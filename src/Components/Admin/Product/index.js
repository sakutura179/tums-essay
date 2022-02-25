import clsx from "clsx";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
// import styles from './Product.module.css';

function Product() {
    const [products, setProducts] = useState([]);
    const productAPI = 'http://tums-essay-be.shop/api/products';

    useEffect(() => {
        fetch(productAPI)
            .then(res => res.json())
            .then(fetchData => setProducts(fetchData.data))
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: row => row.product_id,
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Image',
            selector: row => {
                return (
                    <img src={'http://tums-essay-be.shop/' + row.image[0].path} alt={row.slug} width="100px" />
                );
            }
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'Size',
            selector: row => {
                let sizes = '';
                row.size.forEach(element => {
                    sizes += element.name + ' ';
                });
                return sizes;
            }
        }
    ];

    return (
        <CheckToken>
            <Sidebar />
            <div className={clsx('adminContent')}>
                <DataTable
                    columns={columns}
                    data={products}
                />
            </div>
        </CheckToken>
    )
}

export default Product;
