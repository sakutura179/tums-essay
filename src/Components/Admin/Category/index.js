import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import clsx from "clsx";

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
// import styles from './Category.module.css';

function Category() {
    const [categories, setCategories] = useState([]);
    const cateAPI = 'http://tums-essay-be.shop/api/categories';

    useEffect(() => {
        fetch(cateAPI)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: row => row.cate_id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            grow: 3,
        },
        {
            name: 'Slug',
            selector: row => row.slug,
            sortable: true,
        }
    ];

    return (
        <CheckToken>
            <Sidebar />
            <div className={clsx('adminContent')}>
                <DataTable
                    columns={columns}
                    data={categories}
                />
            </div>
        </CheckToken >
    )
}

export default Category;
