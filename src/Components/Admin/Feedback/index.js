import clsx from "clsx";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <title>
                    Feedback Management - SMUT Clothing
                </title>
            </Helmet>
            <div className={clsx('support')}>
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
            </div>
            <div className={clsx('unsupport')}>
                <p>Sorry, your device is unsupported.</p>
                <p>Please use PC to access this page.</p>
            </div>
        </CheckToken>
    )
}

export default Feedback;
