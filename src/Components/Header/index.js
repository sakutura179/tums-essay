import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { HeaderColor } from '../../App';
import styles from './Header.module.css'

function Header() {
    const [headerColor] = useContext(HeaderColor);

    return (
        <div className={clsx(styles.nav)}>
            {/* PC and laptop header */}
            <header className={clsx(styles.pc)}>
                <span className={clsx(styles.logo)}><Link to={'/'} style={{ color: headerColor }}>SMUT</Link></span>
                <span className={clsx(styles.cart)} style={{ color: headerColor }}><i className='bx bx-cart'></i></span>
            </header>

            {/* Mobile header */}
            <header className={clsx(styles.tabletMobile)}>
                <label htmlFor="nav-mobile-input" className={clsx(styles.navBarsBtn)} style={{ color: headerColor }}>
                    <i className='bx bx-menu'></i>
                </label>
                <span className={clsx(styles.logo)}><Link to={'/'} style={{ color: headerColor }}>SMUT</Link></span>
                <span className={clsx(styles.cart)} style={{ color: headerColor }}><i className='bx bx-cart'></i></span>
            </header>

            <input
                hidden
                type="checkbox"
                className={clsx(styles.inputMobile)}
                name="nav-mobile-input"
                id="nav-mobile-input"
            />

            <label
                htmlFor="nav-mobile-input"
                className={clsx(styles.navOverlay)}
            >
            </label>

            <div className={styles.navMobileList}>
                <label
                    htmlFor="nav-mobile-input"
                >
                    <i className={clsx(styles.closeBtn, 'bx bx-x')}></i>
                </label>
                <ul className={clsx(styles.navBar)}>
                    <li className={clsx(styles.navItem)}><Link to={'/shop'}>Shop</Link></li>
                    <li className={clsx(styles.navItem)}><Link to={'/terms'}>Terms</Link></li>
                    <li className={clsx(styles.navItem)}><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;