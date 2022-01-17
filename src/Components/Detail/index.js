import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

import NavBar from '../NavBar';
import { Context } from '../Store'
import styles from './Detail.module.css'
import { currencyFormat } from '../../Utils/NumberFormat';

function Detail() {
    const { slug } = useParams();
    const { products } = useContext(Context);

    const product = products.find(product => product.slug === slug);

    const [quantity, setQuantity] = useState(1);
    const [checkedSize, setCheckedSize] = useState('');

    const handleAddToCart = () => {
        if (checkedSize !== '') {
            // console.log(quantity, checkedSize);
            let cart = localStorage.getItem('cart');
            if (cart) {
                cart = JSON.parse(cart);
                // Tim kiem da co san pham size nay chua
                var i = cart.findIndex(item => item.product.id === product.id && item.size === checkedSize)

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
    if (product)
        renderThis = (
            <div className={clsx('row')}>
                <div className={clsx('col l-6 m-12 s-12')}>
                    <div className={clsx(styles.imageContainer)}>
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={product.slug}
                                className={clsx(index === currentImage ? styles.active : '')}
                            />
                        ))}
                        <div className={clsx(styles.btnContainer)}>
                            <button
                                className={clsx(styles.changeImg, styles.btnLeft)}
                                onClick={() => {
                                    if (currentImage === 0)
                                        setCurrentImage(product.images.length - 1);
                                    else
                                        setCurrentImage(currentImage - 1);
                                }}
                            >
                                <i className='bx bxs-chevron-left'></i>
                            </button>
                            <button
                                className={clsx(styles.changeImg, styles.btnRight)}
                                onClick={() => {
                                    if (currentImage === product.images.length - 1)
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

                        {product.quantity > 0 ?
                            (
                                <>
                                    <div className={clsx(styles.sizes)}>
                                        {product.sizes.map((size) => (
                                            <p key={size} >
                                                <input
                                                    type={'radio'}
                                                    id={size}
                                                    className={clsx(styles.size)}
                                                    name={'size'}
                                                    onChange={() => setCheckedSize(size)}
                                                    checked={size === checkedSize}
                                                    hidden
                                                />
                                                <label
                                                    className={clsx(styles.sizeLabel)}
                                                    htmlFor={size}
                                                >
                                                    {size}
                                                </label>
                                            </p>
                                        ))}
                                    </div>

                                    <div className={clsx(styles.addToCartContainer)}>
                                        <input
                                            type={'number'}
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                                            className={clsx(styles.quantity)}
                                            min={1}
                                            max={product.quantity}
                                            name={'quantity'}
                                        />
                                        <p>
                                            <button
                                                onClick={() => {
                                                    if (quantity < product.quantity) {
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
                                                checkedSize === '' ? styles.disabled : ''
                                            )}
                                        >
                                            thêm vào giỏ hàng
                                        </button>
                                    </div>
                                </>
                            ) :
                            (
                                <div className={clsx(styles.outOfStock)}>
                                    Hết hàng
                                </div>
                            )}

                        <div className={clsx(styles.desc)}>
                            {product.desc}
                        </div>

                    </div>
                </div>
            </div>
        )

    return (
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
    )
}

export default Detail;