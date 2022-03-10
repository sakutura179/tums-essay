import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import styles from './Sidebar.module.css';

function Sidebar() {
    const handleLogout = () => {
        sessionStorage.clear('token');
        window.location.href = '/';
    }

    const activePath = useLocation().pathname;

    const mainNav = [
        {
            display: "Dashboard",
            icon: "dashboard",
            path: "/admin/dashboard"
        },
        {
            display: "Categories",
            icon: "category",
            path: "/admin/category"
        },
        {
            display: "Products",
            icon: "t-shirt",
            path: "/admin/product"
        },
        {
            display: "Invoices",
            icon: "spreadsheet",
            path: "/admin/invoice"
        },
        {
            display: "Feedbacks",
            icon: "paper-plane",
            path: "/admin/feedback"
        }
    ]

    return (
        <div className={clsx(styles.sidebar_container)}>
            <div className={clsx(styles.sidebar_header)}>
                <Link to={'/'}>SMUT Shop</Link>
            </div>
            <ul>
                {mainNav.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={clsx(activePath === item.path ? styles.active : '')}
                        >
                            <Link to={item.path}>
                                <i className={`bx bxs-${item.icon}`} ></i>
                                {item.display}
                            </Link>
                        </li>
                    )
                })}
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