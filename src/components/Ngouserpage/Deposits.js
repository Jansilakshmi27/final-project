// Deposits.js
import React from 'react';
import './Deposits.css';

const Deposits = () => {
    // Sample data - replace with actual data fetching
    const deposits = [
        { donor: 'John Doe', amount: 1000, date: '2024-09-01' },
        { donor: 'Jane Smith', amount: 500, date: '2024-09-03' },
        { donor: 'Michael Johnson', amount: 2000, date: '2024-09-05' },
        { donor: 'Emily Davis', amount: 750, date: '2024-09-06' },
        { donor: 'Chris Brown', amount: 1200, date: '2024-09-07' },
        { donor: 'Sarah Wilson', amount: 950, date: '2024-09-08' },
        { donor: 'David Martinez', amount: 600, date: '2024-09-10' },
        { donor: 'Sophia Garcia', amount: 1500, date: '2024-09-12' },
        { donor: 'Alice Thompson', amount: 300, date: '2024-09-14' }, // New donor
        { donor: 'Robert White', amount: 850, date: '2024-09-15' }, // New donor
        { donor: 'Olivia Brown', amount: 120, date: '2024-09-16' }, // New donor
        { donor: 'Liam Johnson', amount: 400, date: '2024-09-17' }, // New donor
        { donor: 'Emma Davis', amount: 600, date: '2024-09-18' }, // New donor
        { donor: 'Mia Clark', amount: 1100, date: '2024-09-19' }, // New donor
        { donor: 'James Wilson', amount: 750, date: '2024-09-20' }, // New donor
        { donor: 'Ava Martinez', amount: 950, date: '2024-09-21' } // New donor
    ];

    return (
        <div className="deposits">
            <h2>Deposits</h2>
            <ul className="deposit-list">
                {deposits.map((dep, index) => (
                    <li key={index}>
                        {dep.donor} donated {dep.amount} on {dep.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Deposits;
