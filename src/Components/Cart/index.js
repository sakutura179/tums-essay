import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';

import { Context } from '../Store';
import NavBar from '../NavBar';
import styles from './Cart.module.css';
import { currencyFormat } from '../../Utils/NumberFormat';

function Cart() {
    let initPayment = {
        name: "",
        phone: "",
        email: "",
        city: "",
        district: "",
        ward: "",
        address: "",
        note: ""
    }

    const [payment, setPayment] = useState(initPayment);

    const { setHeaderColor } = useContext(Context);
    useEffect(() => {
        setHeaderColor('black');
    });

    function handleSubmit(placeOrder) {
        // Khi su dung de API thi o day se goi den ham gui len API ban feedback
        console.log(placeOrder);
    }

    // get cart
    let cart = localStorage.getItem('cart');
    let total = 0;
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }

    return (
        <div className={clsx('container')}>
            <div className={clsx('grid wide')}>
                <div className={clsx('row')}>
                    <div className={clsx('col l-2 m-0 s-0')}>
                        <NavBar />
                    </div>
                    <div className={clsx('col l-10 m-12 s-12')}>
                        <div className={clsx('row', styles.paymentContainer)}>
                            {cart.length !== 0 ? (
                                <>
                                    <div className={clsx('col l-7 m-12 s-12')}>
                                        <div className={clsx(styles.colItem)}>
                                            <p className={clsx(styles.title)}>
                                                Payment and delivery
                                            </p>
                                            <div className={styles.paymentForm}>
                                                <label htmlFor="name">name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className={clsx(styles.formItem)}
                                                    value={payment.name}
                                                    onChange={(e) => setPayment({ ...payment, name: e.target.value })}
                                                />
                                                <label htmlFor="phone">phone</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    pattern="[0-9]{10}"
                                                    className={clsx(styles.formItem)}
                                                    value={payment.phone}
                                                    onChange={(e) => setPayment({ ...payment, phone: e.target.value })}
                                                />
                                                <label htmlFor="email">e-mail</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className={clsx(styles.formItem)}
                                                    value={payment.email}
                                                    onChange={(e) => setPayment({ ...payment, email: e.target.value })}
                                                />
                                                <label htmlFor="city">Province/City</label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    className={clsx(styles.formItem)}
                                                    value={payment.city}
                                                    onChange={(e) => setPayment({ ...payment, city: e.target.value })}
                                                />
                                                <label htmlFor="district">District</label>
                                                <input
                                                    type="text"
                                                    id="district"
                                                    name="district"
                                                    className={clsx(styles.formItem)}
                                                    value={payment.district}
                                                    onChange={(e) => setPayment({ ...payment, district: e.target.value })}
                                                />
                                                <label htmlFor="ward">Ward</label>
                                                <input
                                                    type="text"
                                                    id="ward"
                                                    name="ward"
                                                    className={clsx(styles.formItem)}
                                                    value={payment.ward}
                                                    onChange={(e) => setPayment({ ...payment, ward: e.target.value })}
                                                />
                                                <label htmlFor="address">Address</label>
                                                <input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    className={clsx(styles.formItem)}
                                                    value={payment.address}
                                                    onChange={(e) => setPayment({ ...payment, address: e.target.value })}
                                                />
                                                <label htmlFor="note">order note (optional)</label>
                                                <textarea
                                                    name="note"
                                                    id="note"
                                                    className={clsx(styles.formItem)}
                                                    value={payment.note}
                                                    onChange={(e) => setPayment({ ...payment, note: e.target.value })}
                                                >
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={clsx('col l-5 m-12 s-12')}>
                                        <div className={clsx(styles.colItem)}>
                                            <p className={clsx(styles.title)}>
                                                Your order
                                            </p>
                                            <div className={clsx(styles.cartItemList)}>
                                                <ul className={clsx(styles.cartList)}>
                                                    <li className={clsx(styles.cartItem)}>
                                                        <p className={clsx(styles.itemTitle)}>Sản phẩm</p>
                                                        <p className={clsx(styles.itemTitle)}>Tạm tính</p>
                                                    </li>
                                                    {/* begin loop */}

                                                    {cart.map((item, index) => {
                                                        total += parseInt(item.product.price) * item.quantity;
                                                        return (
                                                            <li className={clsx(styles.cartItem)} key={index}>
                                                                <p>{item.product.name} - Size: {item.size} x {item.quantity}</p>
                                                                <p>
                                                                    {currencyFormat(item.product.price)}
                                                                </p>
                                                            </li>
                                                        )
                                                    })}
                                                    {/* end loop */}
                                                    <li className={clsx(styles.cartItem)}>
                                                        <p className={clsx(styles.itemTitle)}>Total</p>
                                                        <p>
                                                            {currencyFormat(total)}
                                                        </p>
                                                    </li>
                                                </ul>
                                                <div className={clsx(styles.checkoutContainer)}>
                                                    <button
                                                        onClick={() => handleSubmit(payment)}
                                                        className={clsx(styles.checkoutBtn, styles.btn)}
                                                    >
                                                        place order
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <p className={clsx(styles.title)}>
                                    Giỏ hàng của bạn đang trống
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;