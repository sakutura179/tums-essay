import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { useContext } from 'react';

import { HeaderColor } from '../../App';
import styles from './LandingPage.module.css'

function LandingPage() {
    const [headerColor, setHeaderColor] = useContext(HeaderColor);
    console.log(headerColor);
    setHeaderColor('white');

    return (
        <>
            <div className={clsx(styles.container)}>
                <div className={clsx('grid wide')}>
                    <div className={clsx('row')}>
                        <div className={clsx('col l-2 m-0 s-0')}>
                            <ul className={clsx(styles.navBar)}>
                                <li className={clsx(styles.navItem)}><Link to={'/shop'}>Shop</Link></li>
                                <li className={clsx(styles.navItem)}><Link to={'/terms'}>Terms</Link></li>
                                <li className={clsx(styles.navItem)}><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.footer)}>
                <p>
                    <a href='https://facebook.com/khanh121218'>
                        <i class='bx bxl-facebook-circle' ></i>
                    </a>
                </p>
                <p>
                    <a href='https://www.instagram.com/khanhs.__/'>
                        <i class='bx bxl-instagram' ></i>
                    </a>
                </p>
                <p>
                    <a href='https://github.com/sakutura179'>
                        <i class='bx bxl-github' ></i>
                    </a>
                </p>
            </div>
        </>
    )
}

export default LandingPage;