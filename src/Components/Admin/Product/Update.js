import clsx from "clsx";
import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

import { Context } from '../../Store';
import styles from './Product.module.css';
import { validProductName } from "../../../Utils/RegEx";

function Update({ data, setShowForm }) {
    const { BE_URL } = useContext(Context);
    const [categories, setCategories] = useState();
    const [sizes, setSizes] = useState();
    useEffect(() => {
        // get category list
        fetch(BE_URL + 'categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err));

        // get size list
        fetch(BE_URL + 'sizes')
            .then(res => res.json())
            .then(data => setSizes(data))
            .catch(err => console.log(err));
    }, [BE_URL]);

    const [product, setProduct] = useState({
        ...data,
        size: data.size.map(item => item.size_id),
        image: []
    });

    const updateProduct = async (data, id) => {
        const formData = new FormData();
        formData.append('cate_id', data.cate_id);
        formData.append('name', data.name);
        formData.append('price', data.price);
        for (let i = 0; i < data.size.length; i++)
            formData.append(`size[${i}]`, data.size[i]);
        formData.append('desc', data.desc);
        for (let i = 0; i < data.image.length; i++)
            formData.append(`images[${i}]`, data.image[i]);

        console.log(data);

        fetch(`${BE_URL}products/${id}?_method=PUT`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(fetchData => {
                if (fetchData.message !== false) {
                    alert(fetchData.message);
                    return true;
                } else {
                    alert(fetchData.errors.name[0]);
                    return false;
                }
            })
            .then(isOke => isOke ? window.location.href = '/admin/product' : null)
            .catch(err => alert(`An error occurred: ${err}`));
    }

    const [productError, setProductError] = useState(false);
    const [priceError, setPriceError] = useState(false);

    const handleUpdate = async (product, id) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        let cate_id, name, price, size, desc, image;
        ({ cate_id, name, price, size, desc, image } = product);
        if (cate_id && name && price && size.length !== 0 && desc && image.length !== 0) {
            let valid = {
                name: validProductName.test(name),
                price: price > 0
            };
            if (!valid.name)
                setProductError(true);
            else
                setProductError(false);
            if (!valid.price)
                setPriceError(true);
            else
                setPriceError(false);
            if (valid.name && valid.price)
                await updateProduct(product, id);
        }
        else
            alert("Vui lòng nhập đầy đủ thông tin");
    }

    // handle checkbox
    const isChecked = id => product.size.includes(id);

    const handleChecked = id => setProduct(
        {
            ...product,
            size: isChecked(id) ? product.size.filter(item => item !== id) : [...product.size, id]
        });

    const isDisable = (data, sizeName) => {
        if ((data === 1 || data === 3 || data === 4) && !parseInt(sizeName))
            return true;
        if ((data !== 1 && data !== 3 && data !== 4) && parseInt(sizeName))
            return true;

        return false;
    }

    // handleUploadImg
    const handleUpload = (e) => {
        setProduct({ ...product, image: e.target.files });
    }

    return (
        <div className={clsx(styles.form)}>
            <p className={clsx(styles.title)}>Update Product</p>
            {(productError || priceError) && (
                <div className={styles.alertContainer}>
                    {productError &&
                        <p>
                            - Product name is invalid (Only contain numbers, normal characters and  ~ ! @ # $ % & * . - _ | /)
                        </p>
                    }
                    {priceError &&
                        <p>
                            - Price is invalid (Only contain numbers and must be greater than 0)
                        </p>
                    }
                    <button onClick={() => {
                        setProductError(false);
                        setPriceError(false);
                    }}>
                        <i className='bx bx-x' ></i>
                    </button>
                </div>
            )}
            <label htmlFor="cate_id">Category</label>
            <select
                id="cate_id"
                name="cate_id"
                value={product.cate_id}
                onChange={e => setProduct({ ...product, size: [], cate_id: e.target.value })}
                className={clsx(styles.formItem)}
                style={{ 'textTransform': 'capitalize' }}
            >
                {categories && categories.map(item =>
                    <option
                        key={item.cate_id}
                        value={item.cate_id}
                    >
                        {item.name}
                    </option>
                )}
            </select>
            <label htmlFor="productName">Name</label>
            <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Enter product name ..."
                className={clsx(styles.formItem)}
                value={product.name}
                onChange={e => setProduct({ ...product, name: e.target.value })}
            />
            <label htmlFor="price">Price</label>
            <input
                type="number"
                id="price"
                name="price"
                min={0}
                placeholder="Enter product price ..."
                className={clsx(styles.formItem)}
                value={product.price}
                onChange={e => setProduct({ ...product, price: e.target.value })}
            />
            <label>Size</label>
            <div className={clsx(styles.checkboxGroup)}>
                {sizes && sizes.map(size => {
                    if (isDisable(parseInt(product.cate_id), size.name))
                        return (
                            <div
                                className={clsx(styles.checkboxItem)}
                                key={size.size_id}
                            >
                                <input
                                    type={'checkbox'}
                                    id={size.size_id}
                                    checked={isChecked(size.size_id)}
                                    onChange={() => handleChecked(size.size_id)}
                                />
                                <label htmlFor={size.size_id}>{size.name}</label>
                            </div>
                        );
                    return null;
                })}
            </div>
            <label>Description</label>
            <div
                style={{ 'width': '70%', 'marginBottom': '25px' }}
            >
                <CKEditor
                    editor={Editor}
                    onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        // console.log('Editor is ready to use!', editor);
                        editor.setData(product.desc);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setProduct({ ...product, desc: data });
                    }}
                />
            </div>
            <label htmlFor="image">Image</label>
            <input
                type="file"
                id="image"
                name="image"
                style={{ 'paddingTop': '10px' }}
                className={clsx(styles.formItem)}
                multiple
                accept="image/*"
                onChange={handleUpload}
                onClick={e => e.target.value = null}
            />
            <div className={styles.btnContainer}>
                <button
                    className={clsx(styles.btn, styles.submitBtn)}
                    onClick={() => handleUpdate(product, product.product_id)}
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
    data: PropTypes.object.isRequired,
    setShowForm: PropTypes.func.isRequired
}

export default Update;