import clsx from 'clsx';

import styles from './Login.module.css'

function Login() {

    return (
        <>
            <div className={clsx(styles.login_container)}>
                <div className={clsx(styles.login_form)}>
                    <h1>Admin Login</h1>
                    <form>
                        <div className={clsx(styles.label_container)}>
                            <input type="text" required />
                            <label>Username</label>
                        </div>
                        <div className={clsx(styles.label_container)}>
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className={clsx(styles.label_container)}>
                            <button type="submit">login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;