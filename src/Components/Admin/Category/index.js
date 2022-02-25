import useToken from "../../../Utils/useToken";
import Login from "../Login";

function Category() {
    const { token, setToken } = useToken();

    if (!token)
        return <Login setToken={setToken} />;

    return (
        <div>
            Category
        </div>
    );
}

export default Category;
