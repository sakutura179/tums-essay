import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from './Sidebar.module.css';

function Sidebar() {
    return (
        <div className={clsx(styles.sidebar_container)}>
            <div className={clsx(styles.sidebar_header)}>
                SMUT Shop
            </div>
            <ul>
                <li>
                    <Link to={'/admin/dashboard'}>
                        <i className='bx bxs-dashboard' ></i>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/category'}>
                        <i className='bx bx-category' ></i>
                        Categories
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/product'}>
                        <i className='bx bxs-t-shirt'></i>
                        Products
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/product'}>
                        <i className='bx bxs-spreadsheet'></i>
                        Invoices
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/product'}>
                        <i className='bx bx-paper-plane'></i>
                        Feedbacks
                    </Link>
                </li>
                <li className={clsx(styles.logout)}>
                    <Link to={'/admin/product'}>
                        <i className='bx bx-log-out' ></i>
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;