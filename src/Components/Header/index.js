import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { Context } from '../Store';
import styles from './Header.module.css';
import { currencyFormat } from '../../Utils/NumberFormat';

function Header() {
    const { categories, headerColor } = useContext(Context);

    let cart = localStorage.getItem('cart');
    let total = 0;
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }

    const handleRemoveCart = (itemID, itemSize) => {
        cart = cart.filter(item => item.product.id !== itemID || item.size !== itemSize);
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.reload();
    }


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
                        {cart.length}
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
                        {cart.length}
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
                {cart.length !== 0 ? (
                    <>
                        <ul className={clsx(styles.cartList)}>
                            {cart.map((item, index) => {
                                total += parseInt(item.product.price) * item.quantity;
                                return (
                                    <li className={clsx(styles.cartItem)} key={index}>
                                        <div className={clsx(styles.cartItemImg)}>
                                            <img src={item.product.images[0]} alt={item.product.name} />
                                        </div>
                                        <div className={clsx(styles.cartItemInfo)}>
                                            <p className={clsx(styles.itemName)}>
                                                {item.product.name} - {item.size}
                                            </p>
                                            <p className={clsx(styles.itemQuantityNPrice)}>
                                                {item.quantity} x {currencyFormat(item.product.price)}
                                            </p>
                                        </div>
                                        <button
                                            className={clsx(styles.removeBtn)}
                                            onClick={() => handleRemoveCart(item.product.id, item.size)}
                                        >
                                            <i class='bx bx-x'></i>
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={clsx(styles.totalPrice)}>
                            tạm tính: {currencyFormat(total)}
                        </div>
                        <div className={clsx(styles.checkoutContainer)}>
                            <label
                                htmlFor="inputCart"
                                className={clsx(styles.btn)}
                            >
                                tiếp tục mua hàng
                            </label>
                            <Link
                                to={'/cart'}
                                className={clsx(styles.checkoutBtn, styles.btn)}
                            >

                                thanh toán
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className={clsx(styles.emptyCart)}>
                        Giỏ hàng của bạn đang trống
                    </div>
                )}
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
                    <li className={clsx(styles.navItem)}>
                        <Link to={'/shop'}>Shop</Link>
                        {/* use MAP here to render shop categories */}
                        <ul className={clsx(styles.childNavBar)}>
                            {categories.map(cate => (
                                <li
                                    key={cate.id}
                                    className={clsx(styles.childNavItem)}
                                >
                                    <Link to={`/category/${cate.slug}`}>{cate.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className={clsx(styles.navItem)}><Link to={'/terms'}>Terms</Link></li>
                    <li className={clsx(styles.navItem)}><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;