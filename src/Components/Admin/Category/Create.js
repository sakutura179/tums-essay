import clsx from "clsx";
import { useState } from "react";

import styles from './Category.module.css';
import { validCateName } from "../../../Utils/RegEx";

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
            .then(fetchData => {
                if (fetchData.message !== false) {
                    alert(fetchData.message);
                    return true;
                } else {
                    alert(fetchData.errors.cateName[0]);
                    return false;
                }
            })
            .then(isOke => isOke ? window.location.href = '/admin/category' : null)
            .catch(err => alert(`An error occurred: ${err}`));
    }

    const [cateError, setCateError] = useState(false);

    const handleCreate = async (cateName) => {
        if (cateName) {
            let valid = validCateName.test(cateName);
            if (!valid)
                setCateError(true);
            else
                setCateError(false);

            if (valid)
                await createCategory({ cateName });
        }
        else
            alert("Vui lòng nhập đầy đủ thông tin");
    }

    return (
        <div className={clsx(styles.form)}>
            <p className={clsx(styles.title)}>Create Category</p>
            {cateError && (
                <div className={styles.alertContainer}>
                    {cateError && <p>- Category name is invalid</p>}
                    <button onClick={() => {
                        setCateError(false);
                    }}>
                        <i className='bx bx-x' ></i>
                    </button>
                </div>
            )}
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