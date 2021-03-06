import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { Markup } from 'interweave';
import { Helmet } from 'react-helmet-async';

import NavBar from '../NavBar';
import { Context } from '../Store'
import styles from './Detail.module.css'
import { currencyFormat } from '../../Utils/NumberFormat';
import Header from "../Header";

function Detail() {
    const { slug } = useParams();
    const { products } = useContext(Context);

    const product = products.find(product => product.slug === slug);

    const [quantity, setQuantity] = useState(1);
    const [checkedSize, setCheckedSize] = useState('');
    const [quantityInStock, setQuantityInStock] = useState('');

    const handleAddToCart = () => {
        if (checkedSize !== '') {
            // console.log(quantity, checkedSize);
            let cart = localStorage.getItem('cart');
            if (cart) {
                cart = JSON.parse(cart);
                // Tim kiem da co san pham size nay chua
                var i = cart.findIndex(item => item.product.product_id === product.product_id && item.size === checkedSize)

                // Neu co roi thi cong them quantity
                if (i !== -1) {
                    cart[i].quantity += quantity;
                } else {
                    // Chua co thi them vao mang bang ham push
                    cart.push({
                        product,
                        quantity,
                        size: checkedSize
                    });
                }

                // Trong TH nao thi cung setItem lai cho key 'cart'
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                // Neu trong localStorage chua co cart thi tao moi
                cart = [{
                    product,
                    quantity,
                    size: checkedSize
                }];

                localStorage.setItem('cart', JSON.stringify(cart));
            }

            window.location.reload();
        }
    }

    // Slideshow
    const [currentImage, setCurrentImage] = useState(0);

    let renderThis;
    // let url = 'https://tums-essay-be.herokuapp.com/';
    let url = "http://tums-essay-be.shop/";

    if (product)
        renderThis = (
            <div className={clsx('row')}>
                <div className={clsx('col l-6 m-12 s-12')}>
                    <div className={clsx(styles.imageContainer)}>
                        {product.image.map((item, index) => (
                            <img
                                key={index}
                                src={url + item.path}
                                alt={product.slug}
                                className={clsx(index === currentImage ? styles.active : '')}
                            />
                        ))}
                        <div className={clsx(styles.btnContainer)}>
                            <button
                                className={clsx(styles.changeImg, styles.btnLeft)}
                                onClick={() => {
                                    if (currentImage === 0)
                                        setCurrentImage(product.image.length - 1);
                                    else
                                        setCurrentImage(currentImage - 1);
                                }}
                            >
                                <i className='bx bxs-chevron-left'></i>
                            </button>
                            <button
                                className={clsx(styles.changeImg, styles.btnRight)}
                                onClick={() => {
                                    if (currentImage === product.image.length - 1)
                                        setCurrentImage(0);
                                    else
                                        setCurrentImage(currentImage + 1);
                                }}
                            >
                                <i className='bx bxs-chevron-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={clsx('col l-6 m-12 s-12')}>
                    <div className={styles.infoContainer}>
                        <div className={clsx(styles.title)}>
                            {product.name}
                        </div>
                        <div className={clsx(styles.price)}>
                            {currencyFormat(product.price)}
                        </div>


                        <div className={clsx(styles.sizes)}>
                            {product.size.map((item) => (
                                <p key={item.name} >
                                    <input
                                        type={'radio'}
                                        id={item.name}
                                        className={clsx(styles.size)}
                                        name={'size'}
                                        onChange={() => {
                                            setCheckedSize(item.name);
                                            setQuantityInStock(item.pivot.quantity);
                                            setQuantity(1);
                                            return;
                                        }}
                                        checked={item.name === checkedSize}
                                        hidden
                                    />
                                    <label
                                        className={clsx(styles.sizeLabel)}
                                        htmlFor={item.name}
                                    >
                                        {item.name}
                                    </label>
                                </p>
                            ))}
                        </div>
                        {
                            checkedSize !== '' ?
                                quantityInStock !== 0 ? (
                                    <div>{quantityInStock} s???n ph???m c?? s???n</div>
                                ) : (
                                    <div className={clsx(styles.outOfStock)}>
                                        H???t h??ng
                                    </div>
                                )
                                : ''
                        }

                        <div className={clsx(styles.addToCartContainer)}>
                            <input
                                type={'number'}
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className={clsx(styles.quantity)}
                                min={1}
                                max={quantityInStock}
                                name={'quantity'}
                                onInput={(e) => {
                                    if (e.target.value !== '') {
                                        if (parseInt(e.target.value) > parseInt(e.target.max))
                                            e.target.value = e.target.max;

                                        return setQuantity(parseInt(e.target.value));
                                    } else {
                                        e.target.value = 1;
                                        return setQuantity(1);
                                    }
                                }}
                                disabled={checkedSize === ''}

                            />
                            <p>
                                <button
                                    onClick={() => {
                                        if (quantity < quantityInStock) {
                                            let newQuantity = quantity + 1;
                                            setQuantity(newQuantity);
                                        }
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => {
                                        if (quantity > 1) {
                                            let newQuantity = quantity - 1;
                                            setQuantity(newQuantity);
                                        }
                                    }}
                                >
                                    -
                                </button>
                            </p>
                            <button
                                onClick={() => handleAddToCart()}
                                className={clsx(
                                    styles.addToCart,
                                    (checkedSize === '' || quantityInStock === 0) ? styles.disabled : ''
                                )}
                                disabled={(checkedSize === '' || quantityInStock === 0)}
                            >
                                th??m v??o gi??? h??ng
                            </button>
                        </div>

                        <Markup
                            content={product.desc}
                            className={clsx(styles.desc)}
                        />
                    </div>
                </div>
            </div>
        )

    return (
        <>
            <Helmet>
                <title>
                    {product ? product.name : 'Product'} - SMUT Clothing
                </title>
            </Helmet>
            <Header />
            <div className={clsx('container')}>
                <div className={clsx('grid wide')}>
                    <div className={clsx('row', styles.rowContainer)}>
                        <div className={clsx('col l-2 m-0 s-0')}>
                            <NavBar />
                        </div>
                        <div className={clsx('col l-10 m-12 s-12')}>
                            {renderThis}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;