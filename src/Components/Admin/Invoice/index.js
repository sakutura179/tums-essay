import clsx from "clsx";
import { useEffect, useState, useContext } from "react";
import DataTable from 'react-data-table-component';
import { Helmet } from 'react-helmet-async';

import { Context } from '../../Store';
import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
// import styles from './Invoice.module.css';

function Invoice() {
    const { BE_URL } = useContext(Context);
    const [pending, setPending] = useState(true);
    const [invoices, setInvoices] = useState([]);
    const invoiceAPI = 'invoices';

    useEffect(() => {
        fetch(BE_URL + invoiceAPI)
            .then(res => res.json())
            .then(fetchData => setInvoices(fetchData.data))
            .then(() => setPending(false))
            .catch(err => console.log(err))
    }, [BE_URL]);

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
            width: '200px',
            wrap: true
        },
        {
            name: 'Address',
            selector: row => `${row.address}, ${row.ward}, ${row.district}, ${row.city}`,
            width: '250px',
            wrap: true
        },
        {
            name: 'Note',
            selector: row => row.note,
            width: '250px',
            wrap: true
        },
        {
            name: 'Product List',
            selector: row => {
                let content = '';
                row.products.forEach(element => {
                    content += `| ${element.name} - SL: ${element.pivot.quantity} |`;
                });
                console.log(content);
                return content;
            },
            width: '350px',
            wrap: true
        },
        {
            name: 'Total (VNĐ)',
            selector: row => row.total_invoice,
            sortable: true,
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
                    Invoice Management - SMUT Clothing
                </title>
            </Helmet>
            <div className={clsx('support')}>
                <Sidebar />
                <div className={clsx('adminContent')}>
                    <h1>Invoice List</h1>
                    <DataTable
                        fixedHeader
                        columns={columns}
                        data={invoices}
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

export default Invoice;
