// AddTransaction.js
import React, { useState } from 'react';
import axios from 'axios';

const AddTransaction = () => {
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = { type, amount, description };

        axios.post('/transactions', newTransaction)
            .then(response => {
                // Handle successful response
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Add New Transaction</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Transaction Type:
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                </label>
                <label>
                    Amount:
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AddTransaction;
