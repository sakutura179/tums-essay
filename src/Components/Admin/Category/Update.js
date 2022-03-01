import clsx from "clsx";
import PropTypes from 'prop-types';
import { useState } from "react";

import styles from './Category.module.css';
import { validCateName } from "../../../Utils/RegEx";

function Update({ category, setShowForm }) {
    const [cateName, setCateName] = useState(category.name);

    const updateCategory = async (data, id) => {
        fetch(`http://tums-essay-be.shop/api/categories/${id}`, {
            method: 'PUT',
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

    const handleUpdate = async (cateName, id) => {
        if (cateName) {
            let valid = validCateName.test(cateName);
            if (!valid)
                setCateError(true);
            else
                setCateError(false);

            if (valid)
                await updateCategory({ cateName }, id);
        }
        else
            alert("Vui lòng nhập đầy đủ thông tin");
    }

    return (
        <div className={clsx(styles.form)}>
            <p className={clsx(styles.title)}>Update Category</p>
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
                    onClick={() => handleUpdate(cateName, category.cate_id)}
                >
                    Update
                </button>
                <button
                    className={clsx(styles.btn, styles.closeBtn)}
                    onClick={() => setShowForm(false)}>
                    Close
                </button>
            </div>
        </div>
    );
}

Update.propTypes = {
    category: PropTypes.object.isRequired,
    setShowForm: PropTypes.func.isRequired
}

export default Update;