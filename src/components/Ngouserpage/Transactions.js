// Transactions.js
import React from 'react';
import './Transaction.css';

const Transactions = () => {
    // Sample data - replace with actual data fetching
    const transactions = [
        { type: 'Donation', amount: 1000, date: '2024-09-01' },
        { type: 'Expenditure', amount: 500, date: '2024-09-05' },
        { type: 'Donation', amount: 1200, date: '2024-09-07' },
        { type: 'Expenditure', amount: 300, date: '2024-09-10' },
        { type: 'Donation', amount: 750, date: '2024-09-12' },
        { type: 'Expenditure', amount: 450, date: '2024-09-15' },
        { type: 'Donation', amount: 2000, date: '2024-09-16' },
        { type: 'Expenditure', amount: 850, date: '2024-09-18' },
        { type: 'Donation', amount: 950, date: '2024-09-19' }, // New transaction
        { type: 'Expenditure', amount: 600, date: '2024-09-20' }, // New transaction
        { type: 'Donation', amount: 400, date: '2024-09-21' }, // New transaction
        { type: 'Expenditure', amount: 1200, date: '2024-09-22' }, // New transaction
        { type: 'Donation', amount: 1750, date: '2024-09-23' }, // New transaction
        { type: 'Expenditure', amount: 250, date: '2024-09-24' }, // New transaction
        { type: 'Donation', amount: 3000, date: '2024-09-25' }, // New transaction
        { type: 'Expenditure', amount: 700, date: '2024-09-26' }  // New transaction
    ];

    return (
        <div className="transactions">
            <h2>Transactions</h2>
            <ul className="transaction-list">
                {transactions.map((trans, index) => (
                    <li key={index}>
                        {trans.type}: {trans.amount} on {trans.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;
