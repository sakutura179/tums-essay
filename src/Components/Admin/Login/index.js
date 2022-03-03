import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import styles from './Login.module.css'

async function loginUser(content) {
    return fetch('http://tums-essay-be.shop/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    })
        .then(res => res.json())
}
function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Gui data len server. Sau do nhan ve token
        const token = await loginUser({ username, password });
        if (token.status === 'success')
            setToken(token);
        else
            setError(token.message);
    }

    return (
        <>
            <Helmet>
                <title>
                    Login - SMUT Clothing
                </title>
            </Helmet>
            <div className={clsx(styles.login_container)}>
                <div className={clsx(styles.login_form)}>
                    <h1>Admin Login</h1>
                    {/* Show error message */}
                    {
                        error &&
                        <p className={clsx(styles.error)}>
                            {error}
                            <button onClick={() => setError(false)}>
                                <i className='bx bx-x' ></i>
                            </button>
                        </p>
                    }
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