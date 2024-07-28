// OfficeTransactions.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OfficeTransactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('/transactions')
            .then(response => setTransactions(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Office Transactions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Credit</th>
                        <th>Debit</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.credit}</td>
                            <td>{transaction.debit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OfficeTransactions;
