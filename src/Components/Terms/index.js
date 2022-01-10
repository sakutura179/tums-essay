import clsx from 'clsx';
import { useContext } from 'react';

import { HeaderColor } from '../../App';
import styles from './Terms.module.css'

function Terms() {
    const [headerColor, setHeaderColor] = useContext(HeaderColor);
    console.log(headerColor);
    setHeaderColor('black');

    return (
        <div className={clsx('grid wide')}>
            <h2 className={clsx(styles.title)}>Terms</h2>
        </div>
    )
}

export default Terms