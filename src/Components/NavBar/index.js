import clsx from 'clsx';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css'
import { Context } from '../Store';

function NavBar() {
    const { categories } = useContext(Context);

    return (
        <ul className={clsx(styles.navBar)}>
            <li className={clsx(styles.navItem)}>
                <Link to={'/tums-essay/shop'}>Shop</Link>
                {/* use MAP here to render shop categories */}
                <ul className={clsx(styles.childNavBar)}>
                    {categories.map(cate => (
                        <li
                            key={cate.cate_id}
                            className={clsx(styles.childNavItem)}
                        >
                            <Link to={`/tums-essay/category/${cate.slug}`}>{cate.name}</Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li className={clsx(styles.navItem)}><Link to={'/tums-essay/terms'}>Terms</Link></li>
            <li className={clsx(styles.navItem)}><Link to={'/tums-essay/contact'}>Contact</Link></li>
        </ul>
    )
}

export default NavBar