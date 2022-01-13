import clsx from 'clsx';
import { useContext, useEffect } from 'react';

import { HeaderColor } from '../../App';
import NavBar from '../NavBar';
import styles from './Shop.module.css'

function Shop() {
    const [, setHeaderColor] = useContext(HeaderColor);
    useEffect(() => {
        setHeaderColor('black');
    });

    return (
        <div className={clsx(styles.container)}>
            <div className={clsx('grid wide')}>
                <div className={clsx('row')}>
                    <div className={clsx('col l-2 m-0 s-0')}>
                        <NavBar />
                    </div>
                    <div className={clsx('col l-10 m-12 s-12')}>
                        <h1>Shop</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop