import clsx from "clsx";
import { useState } from "react";

import styles from './Category.module.css';

function Create() {
    const [cateName, setCateName] = useState('');

    const createCategory = async (data) => {
        fetch('http://tums-essay-be.shop/api/categories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(fetchData => alert(fetchData.message))
            .then(() => window.location.href = '/admin/category')
            .catch(err => alert(`An error occurred: ${err}`));
    }

    const handleCreate = async (cateName) => {
        if (cateName)
            await createCategory({ cateName });
        else
            alert("Vui lòng nhập đầy đủ thông tin");
    }

    return (
        <div className={clsx(styles.form)}>
            <p className={clsx(styles.title)}>Create Category</p>
            <label htmlFor="cateName">Name</label>
            <input
                type="text"
                id="cateName"
                name="cateName"
                placeholder="Enter category name ..."
                className={clsx(styles.formItem)}
                value={cateName}
                onChange={e => setCateName(e.target.value)}
            />
            <div className={styles.btnContainer}>
                <button
                    className={clsx(styles.btn, styles.submitBtn)}
                    onClick={() => handleCreate(cateName)}
                >
                    Create
                </button>
            </div>
        </div>
    );
}

export default Create;