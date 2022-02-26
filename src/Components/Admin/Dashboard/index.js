import clsx from "clsx";

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";

function Dashboard() {
    return (
        <CheckToken>
            <Sidebar />
            <div className={clsx('adminContent')}>
                <h1>Dashboard</h1>
            </div>
        </CheckToken>
    )
}

export default Dashboard;
