import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';

import { Context } from '../Store';
import NavBar from '../NavBar';
import styles from './Cart.module.css';
import { currencyFormat } from '../../Utils/NumberFormat';

function Cart() {
    const { setHeaderColor } = useContext(Context);
    useEffect(() => {
        setHeaderColor('black');
    });

    // get cart
    let cart = localStorage.getItem('cart');
    let total = 0;
    // product list
    let productList = [];
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }

    let initPayment = {
        customerName: "",
        phone: "",
        email: "",
        city: "",
        district: "",
        ward: "",
        address: "",
        note: ""
    }

    const [payment, setPayment] = useState(initPayment);

    const API_URL = 'http://localhost:8080';

    const createInvoice = (data) => {
        let option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(`${API_URL}/invoice`, option)
            .then(() => alert('Đã đặt hàng thành công'))
            .then(() => {
                localStorage.removeItem('cart');
                window.location.reload();
            })
            .catch(() => alert('Đã xảy ra lỗi. Vui lòng thử lại sau một vài phút'));
    }

    function handleSubmit(placeOrder) {
        // Khi su dung de API thi o day se goi den ham gui len API ban feedback
        let customerName, phone, email, city, district, ward, address;
        ({ customerName, phone, email, city, district, ward, address } = placeOrder);
        if (customerName && phone && email && city && district && ward && address) {
            // console.log(placeOrder);
            let data = {
                ...placeOrder,
                total_invoice: total,
                products: productList
            }
            createInvoice(data);
        } else
            alert("Vui lòng nhập đầy đủ thông tin");
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
                                                Thanh toán và giao hàng
                                            </p>
                                            <div className={styles.paymentForm}>
                                                <label htmlFor="customerName">họ và tên</label>
                                                <input
                                                    type="text"
                                                    id="customerName"
                                                    name="customerName"
                                                    placeholder='Nhập đầy đủ họ và tên của bạn'
                                                    className={clsx(styles.formItem)}
                                                    value={payment.customerName}
                                                    onChange={(e) => setPayment({ ...payment, customerName: e.target.value })}
                                                />
                                                <label htmlFor="phone">số điện thoại</label>
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
                                                <label htmlFor="city">tỉnh/thành phố</label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    className={clsx(styles.formItem)}
                                                    value={payment.city}
                                                    onChange={(e) => setPayment({ ...payment, city: e.target.value })}
                                                />
                                                <label htmlFor="district">quận/huyện</label>
                                                <input
                                                    type="text"
                                                    id="district"
                                                    name="district"
                                                    className={clsx(styles.formItem)}
                                                    value={payment.district}
                                                    onChange={(e) => setPayment({ ...payment, district: e.target.value })}
                                                />
                                                <label htmlFor="ward">xã/phường/thị trấn</label>
                                                <input
                                                    type="text"
                                                    id="ward"
                                                    name="ward"
                                                    className={clsx(styles.formItem)}
                                                    value={payment.ward}
                                                    onChange={(e) => setPayment({ ...payment, ward: e.target.value })}
                                                />
                                                <label htmlFor="address">địa chỉ</label>
                                                <input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    placeholder='Ví dụ: Số nhà, tên đường, ...'
                                                    className={clsx(styles.formItem)}
                                                    value={payment.address}
                                                    onChange={(e) => setPayment({ ...payment, address: e.target.value })}
                                                />
                                                <label htmlFor="note">ghi chú đơn hàng (tùy chọn)</label>
                                                <textarea
                                                    name="note"
                                                    id="note"
                                                    placeholder='Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn'
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
                                                Đơn hàng của bạn
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
                                                        productList.push(
                                                            {
                                                                id: item.product.id,
                                                                quantity: item.quantity
                                                            }
                                                        );
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
                                                        <p className={clsx(styles.itemTitle)}>Tổng cộng</p>
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
                                                        đặt hàng
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