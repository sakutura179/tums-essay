import clsx from "clsx"
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { Context } from '../Store';
import NavBar from '../NavBar';
import styles from "./Contact.module.css"
import Header from "../Header";
import { validEmail, validPhoneNumber } from '../../Utils/RegEx';

function Contact() {
    const { setHeaderColor, BE_URL } = useContext(Context);

    useEffect(() => {
        setHeaderColor('black');
    });

    let initContact = {
        customerName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [contact, setContact] = useState(initContact);

    const createFeedback = async (data) => {
        let option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        fetch(BE_URL + 'feedbacks', option)
            .then(() => alert('Đã gửi feedback thành công'))
            .then(() => window.location.reload())
            .catch(() => alert('Đã xảy ra lỗi. Vui lòng thử lại sau một vài phút'));
    }

    const [emailErr, setEmailErr] = useState(false);
    const [phoneErr, setPhoneErr] = useState(false);

    const handleSendMess = async (userInput) => {
        // Khi su dung de API thi o day se goi den ham gui len API bang feedback
        let customerName, phone, email, message;
        ({ customerName, phone, email, message } = userInput);
        if (customerName && phone && email && message) {
            let valid = {
                email: validEmail.test(email),
                phone: validPhoneNumber.test(phone)
            }
            if (!valid.email)
                setEmailErr(true);
            else
                setEmailErr(false);
            if (!valid.phone)
                setPhoneErr(true);
            else
                setPhoneErr(false);

            if (valid.email && valid.phone) {
                console.log(userInput);
                let data = {
                    ...userInput
                }
                await createFeedback(data);
            }

        } else
            alert("Vui lòng nhập đầy đủ thông tin");
    }

    return (
        <>
            <Helmet>
                <title>
                    Contact - SMUT Clothing
                </title>
            </Helmet>
            <Header />
            <div className={clsx('container')}>
                <div className={clsx('grid wide')}>
                    <div className={clsx('row')}>
                        <div className={clsx('col l-2 m-0 s-0')}>
                            <NavBar />
                        </div>
                        <div className={clsx('col l-10 m-12 s-12')}>
                            <div className={clsx(styles.colItem)}>
                                <div className={styles.shopAdd}>
                                    <p>xx/x Đường kênh xx/x, P. X, TP. Sóc Trăng, Tỉnh Sóc Trăng</p>
                                    <p>giờ mở cửa: 12h12 - 12h12 tất cả các ngày trong tuần</p>
                                    <p>hotline: 0945xxx1212</p>
                                </div>
                                {(emailErr || phoneErr) && (
                                    <div className={styles.alertContainer}>
                                        {emailErr && <p>- Email is invalid</p>}
                                        {phoneErr && <p>- Phone is invalid</p>}
                                        <button onClick={() => {
                                            setEmailErr(false);
                                            setPhoneErr(false);
                                        }}>
                                            <i className='bx bx-x' ></i>
                                        </button>
                                    </div>
                                )}
                                <div className={styles.contactForm}>
                                    <label htmlFor="customerName">name</label>
                                    <input
                                        type="text"
                                        id="customerName"
                                        name="customerName"
                                        className={clsx(styles.formItem)}
                                        value={contact.customerName}
                                        onChange={(e) => setContact({ ...contact, customerName: e.target.value })}
                                    />
                                    <label htmlFor="email">e-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={clsx(styles.formItem)}
                                        value={contact.email}
                                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                                    />
                                    <label htmlFor="phone">phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        pattern="[0-9]{10}"
                                        className={clsx(styles.formItem)}
                                        value={contact.phone}
                                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                                    />
                                    <label htmlFor="message">your message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className={clsx(styles.formItem)}
                                        value={contact.message}
                                        onChange={(e) => setContact({ ...contact, message: e.target.value })}
                                    >
                                    </textarea>
                                    <button
                                        className={clsx(styles.submitBtn)}
                                        onClick={() => handleSendMess(contact)}
                                    >
                                        send message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact