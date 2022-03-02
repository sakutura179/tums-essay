import clsx from "clsx";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
// import styles from './Feedback.module.css';

function Feedback() {
    const [pending, setPending] = useState(true);
    const [feedbacks, setFeedbacks] = useState([]);
    const feedbackAPI = 'http://tums-essay-be.shop/api/feedbacks';

    useEffect(() => {
        fetch(feedbackAPI)
            .then(res => res.json())
            .then(fetchData => setFeedbacks(fetchData))
            .then(() => setPending(false))
            .catch(err => console.log(err))
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: row => row.feedback_id,
            sortable: true,
            width: '60px'
        },
        {
            name: 'Customer Name',
            selector: row => row.customerName,
            sortable: true,
            wrap: true
        },
        {
            name: 'Phone',
            selector: row => row.phone
        },
        {
            name: 'Email',
            selector: row => row.email,
            grow: 2,
            wrap: true
        },
        {
            name: 'Message',
            selector: row => row.message,
            grow: 3,
            wrap: true
        }
    ];

    const paginationComponentOptions = {
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All'
    }

    return (
        <CheckToken>
            <Sidebar />
            <div className={clsx('adminContent')}>
                <h1>Feedback List</h1>
                <DataTable
                    fixedHeader
                    columns={columns}
                    data={feedbacks}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    progressPending={pending}
                />
            </div>
        </CheckToken>
    )
}

export default Feedback;
