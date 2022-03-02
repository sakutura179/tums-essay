import clsx from "clsx";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
// import styles from './Invoice.module.css';

function Invoice() {
    const [pending, setPending] = useState(true);
    const [invoices, setInvoices] = useState([]);
    const invoiceAPI = 'http://tums-essay-be.shop/api/invoices';

    useEffect(() => {
        fetch(invoiceAPI)
            .then(res => res.json())
            .then(fetchData => setInvoices(fetchData.data))
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
        </CheckToken>
    )
}

export default Invoice;
