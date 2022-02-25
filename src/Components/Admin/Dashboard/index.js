import clsx from "clsx";

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";

function Dashboard() {
    return (
        <CheckToken>
            <Sidebar />
            <div className={clsx('adminContent')}>
                Dashboard
            </div>
        </CheckToken>
    )
}

export default Dashboard;
