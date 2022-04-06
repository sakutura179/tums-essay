import { useState } from "react";
import clsx from "clsx";
import { Helmet } from 'react-helmet-async';

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
import List from "./List";
import Create from "./Create";
import styles from './Category.module.css';

function Category() {
    const [tab, setTab] = useState('list');

    return (
        <CheckToken>
            <Helmet>
                <title>
                    Category Management - SMUT Clothing
                </title>
            </Helmet>
            <div className={clsx('support')}>
                <Sidebar />
                <div className={clsx('adminContent')}>
                    <h1>Category Management</h1>
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
        </CheckToken >
    )
}

export default Category;
