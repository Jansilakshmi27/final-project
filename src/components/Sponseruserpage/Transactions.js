import React, { useState } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const newTransaction = { amount, description, date };
    setTransactions([...transactions, newTransaction]);
    setAmount('');
    setDescription('');
    setDate('');
  };

  return (
    <div>
      <h2>Manage Transactions</h2>
      <form onSubmit={handleAddTransaction}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>

      <h3>Transaction List</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date}: {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
