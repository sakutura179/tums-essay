import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css'

function NavBar() {
    const cateAPI = 'http://localhost:8080/categories';

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(cateAPI)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <ul className={clsx(styles.navBar)}>
            <li className={clsx(styles.navItem)}>
                <Link to={'/shop'}>Shop</Link>
                {/* use FOR here to render shop categories */}
                <ul className={clsx(styles.childNavBar)}>
                    {categories.map(cate => (
                        <li
                            key={cate.id}
                            className={clsx(styles.childNavItem)}
                        >
                            <Link to={`/shop`}>{cate.name}</Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li className={clsx(styles.navItem)}><Link to={'/terms'}>Terms</Link></li>
            <li className={clsx(styles.navItem)}><Link to={'/contact'}>Contact</Link></li>
        </ul>
    )
}

export default NavBar