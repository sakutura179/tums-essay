import clsx from "clsx"
import { useContext, useEffect, useState } from 'react';

import { HeaderColor } from '../../App';
import NavBar from '../NavBar';
import styles from "./Contact.module.css"

function Contact() {
    const [, setHeaderColor] = useContext(HeaderColor);
    let initContact = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

    const [contact, setContact] = useState(initContact);

    useEffect(() => {
        setHeaderColor('black');
    });

    function handleSendMess(userInput) {
        // Khi su dung de API thi o day se goi den ham gui len API ban feedback
        localStorage.setItem('contact', JSON.stringify(userInput));
    }

    return (
        <div className={clsx(styles.container)}>
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
                            <div className={styles.contactForm}>
                                <label htmlFor="name">name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={clsx(styles.formItem)}
                                    value={contact.name}
                                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
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
    )
}

export default Contact