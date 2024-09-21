// Expenditures.js
import React, { useState } from 'react';

const Expenditures = () => {
    const [expenditures, setExpenditures] = useState([]);
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleAddExpenditure = () => {
        setExpenditures([...expenditures, { amount, description }]);
        setAmount('');
        setDescription('');
    };

    return (
        <div className="expenditures">
            <h2>Expenditures</h2>
            <div className="add-expenditure">
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={handleAddExpenditure}>Add Expenditure</button>
            </div>
            <ul className="expenditure-list">
                {expenditures.map((exp, index) => (
                    <li key={index}>
                        {exp.amount} - {exp.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Expenditures;
