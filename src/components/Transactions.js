import React, { useEffect, useState } from 'react';
import transactionsData from './transactions.json'; // Import JSON data
import './Transactions.css';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Set the transactions data from JSON file
    setTransactions(transactionsData);
  }, []);

  return (
    <div className="transactions-container">
      <h2>Transaction History</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Sponsor</th>
            <th>NGO</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.sponsor}</td>
              <td>{transaction.ngo}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
