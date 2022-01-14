import clsx from 'clsx';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { HeaderColor } from '../../App';
import NavBar from '../NavBar';
import styles from './Shop.module.css'

function Shop() {
    const [, setHeaderColor] = useContext(HeaderColor);
    useEffect(() => {
        setHeaderColor('black');
    });

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
                            <div className={clsx('col l-4 m-6 s-6')}>
                                <div className={clsx(styles.card)}>
                                    <div className={clsx(styles.cardImage)}>
                                        <Link to={'/'}>
                                            <img src={require('../../assets/product/product1.jpg')} alt='product-img' />
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardTitle)}>
                                        <Link to={'/'}>
                                            CODUROY SHORT – Black
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardPrice)}>
                                        350,000 đ
                                    </div>
                                </div>
                            </div>
                            <div className={clsx('col l-4 m-6 s-6')}>
                                <div className={clsx(styles.card)}>
                                    <div className={clsx(styles.cardImage)}>
                                        <Link to={'/'}>
                                            <img src={require('../../assets/product/product1.jpg')} alt='product-img' />
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardTitle)}>
                                        <Link to={'/'}>
                                            CODUROY SHORT – Black
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardPrice)}>
                                        350,000 đ
                                    </div>
                                </div>
                            </div>
                            <div className={clsx('col l-4 m-6 s-6')}>
                                <div className={clsx(styles.card)}>
                                    <div className={clsx(styles.cardImage)}>
                                        <Link to={'/'}>
                                            <img src={require('../../assets/product/product1.jpg')} alt='product-img' />
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardTitle)}>
                                        <Link to={'/'}>
                                            CODUROY SHORT – Black
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardPrice)}>
                                        350,000 đ
                                    </div>
                                </div>
                            </div>
                            <div className={clsx('col l-4 m-6 s-6')}>
                                <div className={clsx(styles.card)}>
                                    <div className={clsx(styles.cardImage)}>
                                        <Link to={'/'}>
                                            <img src={require('../../assets/product/product1.jpg')} alt='product-img' />
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardTitle)}>
                                        <Link to={'/'}>
                                            CODUROY SHORT – Black
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardPrice)}>
                                        350,000 đ
                                    </div>
                                </div>
                            </div>
                            <div className={clsx('col l-4 m-6 s-6')}>
                                <div className={clsx(styles.card)}>
                                    <div className={clsx(styles.cardImage)}>
                                        <Link to={'/'}>
                                            <img src={require('../../assets/product/product1.jpg')} alt='product-img' />
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardTitle)}>
                                        <Link to={'/'}>
                                            CODUROY SHORT – Black
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardPrice)}>
                                        350,000 đ
                                    </div>
                                </div>
                            </div>
                            <div className={clsx('col l-4 m-6 s-6')}>
                                <div className={clsx(styles.card)}>
                                    <div className={clsx(styles.cardImage)}>
                                        <Link to={'/'}>
                                            <img src={require('../../assets/product/product1.jpg')} alt='product-img' />
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardTitle)}>
                                        <Link to={'/'}>
                                            CODUROY SHORT – Black
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.cardPrice)}>
                                        350,000 đ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop