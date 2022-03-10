import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import styles from './Error.module.css';

function Error() {
    return (
        <>
            <Helmet>
                <title>
                    404 | Error
                </title>
            </Helmet>
            <div className={clsx('grid')}>
                <div className={clsx('row')} style={{ 'margin': '0px' }}>
                    <div
                        className={clsx('col l-6 m-0 s-0', styles.local_col)}
                        style={{ 'padding': '0px' }}
                    >
                        <div className={clsx(styles.error_image)}>
                        </div>
                    </div>
                    <div
                        className={clsx('col l-6 m-12 s-12', styles.local_col)}
                        style={{ 'padding': '0px' }}
                    >
                        <div className={clsx(styles.error_info)}>
                            <p className={styles.error}>404</p>
                            <p className={styles.info}>We couldn't find the page you're looking for</p>
                            <Link to='/' className={styles.link}>Go back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Error;