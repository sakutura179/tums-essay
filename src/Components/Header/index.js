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
                <label
                    className={clsx(styles.cart)}
                    style={{ color: headerColor }}
                    htmlFor='inputCart'
                >
                    <i className='bx bx-cart'></i>
                    <div
                        style={{ backgroundColor: headerColor, color: headerColor === 'black' ? 'white' : 'black' }}
                    >
                        0
                    </div>
                </label>
            </header>

            {/* Mobile header */}
            <header className={clsx(styles.tabletMobile)}>
                <label htmlFor="nav-mobile-input" className={clsx(styles.navBarsBtn)} style={{ color: headerColor }}>
                    <i className='bx bx-menu'></i>
                </label>
                <span className={clsx(styles.logo)}><Link to={'/'} style={{ color: headerColor }}>SMUT</Link></span>
                <label
                    htmlFor='inputCart'
                    className={clsx(styles.cart)}
                    style={{ color: headerColor }}
                >
                    <i className='bx bx-cart'></i>
                    <div
                        style={{ backgroundColor: headerColor, color: headerColor === 'black' ? 'white' : 'black' }}
                    >
                        0
                    </div>
                </label>
            </header>

            {/* Cart List */}
            <input
                hidden
                type="checkbox"
                className={clsx(styles.inputCart)}
                name="inputCart"
                id="inputCart"
            />
            <label
                htmlFor="inputCart"
                className={clsx(styles.cartOverlay)}
            >
            </label>

            <div className={styles.cartItemList}>
                <label
                    htmlFor="inputCart"
                >
                    <i className={clsx(styles.closeBtn, 'bx bx-x')}></i>
                </label>
                <ul className={clsx(styles.cartList)}>
                    <li className={clsx(styles.cartItem)}>
                        <div className={clsx(styles.cartItemImg)}>
                            <img src={require('../../assets/product/product1.jpg')} alt="cart-item" />
                        </div>
                        <div className={clsx(styles.cartItemInfo)}>
                            <p className={clsx(styles.itemName)}>ABCXYZ</p>
                            <p className={clsx(styles.itemQuantityNPrice)}>
                                1 x 480,000 đ
                            </p>
                        </div>
                    </li>
                </ul>
                <div className={clsx(styles.totalPrice)}>
                    tạm tính: 480,000 đ
                </div>
                <div className={clsx(styles.checkoutContainer)}>
                    <label
                        htmlFor="inputCart"
                        className={clsx(styles.btn)}
                    >
                        tiếp tục mua hàng
                    </label>
                    <Link to={'/cart'} className={clsx(styles.checkoutBtn, styles.btn)}>
                        thanh toán
                    </Link>
                </div>
            </div>


            {/* NavMobileList */}
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