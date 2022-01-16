import clsx from 'clsx';
import {
    useContext,
    useEffect
} from 'react';
import { Link, useParams } from 'react-router-dom';

import { Context } from '../Store';
import NavBar from '../NavBar';
import styles from './Shop.module.css';
import { currencyFormat } from '../../Utils/NumberFormat';


function Shop() {
    const { products, categories, setHeaderColor } = useContext(Context);
    useEffect(() => {
        setHeaderColor('black');
    });

    const { slug } = useParams();
    let filteredProducts;
    if (slug) {
        let cateID = categories.find(category => category.slug === slug);

        if (cateID) {
            cateID = cateID.id;
            filteredProducts = products.filter(product => product.cate_id === cateID);
            if (filteredProducts.length === 0) {
                // console.log('Has category but 0 products');
                filteredProducts = [];
            }
        } else {
            // console.log('No category');
            filteredProducts = [];
        }
    } else {
        filteredProducts = products;
    }

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
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <div className={clsx('col l-4 m-6 s-6')} key={product.id}>
                                        <div className={clsx(styles.card)}>
                                            <div className={clsx(styles.cardImage)}>
                                                <Link to={`/shop/${product.slug}`}>
                                                    <img
                                                        src={product.images[0]}
                                                        alt={product.slug}
                                                        className={clsx(styles.img1)}
                                                    />
                                                    <img
                                                        src={product.images[1]}
                                                        alt={product.slug}
                                                        className={clsx(styles.img2)}
                                                    />
                                                </Link>
                                            </div>
                                            <div className={clsx(styles.cardTitle)}>
                                                <Link to={`/shop/${product.slug}`}>
                                                    {product.name}
                                                </Link>
                                            </div>
                                            <div className={clsx(styles.cardPrice)}>
                                                {currencyFormat(product.price)}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className={clsx('col l-12 m-12 s-12')}>
                                    <div className={clsx(styles.alertDiv)}>
                                        Không có sản phẩm nào
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop