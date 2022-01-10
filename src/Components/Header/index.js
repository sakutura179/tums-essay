import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { HeaderColor } from '../../App';
import styles from './Header.module.css'

function Header() {
    const [headerColor] = useContext(HeaderColor);

    return (
        <header>
            <span className={clsx(styles.logo)}><Link to={'/'} style={{ color: headerColor }}>SMUT</Link></span>
            <span className={clsx(styles.cart)} style={{ color: headerColor }}><i className='bx bx-cart'></i></span>
        </header>
    )
}

export default Header;