import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css'

function NavBar() {
    return (
        <ul className={clsx(styles.navBar)}>
            <li className={clsx(styles.navItem)}>
                <Link to={'/tums-essay/shop'}>Shop</Link>
                {/* use FOR here to render shop categories */}
                <ul className={clsx(styles.childNavBar)}>
                    <li className={clsx(styles.childNavItem)}><Link to={'/tums-essay/shop'}>Shop</Link></li>
                    <li className={clsx(styles.childNavItem)}><Link to={'/tums-essay/terms'}>Terms</Link></li>
                    <li className={clsx(styles.childNavItem)}><Link to={'/tums-essay/contact'}>Contact</Link></li>
                </ul>
            </li>
            <li className={clsx(styles.navItem)}><Link to={'/tums-essay/terms'}>Terms</Link></li>
            <li className={clsx(styles.navItem)}><Link to={'/tums-essay/contact'}>Contact</Link></li>
        </ul>
    )
}

export default NavBar