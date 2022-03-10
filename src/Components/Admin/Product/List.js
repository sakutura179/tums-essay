import { useEffect, useState, useContext } from "react";
import DataTable from 'react-data-table-component';
import clsx from "clsx";

import { Context } from '../../Store';
import styles from './Product.module.css';
import Update from './Update';

function List() {
    const { BE_URL } = useContext(Context);
    // Hien thi loading tren table
    const [pending, setPending] = useState(true);
    const [products, setProducts] = useState([]);
    const productAPI = 'products';

    useEffect(() => {
        fetch(BE_URL + productAPI)
            .then(res => res.json())
            .then(fetchData => setProducts(fetchData.data))
            .then(() => setPending(false))
            .catch(err => console.log(err))
    }, [BE_URL]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            await fetch(`${BE_URL + productAPI}/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => alert(data.message))
                .then(() => window.location.reload())
                .catch(err => console.log(err));
        }
    }

    const [showForm, setShowForm] = useState(false);
    const handleOpenUpdate = (data) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        let renderThis = (
            <>
                <Update data={data} setShowForm={setShowForm} />
            </>
        );

        setShowForm(renderThis);
    }

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
                    <img src={'https://tums-essay-be.herokuapp.com/' + row.image[0].path} alt={row.slug} width="100px" />
                );
            }
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'Size and Quantity',
            selector: row => {
                let sizes = '';
                row.size.forEach(element => {
                    sizes += ` Size: ${element.name} - SL Tồn: ${element.pivot.quantity} `;
                });
                return sizes;
            },
            wrap: true
        },
        {
            name: 'Update',
            selector: (row) => {
                return (
                    <button
                        onClick={() => handleOpenUpdate(row)}
                        className={clsx(styles.btn)}
                    >
                        <i className='bx bxs-edit-alt' ></i>
                    </button>
                )
            },
            center: true,
            width: '75px'
        },
        {
            name: 'Delete',
            selector: (row) => {
                return (
                    <button
                        onClick={() => handleDelete(row.product_id)}
                        className={clsx(styles.btn)}
                    >
                        <i className='bx bx-x' ></i>
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
        <>
            {showForm}
            <DataTable
                fixedHeader
                columns={columns}
                data={products}
                pagination
                paginationComponentOptions={paginationComponentOptions}
                progressPending={pending}
            />
        </>
    );
}

export default List;