import clsx from "clsx";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
// import styles from './Invoice.module.css';

function Invoice() {
    const [pending, setPending] = useState(true);
    const [invoices, setInvoices] = useState([]);
    const productAPI = 'http://tums-essay-be.shop/api/invoices';

    useEffect(() => {
        fetch(productAPI)
            .then(res => res.json())
            .then(fetchData => setInvoices(fetchData))
            .then(() => setPending(false))
            .catch(err => console.log(err))
    }, []);

    const columns = [
        {
            name: 'ID',
            selector: row => row.invoice_id,
            sortable: true,
            width: '60px'
        },
        {
            name: 'Customer Name',
            selector: row => row.customerName,
            sortable: true,
            width: '150px',
            wrap: true
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            width: '110px',
        },
        {
            name: 'Email',
            selector: row => row.email,
            grow: 2,
            wrap: true
        },
        {
            name: 'Address',
            selector: row => `${row.address}, ${row.ward}, ${row.district}, ${row.city}`,
            grow: 3,
            wrap: true
        },
        {
            name: 'Note',
            selector: row => row.note,
            grow: 3,
            wrap: true
        },
        {
            name: 'Total (VNĐ)',
            selector: row => row.total_invoice,
            sortable: true,
            grow: 2,
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
                <h1>Invoice List</h1>
                <DataTable
                    columns={columns}
                    data={invoices}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    progressPending={pending}
                />
            </div>
        </CheckToken>
    )
}

export default Invoice;
