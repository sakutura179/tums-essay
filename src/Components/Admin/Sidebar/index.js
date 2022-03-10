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
            path: "/tums-essay/admin/dashboard"
        },
        {
            display: "Categories",
            icon: "category",
            path: "/tums-essay/admin/category"
        },
        {
            display: "Products",
            icon: "t-shirt",
            path: "/tums-essay/admin/product"
        },
        {
            display: "Invoices",
            icon: "spreadsheet",
            path: "/tums-essay/admin/invoice"
        },
        {
            display: "Feedbacks",
            icon: "paper-plane",
            path: "/tums-essay/admin/feedback"
        }
    ]

    return (
        <div className={clsx(styles.sidebar_container)}>
            <div className={clsx(styles.sidebar_header)}>
                <Link to={'/tums-essay/'}>SMUT Shop</Link>
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