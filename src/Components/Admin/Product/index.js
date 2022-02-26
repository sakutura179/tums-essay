import clsx from "clsx";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
import styles from './Product.module.css';

function Product() {
    const [pending, setPending] = useState(true);
    const [products, setProducts] = useState([]);
    const productAPI = 'http://tums-essay-be.shop/api/products';

    useEffect(() => {
        fetch(productAPI)
            .then(res => res.json())
            .then(fetchData => setProducts(fetchData.data))
            .then(() => setPending(false))
            .catch(err => console.log(err))
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: row => row.product_id,
            sortable: true,
            width: '60px'
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            grow: 3,
            wrap: true
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
        },
        {
            name: 'Update',
            selector: () => {
                return (
                    <button className={styles.btn}>
                        <i class='bx bxs-edit-alt' ></i>
                    </button>
                )
            },
            center: true,
            width: '75px'
        },
        {
            name: 'Delete',
            selector: () => {
                return (
                    <button className={styles.btn}>
                        <i class='bx bx-x' ></i>
                    </button>
                )
            },
            center: true,
            width: '75px'
        }
    ];

    const paginationComponentOptions = {
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All'
    }

    return (
        <CheckToken>
            <Sidebar />
            <div className={clsx('adminContent')}>
                <h1>Product List</h1>
                <DataTable
                    columns={columns}
                    data={products}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    progressPending={pending}
                />
            </div>
        </CheckToken>
    )
}

export default Product;
