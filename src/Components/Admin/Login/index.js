import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './Login.module.css'

function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Gui data len server. Sau do nhan ve token
        console.log(username, password);
        setToken({ 'token': '12345' });
    }

    return (
        <>
            <div className={clsx(styles.login_container)}>
                <div className={clsx(styles.login_form)}>
                    <h1>Admin Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={clsx(styles.label_container)}>
                            <input
                                type="text"
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                            <label>Username</label>
                        </div>
                        <div className={clsx(styles.label_container)}>
                            <input
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
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
// Kiem tra xem co truyen tham so setToken vao component k
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;