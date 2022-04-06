import { useState } from "react";
import clsx from "clsx";
import { Helmet } from 'react-helmet-async';

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
import List from "./List";
import Create from "./Create";
import styles from './Product.module.css';

function Product() {
    const [tab, setTab] = useState('list');

    return (
        <CheckToken>
            <Helmet>
                <title>
                    Product Management - SMUT Clothing
                </title>
            </Helmet>
            <div className={clsx('support')}>
                <Sidebar />
                <div className={clsx('adminContent')}>
                    <h1>Product Management</h1>
                    <button
                        className={clsx(styles.tabBtn)}
                        onClick={() => setTab('list')}
                    >
                        List
                    </button>
                    <button
                        className={clsx(styles.tabBtn)}
                        onClick={() => setTab('create')}
                    >
                        Create
                    </button>
                    {tab === 'list' && <List />}
                    {tab === 'create' && <Create />}
                </div>
            </div>
            <div className={clsx('unsupport')}>
                <p>Sorry, your device is unsupported.</p>
                <p>Please use PC to access this page.</p>
            </div>
        </CheckToken>
    )
}

export default Product;
