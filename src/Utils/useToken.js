import { useState } from "react";

export default function useToken() {
    const getToken = () => {
        // token nay la key trong sessionStorage (Mat khi tat trinh duyet)
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        // token nay la key cua API tra ve
        return userToken?.token;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        // Luu gia tri token tra ve cua API vao sessionStorage (Mat khi tat trinh duyet)
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}