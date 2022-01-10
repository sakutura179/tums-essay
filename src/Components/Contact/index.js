import clsx from "clsx"
import { useContext } from 'react';

import { HeaderColor } from '../../App';
import styles from "./Contact.module.css"

function Contact() {
    const [headerColor, setHeaderColor] = useContext(HeaderColor);
    console.log(headerColor);
    setHeaderColor('black');

    return (
        <div className={clsx('grid wide')}>
            <h2 className={clsx(styles.title)}>Contact</h2>
        </div>
    )
}

export default Contact