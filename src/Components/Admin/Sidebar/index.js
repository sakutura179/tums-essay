import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from './Sidebar.module.css';

function Sidebar() {
    const handleLogout = () => {
        sessionStorage.clear('token');
        window.location.href = '/';
    }

    return (
        <div className={clsx(styles.sidebar_container)}>
            <div className={clsx(styles.sidebar_header)}>
                <Link to={'/'}>SMUT Shop</Link>
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
                    <Link to={'/admin/invoice'}>
                        <i className='bx bxs-spreadsheet'></i>
                        Invoices
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/feedback'}>
                        <i className='bx bx-paper-plane'></i>
                        Feedbacks
                    </Link>
                </li>
                <li className={clsx(styles.logout)}>
                    <button
                        onClick={() => handleLogout()}
                    >
                        <i className='bx bx-log-out' ></i>
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;