// Check Token component
import useToken from "../Utils/useToken";
import Login from "./Admin/Login";

function CheckToken({ children }) {
    const { token, setToken } = useToken();

    if (!token)
        return <Login setToken={setToken} />;

    return children;
}

export default CheckToken;