import clsx from "clsx";
import PropTypes from 'prop-types';
import { useState } from "react";

import styles from './Category.module.css';

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
            .then(fetchData => alert(fetchData.message))
            .then(() => window.location.href = '/admin/category')
            .catch(err => alert(`An error occurred: ${err}`));
    }

    const handleUpdate = async (cateName, id) => {
        if (cateName)
            await updateCategory({ cateName }, id);
        else
            alert("Vui lòng nhập đầy đủ thông tin");
    }

    return (
        <div className={clsx(styles.form)}>
            <p className={clsx(styles.title)}>Update Category</p>
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