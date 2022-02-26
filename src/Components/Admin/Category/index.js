import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import clsx from "clsx";

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
import styles from './Category.module.css';

function Category() {
    const [pending, setPending] = useState(true);
    const [categories, setCategories] = useState([]);
    const cateAPI = 'http://tums-essay-be.shop/api/categories';

    useEffect(() => {
        fetch(cateAPI)
            .then(res => res.json())
            .then(data => setCategories(data))
            .then(() => setPending(false))
            .catch(err => console.log(err))
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: row => row.cate_id,
            sortable: true,
            width: '60px'
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Slug',
            selector: row => row.slug,
            sortable: true,
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
                <h1>Category List</h1>
                <DataTable
                    columns={columns}
                    data={categories}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    progressPending={pending}
                />
            </div>
        </CheckToken >
    )
}

export default Category;
