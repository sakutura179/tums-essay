import { useState } from "react";
import clsx from "clsx";

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
import List from "./List";
import Create from "./Create";
import styles from './Category.module.css';

function Category() {
    const [tab, setTab] = useState('list');

    return (
        <CheckToken>
            <Sidebar />
            <div className={clsx('adminContent')}>
                <h1>Category List</h1>
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
        </CheckToken >
    )
}

export default Category;
