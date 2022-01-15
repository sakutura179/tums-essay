import clsx from 'clsx';
import {
    useContext,
    useEffect
} from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../Store';
import NavBar from '../NavBar';
import styles from './Shop.module.css'

function Shop() {
    const { products, setHeaderColor } = useContext(Context);
    useEffect(() => {
        setHeaderColor('black');
    });

    const numberFormat = (value) =>
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value);

    return (
        <div className={clsx('container')}>
            <div className={clsx('grid wide')}>
                <div className={clsx('row')}>
                    <div className={clsx('col l-2 m-0 s-0')}>
                        <NavBar />
                    </div>
                    <div className={clsx('col l-10 m-12 s-12')}>
                        <div className={clsx('row', styles.cardsContainer)}>
                            {/* begin loop */}
                            {products.map(product => (
                                <div className={clsx('col l-4 m-6 s-6')} key={product.id}>
                                    <div className={clsx(styles.card)}>
                                        <div className={clsx(styles.cardImage)}>
                                            <Link to={`/shop/${product.slug}`}>
                                                <img src={product.images[0]} alt={product.slug} />
                                            </Link>
                                        </div>
                                        <div className={clsx(styles.cardTitle)}>
                                            <Link to={`/shop/${product.slug}`}>
                                                {product.name}
                                            </Link>
                                        </div>
                                        <div className={clsx(styles.cardPrice)}>
                                            {numberFormat(product.price)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop