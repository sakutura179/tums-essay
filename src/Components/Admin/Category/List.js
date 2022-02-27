import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import clsx from "clsx";

import styles from './Category.module.css';
import UpdateCategory from './Update';

function List() {
    // Hien thi loading tren table
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

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            await fetch(`${cateAPI}/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => alert(data.message))
                .then(() => window.location.reload())
                .catch(err => console.log(err));
        }
    }

    const [showForm, setShowForm] = useState(false);
    const handleOpenUpdate = (category) => {
        let renderThis = (
            <>
                <UpdateCategory category={category} setShowForm={setShowForm} />
            </>
        );

        setShowForm(renderThis);
    }

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
                        onClick={() => handleDelete(row.cate_id)}
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
                columns={columns}
                data={categories}
                pagination
                paginationComponentOptions={paginationComponentOptions}
                progressPending={pending}
            />
        </>
    );
}

export default List;