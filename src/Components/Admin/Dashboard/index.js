import clsx from "clsx";
import { useState, useEffect } from 'react';
import { currencyFormat } from "../../../Utils/NumberFormat";

import CheckToken from "../../CheckToken";
import Sidebar from "../Sidebar";
import styles from './Dashboard.module.css';

function Dashboard() {
    const [income, setIncome] = useState([]);
    const incomeAPI = 'http://tums-essay-be.shop/api/income';

    useEffect(() => {
        fetch(incomeAPI)
            .then(res => res.json())
            .then(fetchData => setIncome(fetchData))
            .catch(err => console.log(err))
    }, []);

    const getIncome = () => {
        let total = 0;
        income.forEach(item => {
            total += item.total_invoice;
        })
        return currencyFormat(total);
    }

    const getIncomeInMonth = () => {
        let total = 0;
        const currentMonth = new Date().getMonth();
        income.forEach(item => {
            const invoiceMonth = new Date(item.created_at).getMonth();
            if (currentMonth === invoiceMonth)
                total += item.total_invoice;
        })
        return currencyFormat(total);
    }

    const getOrder = () => income.length;

    const getOrderInMonth = () => {
        let total = 0;
        const currentMonth = new Date().getMonth();
        income.forEach(item => {
            const invoiceMonth = new Date(item.created_at).getMonth();
            if (currentMonth === invoiceMonth)
                total += 1;
        })
        return total;
    }

    const getMonthName = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const currentMonth = new Date().getMonth();
        return monthNames[currentMonth];
    }

    return (
        <CheckToken>
            <div className={clsx('support')}>
                <Sidebar />
                <div className={clsx('adminContent')}>
                    <h1>Admin's Dashboard</h1>
                    <div className={clsx(styles.container)}>
                        <div className={clsx(styles.item, styles.item1)}>
                            <p>Total income</p>
                            <h2>{getIncome()}</h2>
                        </div>
                        <div className={clsx(styles.item, styles.item2)}>
                            <p>Total income in {getMonthName()}</p>
                            <h2>{getIncomeInMonth()}</h2>
                        </div>
                        <div className={clsx(styles.item, styles.item3)}>
                            <p>Total Order</p>
                            <h2>{getOrder()}</h2>
                        </div>
                        <div className={clsx(styles.item, styles.item4)}>
                            <p>Total Order in {getMonthName()}</p>
                            <h2>{getOrderInMonth()}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx('unsupport')}>
                <p>Sorry, your device is unsupported.</p>
                <p>Please use PC to access this page.</p>
            </div>
        </CheckToken>
    )
}

export default Dashboard;
