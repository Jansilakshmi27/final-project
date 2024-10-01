import React, { useState } from 'react';
import './Expenditure.css';

const Expenditures = () => {
    const [expenditures, setExpenditures] = useState([]);
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const handleAddExpenditure = () => {
        setExpenditures([...expenditures, { amount, description, date, category }]);
        setAmount('');
        setDescription('');
        setDate('');
        setCategory('');
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
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button onClick={handleAddExpenditure}>Add Expenditure</button>
            </div>
            <ul className="expenditure-list">
                {expenditures.map((exp, index) => (
                    <li key={index} className="expenditure-item">
                        <div><strong>Amount:</strong> {exp.amount}</div>
                        <div><strong>Description:</strong> {exp.description}</div>
                        <div><strong>Date:</strong> {exp.date}</div>
                        <div><strong>Category:</strong> {exp.category}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Expenditures;
